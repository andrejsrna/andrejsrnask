'use client'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function CV() {
  return (
    <div className={`${inter.className} max-w-4xl mx-auto p-8 print:p-0 print:max-w-none bg-gray-50 relative`}>
      <header className="flex flex-col md:flex-row gap-6 mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-1 text-gray-800">Andrej Srna</h1>
          <p className="text-lg text-blue-600 font-medium mb-3 italic">
            IT Analytik a Developer s kombinací analytického myšlení a technické implementace
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-gray-700 mb-1 flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:ahoj@andrejsrna.sk" className="text-blue-600 hover:underline print:text-gray-700 print:no-underline">
                  ahoj@andrejsrna.sk
                </a>
              </div>
              <div className="text-gray-700 mb-1 flex items-center">
                <span className="mr-2">📱</span>
                <a href="tel:+420703623355" className="text-blue-600 hover:underline print:text-gray-700 print:no-underline">
                  +420 703623355
                </a>
              </div>
              <div className="text-gray-700 mb-1 flex items-center">
                <span className="mr-2">📍</span>
                <span>Brno, Czechia</span>
              </div>
            </div>
            
            <div>
              <div className="text-gray-700 mb-1 flex items-center">
                <span className="mr-2">🌐</span>
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
              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/andrejsrna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline print:text-gray-700 print:no-underline flex items-center text-sm"
                >
                  <span className="mr-1">💻</span>
                  GitHub
                  <span className="inline-block ml-1 print:hidden">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/andrej-srna-937351111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline print:text-gray-700 print:no-underline flex items-center text-sm"
                >
                  <span className="mr-1">💼</span>
                  LinkedIn
                  <span className="inline-block ml-1 print:hidden">↗</span>
                </a>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl text-gray-800 font-medium">
            IT Analytik & Developer | Analýza systémů a vývoj řešení | Business Intelligence
            & Full-Stack Development
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
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Profesionální shrnutí</h2>
        
        <div className="mb-6">
          <p className="mb-4 text-gray-700 leading-relaxed text-lg">
            <strong>Zkušený IT analytik a developer</strong> s více než 7 lety zkušeností v analýze, návrhu a implementaci informačních systémů a obchodních procesů. 
            Kombinuji analytické myšlení s technickou implementací - od analýzy požadavků přes návrh architektury až po vývoj a nasazení řešení, s prokázanými výsledky zlepšení výkonu systémů o 40%+ a optimalizace procesů vedoucí k úsporám nákladů o 25%+.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h3 className="font-bold text-blue-800 mb-2">Co přináším na stůl:</h3>
            <ul className="text-blue-700 space-y-1">
              <li>• <strong>Analýza a vývoj:</strong> Od analýzy požadavků po implementaci zvládám celý životní cyklus IT projektů - od konceptu až po nasazení</li>
              <li>• <strong>Technická implementace:</strong> Expert na identifikaci problémů, návrh architektury a implementaci efektivních řešení, která zvyšují produktivitu a snižují náklady</li>
              <li>• <strong>Obchodně orientovaný přístup:</strong> Každé řešení má jasný obchodní přínos - od analýzy potřeb až po měřitelné výsledky implementace</li>
              <li>• <strong>Full-stack odbornost:</strong> Hluboké znalosti moderních technologií a architektur - od databází po frontend, vždy implementuji nejvhodnější řešení</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="font-bold text-green-800 mb-2">Moje jedinečná hodnotová nabídka:</h3>
            <p className="text-green-700">
              Neanalyzuji jen systémy - <strong>analyzuji, navrhuji a implementuji</strong> kompletní IT řešení. Moje kombinace analytického myšlení, 
              technické implementace a obchodního rozhledu znamená, že vaše IT projekty nebudou jen fungovat, ale budou přinášet měřitelné výsledky od prvního dne. 
              Pomohl jsem vládním institucím optimalizovat jejich IT infrastrukturu a soukromým společnostem snížit IT náklady o 30%+ při zvýšení efektivity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">🚀 Analýza & Vývoj</h3>
            <div className="text-gray-600">Komplexní analýza systémů a implementace řešení, která přináší měřitelné výsledky - vyšší výkon, nižší náklady, lepší efektivita</div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">💡 Strategický vývoj</h3>
            <div className="text-gray-600">Analýza, návrh a implementace řešení, která jsou v souladu s obchodními cíli a strategickými potřebami organizace</div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">🎯 Řízení projektů</h3>
            <div className="text-gray-600">Vedení IT projektů včas, v rámci rozpočtu a překračování očekávání díky pečlivé analýze a plánování</div>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none print:page-break-before-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Jazyky</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <span className="font-semibold">Slovenština:</span> Rodný jazyk
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <span className="font-semibold">Angličtina:</span> Plná profesionální znalost
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <span className="font-semibold">Čeština:</span> Plná profesionální znalost
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Analytické a vývojářské dovednosti</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Frontend vývoj</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">React & Next.js</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">5+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">JavaScript & TypeScript</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">6+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">HTML5 & CSS3</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">7+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Tailwind CSS</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">3+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">jQuery</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">6+ years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Backend vývoj</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">PHP</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">6+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">WordPress</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">6+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">MySQL</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">5+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">REST APIs</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">4+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Node.js</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">2+ years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tools & Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Analytické nástroje</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Git & GitHub</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">5+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Docker</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">2+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Nginx</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">4+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Google Analytics</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">5+ years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Měkké dovednosti</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Řízení projektů</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">5+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Týmová spolupráce</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">6+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Řešení problémů</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">7+ years</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Client Communication</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">6+ years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Odbornosti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Frontend vývoj</h3>
            <p className="text-gray-600">Vývoj responzivních a interaktivních UI pomocí moderních frameworků s důrazem na použitelnost a efektivitu.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Backend vývoj</h3>
            <p className="text-gray-600">Vývoj a správa backend systémů, analýza databázových struktur, optimalizace výkonu a návrh efektivních datových modelů.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Analýza & architektura</h3>
            <p className="text-gray-600">Analýza požadavků, návrh IT architektury, analýza bezpečnosti systémů a optimalizace infrastruktury.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Řízení projektů</h3>
            <p className="text-gray-600">Plánování IT projektů, analýza požadavků, výběr technologií a komunikace se stakeholdery.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none print:page-break-before-always">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Pracovní zkušenosti</h2>


        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">IT Analytik & Developer - Analýza systémů a vývoj řešení</h3>
            <span className="text-gray-600 font-medium">September 2021 - Now</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-3">
            <div className="font-medium text-gray-700">Trnavský samosprávny kraj</div>
            <div className="text-gray-600">Trnava</div>
          </div>
          <p className="text-gray-600">
            IT analytik a developer odpovědný za analýzu, návrh, vývoj a optimalizaci informačních systémů vládní instituce. Hlavní úkoly zahrnovaly
            analýzu obchodních procesů, identifikaci problémů v IT infrastruktuře, návrh a implementaci efektivních řešení
            včetně vývoje webových aplikací a implementace bezpečnostních opatření. Specializoval jsem se na zlepšování výkonu systémů
            a optimalizaci digitálních služeb pro občany.
            Práce také zahrnovala analýzu dat, reportování KPI, vývoj custom řešení a zajištění
            souladu IT řešení s aktuálními legislativními a bezpečnostními standardy.
            Spolupráce s interními odděleními a externími dodavateli na analýze požadavků,
            návrhu architektury a vývoji nových funkcionalit s cílem zefektivnit IT procesy úřadu.
          </p>
        </div>

        <div className="mb-6 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">IT Analytik & Developer - Webové systémy</h3>
            <span className="text-gray-600 font-medium">May 2017 - September 2021</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-3">
            <div className="font-medium text-gray-700">QBSW, a.s.</div>
            <div className="text-gray-600">Bratislava</div>
          </div>
          <p className="text-gray-600">
            IT analytik a developer specializující se na analýzu, návrh a vývoj webových systémů v prostředí WordPress,
            včetně analýzy technických požadavků, návrhu architektury a implementace
            moderních webových řešení. Odpovědný za analýzu obchodních potřeb klientů,
            návrh a vývoj efektivních řešení, optimalizaci výkonu systémů a zajištění kompatibility s
            nejnovějšími standardy a bezpečnostními požadavky. Spolupráce s klienty na
            analýze požadavků, návrhu architektury a vývoji vlastních webových řešení s důrazem na škálovatelnost,
            bezpečnost a uživatelskou přívětivost.
          </p>
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
