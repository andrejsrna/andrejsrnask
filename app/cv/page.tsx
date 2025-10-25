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
              IT specialista | správa webů a systémů | vedení IT projektů
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
            Zkušený IT specialista s více než 7 lety praxe v oblasti správy webů, systémů a IT infrastruktury. 
            Mám zkušenosti s vedením projektů, návrhem a implementací technických řešení a koordinací spolupráce mezi interními týmy a externími dodavateli.
          </p>
          <p>
            Mou silnou stránkou je schopnost kombinovat technické znalosti (infrastruktura, bezpečnost, IS/IT) se strategickým a organizačním pohledem. 
            Hledám příležitost, kde mohu uplatnit své schopnosti v řízení IT oddělení a přispět k rozvoji moderní infrastruktury v městské organizaci.
          </p>
        </div>
      </section>

      <section className="mb-10 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">PRACOVNÍ ZKUŠENOSTI</h2>
        <div className="space-y-8 text-gray-700">
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-800">Trnavský samosprávný kraj – Website Administrator & IT Project Lead</h3>
              <span className="text-gray-600">01/2023 – současnost</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>Řízení redesignu hlavního webu: +30 % nárůst uživatelského zapojení, +20 % rychlejší načítání.</li>
              <li>Plánování a koordinace IT projektů: návrh nových online služeb, integrace s existujícími systémy.</li>
              <li>Dohled nad dodavateli a komunikace ohledně technických požadavků.</li>
              <li>Prosazování bezpečnostních opatření (SSL/TLS, WAF, monitoring).</li>
              <li>Vedení dokumentace, příprava směrnic a podkladů pro audit.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-800">QBSW, a.s. (Bratislava) – Web Developer</h3>
              <span className="text-gray-600">2021 – 2022</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>Spolupráce na více než 15 projektech, tvorba technických specifikací a komunikace s klienty.</li>
              <li>Úpravy a integrace systémů, optimalizace datových vazeb.</li>
              <li>Podpora při testování a nasazování řešení.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-800">VILTEN s.r.o. (Pezinok) – Frontend Developer</h3>
              <span className="text-gray-600">2020 – 2021</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>Vývoj interní databázové aplikace pro Úřad veřejného zdravotnictví SR.</li>
              <li>Návrh a realizace datových modelů, příprava API rozhraní.</li>
              <li>Spolupráce na architektuře systému, tvorba dokumentace a manuálů.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">KLÍČOVÉ DOVEDNOSTI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Řízení IT projektů</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>plánování, rozpočtování, komunikace s dodavateli, vedení týmu</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">IT infrastruktura</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>cloudové služby, správa serverů (Linux), webhosting, ERP integrace</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">ITSM & bezpečnost</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>správa incidentů, firewall (F5), WAF, SSL/TLS, monitoring logů, základní SIEM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Analýza a návrh systémů</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>UML, BPMN, dokumentace funkčních a technických specifikací</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Vývoj & integrace</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>HTML, CSS, JS, PHP, React/Next.js, REST API</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Databáze</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>SQL – návrh schémat, práce s relačními databázemi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">JAZYKY</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Čeština / Slovenština – rodilý mluvčí</li>
          <li>Angličtina – pokročilá (B2)</li>
        </ul>
      </section>

      <section className="mb-10 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">OSOBNÍ PŘEDPOKLADY</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Strategické a analytické myšlení</li>
          <li>Schopnost efektivně vést tým a komunikovat napříč organizací</li>
          <li>Důslednost, spolehlivost a flexibilita</li>
          <li>Orientace na výsledky a efektivní využití zdrojů</li>
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
