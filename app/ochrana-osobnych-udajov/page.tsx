import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov | Andrej Srna",
  description: "Informácie o spracovaní a ochrane osobných údajov v súlade s GDPR nariadením.",
};

export default function OchranaOsobnychUdajovPage() {
  return (
    <div className="min-h-screen -mt-16 bg-gray-950 pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Ochrana osobných údajov
            </h1>
            <p className="text-xl text-gray-400">
              Informácie o spracovaní a ochrane vašich osobných údajov
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Úvodné informácie</h2>
              <p className="text-gray-300 mb-4">
                Táto stránka obsahuje informácie o tom, ako spracúvam vaše osobné údaje v súlade s nariadením 
                Európskeho parlamentu a Rady (EÚ) 2016/679 z 27. apríla 2016 o ochrane fyzických osôb pri 
                spracúvaní osobných údajov a o voľnom pohybe takýchto údajov (GDPR).
              </p>
              <p className="text-gray-300">
                <strong>Prevádzkovateľ:</strong><br />
                Andrej Srna<br />
                Email: ahoj@andrejsrna.sk<br />
                Telefón: +421 914 230 321
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Aké údaje zbierame</h2>
              <p className="text-gray-300 mb-4">
                Spracúvam iba tie osobné údaje, ktoré sú nevyhnutné pre poskytovanie služieb:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Kontaktné údaje:</strong> meno, priezvisko, email, telefónne číslo</li>
                <li><strong>Informácie o projekte:</strong> popis požiadaviek, rozpočet, časový rámec</li>
                <li><strong>Technické údaje:</strong> IP adresa, typ prehliadača, operačný systém (automaticky)</li>
                <li><strong>Cookies:</strong> súbory potrebné pre správne fungovanie webu</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Účel spracúvania údajov</h2>
              <p className="text-gray-300 mb-4">
                Vaše osobné údaje spracúvam na tieto účely:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Komunikácia a odpovedanie na vaše požiadavky</li>
                <li>Príprava cenových ponúk a návrhov riešení</li>
                <li>Realizácia zmluvných záväzkov</li>
                <li>Vedenie účtovníctva a dodržiavanie zákonných povinností</li>
                <li>Zlepšovanie kvality služieb a používateľského zážitku</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Právny základ spracúvania</h2>
              <p className="text-gray-300 mb-4">
                Údaje spracúvam na základe:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Súhlas dotknutej osoby</strong> - pri zaslaní kontaktného formulára</li>
                <li><strong>Plnenie zmluvy</strong> - pri realizácii objednaných služieb</li>
                <li><strong>Oprávnený záujem</strong> - pri zlepšovaní služieb a komunikácii</li>
                <li><strong>Právna povinnosť</strong> - pri vedení účtovníctva</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Doba uchovávania údajov</h2>
              <p className="text-gray-300 mb-4">
                Osobné údaje uchovávam len po nevyhnutnú dobu:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Kontaktné formuláre:</strong> 2 roky od posledného kontaktu</li>
                <li><strong>Zmluvná dokumentácia:</strong> 10 rokov (zákonná povinnosť)</li>
                <li><strong>Účtovné doklady:</strong> 10 rokov (zákonná povinnosť)</li>
                <li><strong>Technické logy:</strong> 12 mesiacov</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Vaše práva</h2>
              <p className="text-gray-300 mb-4">
                Ako dotknutá osoba máte právo:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Na prístup</strong> - informácie o spracúvaní vašich údajov</li>
                <li><strong>Na opravu</strong> - aktualizáciu nesprávnych údajov</li>
                <li><strong>Na vymazanie</strong> - odstránenie údajov za určitých podmienok</li>
                <li><strong>Na obmedzenie</strong> - dočasné pozastavenie spracúvania</li>
                <li><strong>Na prenosnosť</strong> - získanie údajov v štruktúrovanom formáte</li>
                <li><strong>Namietať</strong> - proti spracúvaniu na základe oprávneného záujmu</li>
                <li><strong>Odvolať súhlas</strong> - kedykoľvek bez udania dôvodu</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Bezpečnosť údajov</h2>
              <p className="text-gray-300 mb-4">
                Implementujem primerané technické a organizačné opatrenia na ochranu vašich údajov:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>SSL šifrovanie pri prenose údajov</li>
                <li>Pravidelné zálohovanie a aktualizácie</li>
                <li>Obmedzený prístup k údajom len pre oprávnené osoby</li>
                <li>Používanie overených a bezpečných služieb</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Cookies</h2>
              <p className="text-gray-300 mb-4">
                Webová stránka používa cookies pre svoje správne fungovanie:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Nevyhnutné cookies:</strong> potrebné pre základné fungovanie webu</li>
                <li><strong>Analytické cookies:</strong> na analýzu návštevnosti (Google Analytics)</li>
                <li><strong>Funkčné cookies:</strong> na zapamätanie preferencií používateľa</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Cookies môžete spravovať v nastaveniach vašeho prehliadača.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Tretie strany</h2>
              <p className="text-gray-300 mb-4">
                Údaje môžem zdieľať s týmito overenými poskytovateľmi služieb:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Hosting:</strong> pre prevádzku webovej stránky</li>
                <li><strong>Email služby:</strong> pre komunikáciu</li>
                <li><strong>Analytické nástroje:</strong> pre sledovanie návštevnosti</li>
                <li><strong>Účtovný softvér:</strong> pre vedenie účtovníctva</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Všetci poskytovatelia služieb sú povinní dodržiavať GDPR a zabezpečiť ochranu údajov.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Kontakt a sťažnosti</h2>
              <p className="text-gray-300 mb-4">
                Pre uplatnenie vašich práv alebo akékoľvek otázky ohľadom ochrany osobných údajov ma kontaktujte:
              </p>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong>Email:</strong> ahoj@andrejsrna.sk<br />
                  <strong>Telefón:</strong> +421 914 230 321
                </p>
              </div>
              <p className="text-gray-300 mt-4">
                Máte tiež právo podať stížnosť na Úrad na ochranu osobných údajov SR, ak sa domnievate, 
                že spracúvanie vašich údajov porušuje zákon.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Záverečné ustanovenia</h2>
              <p className="text-gray-300 mb-4">
                Tieto zásady ochrany osobných údajov sú platné od 1. januára 2024. 
                Vyhradzujem si právo ich aktualizovať v súlade so zmenami v legislatíve 
                alebo poskytovaných službách.
              </p>
              <p className="text-gray-300">
                <strong>Posledná aktualizácia:</strong> 1. január 2024 - <Link href="https://synthbit.cz">https://synthbit.cz</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 