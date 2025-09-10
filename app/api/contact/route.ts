import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, budget, message, turnstileToken } = body;

    // Validácia povinných polí
    if (!name || !email || !projectType || !message || !turnstileToken) {
      return NextResponse.json(
        { error: 'Povinné polia nie sú vyplnené' },
        { status: 400 }
      );
    }

    // Validácia e-mailu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Neplatný e-mail' },
        { status: 400 }
      );
    }

    // Verifikácia Turnstile token
    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.CF_TURNSTILE_SECRET_KEY!,
        response: turnstileToken,
        remoteip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '',
      }),
    });

    const turnstileData = await turnstileResponse.json();
    
    if (!turnstileData.success) {
      return NextResponse.json(
        { error: 'Verifikácia zlyhala. Skúste to prosím znovu.' },
        { status: 400 }
      );
    }

    // Konfigurácia Brevo API
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY nie je nastavené');
      return NextResponse.json(
        { error: 'Chyba konfigurácie servera' },
        { status: 500 }
      );
    }

    // Formátovanie rozpočtu
    const budgetLabels: { [key: string]: string } = {
      'less-500': 'Menej ako 500 €',
      '500-1500': '500 – 1500 €',
      '1500-3000': '1500 – 3000 €',
      '3000-plus': '3000 € a viac'
    };

    const budgetText = budget ? budgetLabels[budget] || budget : 'Neuvedené';

    // Vytvorenie e-mailu pre teba
    const emailContent = `
<h2>Nový kontakt z webu</h2>

<h3>Kontaktné údaje:</h3>
<p><strong>Meno:</strong> ${name}</p>
<p><strong>E-mail:</strong> ${email}</p>
<p><strong>Telefón:</strong> ${phone || 'Neuvedené'}</p>

<h3>Projekt:</h3>
<p><strong>Typ projektu:</strong> ${projectType}</p>
<p><strong>Rozpočet:</strong> ${budgetText}</p>

<h3>Správa:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>

<hr>
<p><small>Odoslané z kontaktného formulára na andrejsrna.sk</small></p>
    `;

    // E-mail pre teba (notifikácia)
    const notificationEmail = new brevo.SendSmtpEmail();
    notificationEmail.subject = `Nový kontakt: ${name} - ${projectType}`;
    notificationEmail.htmlContent = emailContent;
    notificationEmail.sender = { 
      name: "Kontaktný formulár", 
      email: "noreply@andrejsrna.sk" 
    };
    notificationEmail.to = [{ 
      email: "ahoj@andrejsrna.sk", 
      name: "Andrej Srna" 
    }];
    notificationEmail.replyTo = { 
      email: email, 
      name: name 
    };

    // Automatická odpoveď pre zákazníka
    const autoReplyContent = `
<h2>Ďakujem za váš záujem!</h2>

<p>Ahoj ${name},</p>

<p>dostal som vašu správu a ozvem sa vám do <strong>24 hodín</strong> s návrhom riešenia.</p>

<h3>Čo bude ďalej:</h3>
<ul>
  <li>Prebehne krátka konzultácia o vašom projekte</li>
  <li>Pripravím pre vás mini audit zdarma</li>
  <li>Navrhneme spoluprácu, ak si budeme sedieť</li>
</ul>

<p>Medzitým sa môžete pozrieť na moje <a href="https://andrejsrna.sk/#references">referencie</a> alebo si prečítať niečo zaujímavé na <a href="https://andrejsrna.sk/blog">blogu</a>.</p>

<p>S pozdravom,<br>
<strong>Andrej Srna</strong><br>
Web Developer & Marketér</p>

<hr>
<p><small>Tento e-mail bol odoslaný automaticky z andrejsrna.sk</small></p>
    `;

    const autoReply = new brevo.SendSmtpEmail();
    autoReply.subject = "Ďakujem za váš záujem - ozvem sa do 24h";
    autoReply.htmlContent = autoReplyContent;
    autoReply.sender = { 
      name: "Andrej Srna", 
      email: "ahoj@andrejsrna.sk" 
    };
    autoReply.to = [{ 
      email: email, 
      name: name 
    }];

    // Odoslanie oboch e-mailov
    await Promise.all([
      apiInstance.sendTransacEmail(notificationEmail),
      apiInstance.sendTransacEmail(autoReply)
    ]);

    return NextResponse.json(
      { 
        success: true, 
        message: 'E-mail bol úspešne odoslaný. Ozvem sa vám do 24 hodín!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Chyba pri odosielaní e-mailu:', error);
    
    // Konkrétnejšie chybové hlášky
    if (error instanceof Error) {
      if (error.message.includes('Invalid API key')) {
        return NextResponse.json(
          { error: 'Chyba autentifikácie' },
          { status: 401 }
        );
      }
      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Príliš veľa požiadaviek, skúste neskôr' },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Chyba pri odosielaní e-mailu. Skúste to prosím znovu.' },
      { status: 500 }
    );
  }
}
