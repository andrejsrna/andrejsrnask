'use client'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function CV() {
  return (
    <div className={`${inter.className} max-w-4xl mx-auto p-8 print:p-0 print:max-w-none bg-gray-50 relative`}>
      <header className="flex flex-col gap-6 mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Andrej Srna</h1>
            <p className="text-lg text-blue-600 font-medium italic">
              Tvorím digitálne produkty | web developer a marketér
            </p>
          </div>
          <div className="w-32 h-32 md:w-36 md:h-36 relative overflow-hidden rounded-lg shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] print:shadow-none">
            <img
              src="/srna.jpg"
              alt="Andrej Srna"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+421914230321" className="text-blue-600 hover:underline print:text-gray-700 print:no-underline">
                +421 914 230 321
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:ahoj@andrejsrna.sk" className="text-blue-600 hover:underline print:text-gray-700 print:no-underline">
                ahoj@andrejsrna.sk
              </a>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span>💼</span>
              <a
                href="https://www.linkedin.com/in/andrej-srna-937351111/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline print:text-gray-700 print:no-underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>💻</span>
              <a
                href="https://github.com/andrejsrna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline print:text-gray-700 print:no-underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-10 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Profil</h2>
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <p>
            Od roku 2016 sa venujem freelancingu, tvorbe digitálnych produktov a web developmentu.
            Navrhujem, vyvíjam a zlepšujem weby, aplikácie a online služby tak, aby boli funkčné, rýchle a prinášali merateľný výsledok.
          </p>
          <p>
            Mám skúsenosti s projektmi pre komerčnú aj štátnu sféru, kde prepájam produktové uvažovanie, web development a digitálny marketing.
            Pracoval som pre organizácie ako Ministerstvo zdravotníctva SR, Asseco, Slovak Business Agency, Ministerstvo hospodárstva SR, Slovenská inovačná a energetická agentúra, Krajská inovačná agentúra, Talent Centrum Trnava či Správa majetku mesta Trnava.
          </p>
        </div>
      </section>

      <section className="mb-10 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">PRACOVNÉ SKÚSENOSTI</h2>
        <div className="space-y-8 text-gray-700">
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-800">Freelance – Tvorba digitálnych produktov, web developer a marketér</h3>
              <span className="text-gray-600">2016 – doteraz</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>Tvorba webov, landing pageov, interných systémov a digitálnych produktov pre komerčnú aj štátnu sféru.</li>
              <li>Návrh riešení od zadania cez UX, obsah a vývoj až po spustenie, SEO a marketingovú optimalizáciu.</li>
              <li>Projekty a spolupráce pre Ministerstvo zdravotníctva SR, Asseco, Slovak Business Agency, Ministerstvo hospodárstva SR, Slovenskú inovačnú a energetickú agentúru, Krajskú inovačnú agentúru, Talent Centrum Trnava a Správu majetku mesta Trnava.</li>
              <li>Prepájanie technickej realizácie s obchodným cieľom projektu, dôraz na výkon, konverzie a dlhodobú správu.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-800">Trnavský samosprávny kraj – Web developer a digitálne produkty</h3>
              <span className="text-gray-600">01/2023 – doteraz</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>Riadenie redizajnu hlavného webu: +30 % nárast zapojenia používateľov, +20 % rýchlejšie načítanie.</li>
              <li>Návrh a realizácia nových online služieb, zlepšovanie používateľskej skúsenosti a obsahovej štruktúry.</li>
              <li>Koordinácia dodávateľov, technických požiadaviek a interných tímov pri doručovaní digitálnych riešení.</li>
              <li>Prepojenie vývoja, analytiky a dlhodobej správy webu s cieľmi organizácie.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-800">QBSW, a.s. (Bratislava) – Webový vývojár</h3>
              <span className="text-gray-600">2021 – 2022</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>Spolupráca na viac ako 15 projektoch, tvorba technických špecifikácií a komunikácia s klientmi.</li>
              <li>Úpravy a integrácia systémov, optimalizácia dátových väzieb.</li>
              <li>Podpora pri testovaní a nasadzovaní riešení.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">KĽÚČOVÉ ZRUČNOSTI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Tvorba digitálnych produktov</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>zadanie, štruktúra, UX, MVP, prioritizácia a doručenie riešenia</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Web development</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>HTML, CSS, JavaScript, PHP, React, Next.js, WordPress, REST API</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Digitálny marketing</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>landing pages, obsah, SEO, konverzná optimalizácia a analytika</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Projektové vedenie</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>komunikácia s klientmi, dodávateľmi a tímami, plánovanie a koordinácia</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Analýza a integrácie</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>technické špecifikácie, dátové väzby, návrh riešení a prepájanie systémov</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Prevádzka a výkon</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>výkon webu, technické SEO, monitoring a dlhodobá správa riešení</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">JAZYKY</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Čeština / Slovenčina – rodený hovoriaci</li>
          <li>Angličtina – pokročilá (B2)</li>
        </ul>
      </section>

      <section className="mb-10 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">OSOBNÉ PREDPOKLADY</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Strategické a analytické myslenie</li>
          <li>Schopnosť efektívne viesť tím a komunikovať naprieč organizáciou</li>
          <li>Dôslednosť, spoľahlivosť a flexibilita</li>
          <li>Orientácia na výsledky a efektívne využitie zdrojov</li>
        </ul>
      </section>

      <style jsx global>{`
        @media print {
          @page {
            margin: 20mm;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          section {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
