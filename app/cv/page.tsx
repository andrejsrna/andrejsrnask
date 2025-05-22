'use client'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function CV() {
  return (
    <div className={`${inter.className} max-w-4xl mx-auto p-8 print:p-0 print:max-w-none bg-gray-50 relative`}>
      <header className="flex flex-col md:flex-row gap-6 mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Andrej Srna</h1>
          <div className="text-gray-700 mb-1">ahoj@andrejsrna.sk</div>
          <div className="text-gray-700 mb-1">+420 703623355</div>
          <div className="text-gray-700 mb-1">
            <a
              href="https://andrejsrna.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-700 print:no-underline"
            >
              andrejsrna.sk
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
          </div>
          <div className="flex gap-4 mb-4">
            <a
              href="https://github.com/andrejsrna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-700 print:no-underline flex items-center"
            >
              GitHub
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/andrej-srna-937351111/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-700 print:no-underline flex items-center"
            >
              LinkedIn
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
          </div>
          <h2 className="text-xl text-gray-800 font-medium">
            Full Stack Vývojář | Specialista na Vývoj a Optimalizaci Webu | SEO
            & Správa Systémů
          </h2>
        </div>
        <div className="w-36 h-36 relative overflow-hidden rounded-lg shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] print:shadow-none">
          <img
            src="/srna.jpg"
            alt="Andrej Srna"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <section className="mb-12 mt-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none print:mt-0">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Shrnutí</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Zkušený Full Stack vývojář se silným zaměřením na webový vývoj.
          Ovládám frontendové technologie jako React, Next.js, jQuery, HTML/CSS
          a backendová řešení postavená na PHP.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">SEO</h3>
            <div className="text-gray-600">Optimalizace webových stránek pro vyhledávače</div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Webový Design</h3>
            <div className="text-gray-600">Tvorba responzivních a moderních rozhraní</div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Projektový Management</h3>
            <div className="text-gray-600">Plánování a realizace webových projektů</div>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none print:page-break-before-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Jazyky</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <span className="font-semibold">Slovenština:</span> Rodilý mluvčí nebo dvojjazyčný
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <span className="font-semibold">Angličtina:</span> Plně profesionální
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <span className="font-semibold">Čeština:</span> Plně profesionální
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Odbornost</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Frontend</h3>
            <p className="text-gray-600">Tvorba responzivních a interaktivních UI pomocí moderních frameworků.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Backend</h3>
            <p className="text-gray-600">Vývoj a správa systémů v PHP, integrace API, práce s headless CMS (WordPress, Strapi).</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Správa Webu</h3>
            <p className="text-gray-600">SEO optimalizace, CI/CD deployment, správa serverů, cachování a CDN.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Projektový Management</h3>
            <p className="text-gray-600">Plánování, analýza, výběr technologií, reporting a komunikace se zúčastněnými stranami.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none print:page-break-before-always">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Pracovní Zkušenosti</h2>

        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Frontend Vývojář</h3>
            <span className="text-gray-600 font-medium">Únor 2025 - Duben 2025</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-3">
            <div className="font-medium text-gray-700">cognito.cz</div>
            <div className="text-gray-600">Brno, Jihomoravský kraj, Česko</div>
          </div>
          <p className="text-gray-600">
            3 měsíce zkušeností jako Frontend Vývojář v cognito.cz.
          </p>
        </div>

        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Specialista na Správu Webu, Vývoj a Bezpečnost Aplikací</h3>
            <span className="text-gray-600 font-medium">Září 2021 - Leden 2025</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-3">
            <div className="font-medium text-gray-700">Trnavský samosprávný kraj</div>
            <div className="text-gray-600">Trnava</div>
          </div>
          <p className="text-gray-600">
            Specialista na správu webu, vývoj aplikací a bezpečnost zodpovědný za
            správu a optimalizaci webových řešení Úřadu. Hlavní úkoly zahrnovaly
            vývoj a údržbu webových aplikací, implementaci bezpečnostních
            opatření, zlepšování uživatelského zážitku a optimalizaci výkonu digitálních
            služeb. Práce také zahrnovala SEO optimalizaci, analýzu návštěvnosti a zajištění
            souladu webových řešení s aktuálními legislativními a technologickými standardy.
            Spolupráce s interními odděleními a externími dodavateli na vývoji a
            integraci nových funkcionalit s cílem zefektivnit online komunikaci úřadu.
          </p>
        </div>

        <div className="mb-6 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Full-Stack Webový Vývojář</h3>
            <span className="text-gray-600 font-medium">Květen 2017 - Září 2021</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-3">
            <div className="font-medium text-gray-700">QBSW, a.s.</div>
            <div className="text-gray-600">Bratislava</div>
          </div>
          <p className="text-gray-600">
            Webový vývojář se zaměřením na vývoj a správu webových řešení v prostředí
            WordPress, včetně implementace moderních webových
            technologií (HTML, CSS, JavaScript, PHP). Zodpovědný za vývoj přizpůsobených
            webových aplikací, optimalizaci uživatelského zážitku a zajištění kompatibility s
            nejnovějšími standardy a bezpečnostními požadavky. Spolupráce s klienty na
            návrhu a implementaci vlastních webových řešení s důrazem na výkon,
            SEO a responzivní design.
          </p>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none print:page-break-before-always">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Projekty</h2>

        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://www.trnava-vuc.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-800 print:no-underline"
            >
              Web Trnavského samosprávného kraje
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
          </h3>
          <p className="mb-3 text-gray-600">
            Komplexní redesign webové stránky pro Trnavský samosprávný kraj, vytvoření moderního, responzivního rozhraní se zaměřením na uživatelskou přívětivost a přístupnost informací.
          </p>
          <div className="mb-2 font-semibold text-gray-700">Použité Technologie:</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["WordPress", "PHP", "Tailwind CSS", "Responsive Design", "SEO", "Google Analytics", "User Permissions",
              "UX/UI Design", "UX Research", "UX Testing", "CMS", "API", "REST", "Nginx", "MySQL", "jQuery", "AJAX", "Facebook API"].map((tech, index) => (
              <span key={index} className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] print:shadow-none">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://smmt.trnava.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-800 print:no-underline"
            >
              Správa majetku města Trnava
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
          </h3>
          <p className="mb-3 text-gray-600">
            Vývoj komplexní webové aplikace pro správu městského majetku, implementace pokročilých nástrojů pro efektivní správu nemovitostí.
          </p>
          <div className="mb-2 font-semibold text-gray-700">Použité Technologie:</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["WordPress", "PHP", "CSS", "jQuery", "AJAX", "MySQL", "API", "REST", "Nginx", "Tailwind CSS",
              "Facebook API", "CMS", "SEO", "Google Analytics", "User Permissions", "Responsive Design",
              "UX/UI Design", "UX Research", "UX Testing"].map((tech, index) => (
              <span key={index} className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] print:shadow-none">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://zdravazupa.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-800 print:no-underline"
            >
              Zdravá župa
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
          </h3>
          <p className="mb-3 text-gray-600">
            Vývoj komplexní webové aplikace pro iniciativu Zdravá župa, implementace pokročilých nástrojů pro efektivní správu informací o zdravotnických službách.
          </p>
          <div className="mb-2 font-semibold text-gray-700">Použité Technologie:</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["React", "Tailwind", "Shadcn", "Next.js", "TypeScript", "API", "REST", "NextAuth", "PostgreSQL",
              "Docker", "Router", "Git", "GitHub", "Prisma", "Responsive Design", "SEO", "Cursor",
              "React Lightbox", "Confluence", "Jira"].map((tech, index) => (
              <span key={index} className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] print:shadow-none">
                {tech}
              </span>
            ))}
          </div>
        </div>
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
          .print\\:page-break-before-always {
            page-break-before: always;
          }
          .print\\:page-break-before-auto {
            page-break-before: auto;
          }
        }
      `}</style>
    </div>
  );
}
