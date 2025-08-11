import { Button } from "@/components/ui/button";
import DownloadAuditButton from "@/components/DownloadAuditButton";
import Contact from "@/components/Contact";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Rimi | Andrej Srna",
  description: "Kompletný audit online prezentácie pre Rimi. Analýza web stránky, SEO, UX/UI a marketing stratégie.",
};

export default function AuditRimi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div id="audit-pdf-content">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Audit Rimi
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nezávislý audit webu, SEO, UX a komunikácie s prioritizovanými odporúčaniami.
          </p>
        </div>

        <details className="bg-white rounded-2xl shadow-lg mb-16">
          <summary className="cursor-pointer select-none px-6 py-4 text-2xl font-bold text-slate-900">Analýza aktuálneho stavu</summary>
          <div className="px-6 pb-6">
        <div className="grid gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Aktuálny stav
            </h2>
            <div className="space-y-2 text-slate-600">
              <p>Zhrnutie:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fragmentovaná doménová stratégia (.eu, .sk, .hu).</li>
                <li>Slabá hierarchia obsahu a nejasná value proposition v hero sekcii.</li>
                <li>Nejasná prezentácia produktov (CarCode/BikeCode) a benefitov.</li>
                <li>Duplicitný obsah medzi sekciami CarCode a BikeCode.</li>
                <li>Kľúčové informácie na produktovej stránke sú schované v modale.</li>
                <li>Nejasné vymedzenie databázy a spolupráce s PZ SR (auta vs bicykle).</li>
                <li>Sekcia krokov je príliš textová, nízka skenovateľnosť.</li>
                <li>Nenápadná navigácia, chýba výrazný primárny CTA.</li>
                <li>Formuláre bez GDPR súhlasu a anti‑spam ochrany.</li>
                <li>Chýba pokročilé meranie a konverzné trackovanie (PostHog, server‑side).</li>
                <li>Blog existuje, no nízka publikačná frekvencia a interné prelinkovanie.</li>
              </ul>
            </div>
          </div>

          
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Hero sekcia – doplniť hodnotové prvky
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src="/rimi/hero.png" 
                alt="Aktuálna hero sekcia Rimi" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Hero sekcia musí byť výraznejšia a zrozumiteľnejšia
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Chýba dôveryhodnostný prvok: spolupráca s Policajným zborom SR</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Nevyzdvihnutá skúsenosť: 20+ rokov na trhu</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Nejasné vysvetlenie, čo presne robíte a pre koho</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Chýba jasná value proposition v jednej vete</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 mt-4">
                <h4 className="font-semibold text-slate-900 mb-2">Navrhovaná hero štruktúra</h4>
                <p className="text-slate-700 mb-3">Označenie dielov, ktoré odradí zlodejov a zvýši šancu nájdenia vášho majetku.</p>
                <ul className="text-slate-600 space-y-1 list-disc pl-6">
                  <li>Spolupráca s Policajným zborom SR</li>
                  <li>20+ rokov overených výsledkov</li>
                  <li>Riešenia pre autá aj bicykle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Produkty – potrebujú zrozumiteľnejšiu prezentáciu
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src="/rimi/products.png" 
                alt="Aktuálna sekcia produktov Rimi" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Aktuálne označenie produktov je nejasné
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Nejasné pomenovanie produktov (CarCode, BikeCode)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Chýba rýchle vysvetlenie, čo to je a akú hodnotu prináša</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Namiesto technických názvov by bolo lepšie &ldquo;Chcem zabezpečiť auto/bicykel&rdquo;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Chýbajú kontextové vizuály (auto/bicykel) priamo pri produktoch</p>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-slate-900 mb-2">Odporúčaný prístup:</h4>
                <p className="text-slate-600 text-sm">
                  &ldquo;Chcem zabezpečiť auto&rdquo; → s obrázkom auta a vysvetlením ako CarCode chráni vozidlo pred krádežou
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  &ldquo;Chcem zabezpečiť bicykel&rdquo; → s obrázkom bicykla a vysvetlením ako BikeCode robí bicykel identifikovateľným a dohľadateľným
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            BikeCode – nadbytočný text a duplicita
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src="/rimi/bikecode.png" 
                alt="Aktuálna sekcia BikeCode" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Obsah sa opakuje s CarCode
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Príliš veľa textu pre BikeCode, opakovanie benefitov</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Duplicita s CarCode znižuje prehľadnosť a fokus</p>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 mt-2">
                <h4 className="font-semibold text-slate-900 mb-2">Odporúčanie</h4>
                <ul className="text-slate-600 space-y-1 list-disc pl-6">
                  <li>Popísať systém označovania v jednej spoločnej sekcii</li>
                  <li>Výber medzi CarCode a BikeCode umiestniť hneď pod hero</li>
                  <li>Neskôr už produkty nerozdeľovať, iba odkazovať na výber z úvodu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Produktová stránka – obsah schovaný v modale
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src="/rimi/produkt.png" 
                alt="Aktuálna produktová stránka" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Obsah je kvalitný, ale ťažko prístupný
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Kľúčové informácie sú skryté v modale – nízka čítanosť a SEO hodnota</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Layout pôsobí ako generický WooCommerce produkt – nízka presvedčivosť</p>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 mt-2 border border-emerald-100">
                <h4 className="font-semibold text-slate-900 mb-2">Odporúčané riešenie: produkt ako landing page</h4>
                <ul className="text-slate-600 space-y-1 list-disc pl-6">
                  <li>Viditeľné sekcie: benefity, ako to funguje, čo je v balení, bezpečnosť</li>
                  <li>Spolupráca s PZ SR a register – umiestniť vysoko v obsahu</li>
                  <li>Referencie a recenzie, FAQ, garancie</li>
                  <li>Silné CTA a sticky panel s cenou/benefitmi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Ochrana vozidla – nejasné vymedzenie databázy
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src="/rimi/ochranavozidla.png" 
                alt="Sekcia Ochrana vozidla" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                Mätúca informácia o rozsahu databázy
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Nie je jasné, či databáza platí iba pre motorové vozidlá alebo aj pre bicykle</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Zjednotiť text pre všetky typy dopravných prostriedkov (auto/bicykel)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Silnejšie komunikovať spoluprácu s Policajným zborom SR</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Jasný CTA k registru, kde sa používateľ môže zaregistrovať</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">Navrhované riešenie</h4>
                <ul className="text-slate-600 space-y-1 list-disc pl-6">
                  <li>Jednotná definícia: databáza pokrýva označené autá aj bicykle</li>
                  <li>Viditeľný badge spolupráce s PZ SR priamo v sekcii</li>
                  <li>Priamočiare CTA: Registrujte sa do registra a overte označenie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Kroky
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src="/rimi/kroky.png" 
                alt="Aktuálna sekcia krokov" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">Skrátiť text na stručné body (1–2 vety/krok)</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">Primárne vizuály, sekundárne text</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">Každý krok s ikonou/obrázkom a krátkym CTA</p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </details>

        <details className="bg-white rounded-2xl shadow-lg mb-16">
          <summary className="cursor-pointer select-none px-6 py-4 text-2xl font-bold text-slate-900">Právne, bezpečnosť, konkurencia a dôkazy</summary>
          <div className="px-6 pb-6">

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Právne a compliance</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Consent & cookies</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Consent Mode v2, kategórie cookies a granularita súhlasov</li>
                    <li>Prelink na zásady spracovania, podmienky a reklamačný poriadok</li>
                    <li>Možnosť zmeniť súhlas v pätičke</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Accessibility</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Kontrast textu a prvkov podľa WCAG 2.1 AA</li>
                    <li>Viditeľné focus states a klávesová navigácia</li>
                    <li>ARIA pre tlačidlá, akordeóny a stavové hlášky</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Bezpečnosť a infra</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Security headers</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>CSP s allow‑listou domén</li>
                    <li>HSTS s preload, X‑Content‑Type‑Options</li>
                    <li>Referrer‑Policy, Permissions‑Policy</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Ochrana backendu</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Rate limiting a IP throttling na formulároch</li>
                    <li>Validácia vstupov a audit 3rd‑party skriptov</li>
                    <li>Rotácia kľúčov a bezpečné secrets</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Prevádzka</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Monitoring chýb a uptime</li>
                    <li>Zálohy a obnova, verzovanie konfigurácií</li>
                    <li>Minimalizácia pluginov a pravidelné aktualizácie</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Konkurenčné porovnanie</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-slate-700">
                  <h3 className="font-semibold text-slate-900 mb-2">Riešenie Rimi</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Označenie dielov a register</li>
                    <li>Spolupráca s PZ SR</li>
                    <li>Nízke prevádzkové náklady</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-slate-700">
                  <h3 className="font-semibold text-slate-900 mb-2">GPS lokátor</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Vyššia cena a údržba batérie</li>
                    <li>Možné rušenie signálu</li>
                    <li>Silný pri aktívnom sledovaní</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-slate-700">
                  <h3 className="font-semibold text-slate-900 mb-2">Mechanické zámky</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Nízke náklady, viditeľná zábrana</li>
                    <li>Obchádzateľné pri cielenej krádeži</li>
                    <li>Vhodné ako doplnok</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 text-center mt-4">Najvyššiu ochranu prináša kombinácia označenia dielov + mechanické opatrenia; GPS ako doplnok pri flotilách.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Dôkazné materiály</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Case studies</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Pred/po: čas riešenia incidentu</li>
                    <li>Nájdené do X dní s dôkazom</li>
                    <li>Fotodokumentácia</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Metriky</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Počet označení, miera registrácie</li>
                    <li>Rate úspešného overenia</li>
                    <li>CTR na „Overiť kód”</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Médiá</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Odkazy na články a TV reportáže</li>
                    <li>Logá partnerov a organizácií</li>
                    <li>Citácie so zdrojom</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Chýbajúce stránky a stavy</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Stránky</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>404 a 500 s návratom na kľúčové akcie</li>
                    <li>Partneri a podpora</li>
                    <li>Status stránka pri výpadkoch</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Stavové texty</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Registrácia/overenie: success, pending, error</li>
                    <li>Prázdne stavy s odporúčaním ďalšieho kroku</li>
                    <li>Toasty a ARIA live region pre čítačky</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Mikrocopy a tón</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-slate-700">
                  <h3 className="font-semibold text-slate-900 mb-2">Value prop</h3>
                  <p>„Označíme vaše diely tak, aby boli pre zlodejov bezcenné a pre vás dohľadateľné.”</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-slate-700">
                  <h3 className="font-semibold text-slate-900 mb-2">Benefity</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>„Znižuje riziko krádeže a uľahčuje návrat majetku.”</li>
                    <li>„Overenie v registri na pár klikov.”</li>
                    <li>„Spolupráca s PZ SR.”</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-slate-700">
                  <h3 className="font-semibold text-slate-900 mb-2">CTA</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>„Zabezpečiť auto” / „Zabezpečiť bicykel”</li>
                    <li>„Overiť kód”</li>
                    <li>„Registrovať označenie”</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </details>


        <details className="bg-white rounded-2xl shadow-lg mb-16">
          <summary className="cursor-pointer select-none px-6 py-4 text-2xl font-bold text-slate-900">FAQ, Lokálne SEO, Obsah a B2B</summary>
          <div className="px-6 pb-6">

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">FAQ – rozšírenie</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Inštalácia vs. DIY</h3>
                  <p className="text-slate-700">Odporúčaná je odborná montáž u partnera. DIY je možná pri dodržaní postupu; záruka platí pri správnej aplikácii.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Vplyv na poistku</h3>
                  <p className="text-slate-700">Označenie znižuje riziko krádeže. Niektoré poisťovne poskytujú zvýhodnenie – odporúčame overiť u vašej poisťovne.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Kompatibilita</h3>
                  <p className="text-slate-700">Riešenia pre autá, bicykle aj motorky vrátane elektrobicyklov. Princíp je rovnaký, líši sa rozsah označenia.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Predaj vozidla</h3>
                  <p className="text-slate-700">V registri prevedieme vlastníctvo na nového majiteľa po potvrdení údajov.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 md:col-span-2">
                  <h3 className="font-semibold text-slate-900 mb-2">Strata registračnej karty</h3>
                  <p className="text-slate-700">Pošlite žiadosť cez formulár. Overíme identitu a vystavíme náhradný doklad s novým QR.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Lokálne SEO</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Google Business Profile</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Správna primárna kategória + sekundárne podľa služieb</li>
                    <li>NAP konzistencia na webe a katalógoch</li>
                    <li>UTM na webový odkaz a akcie</li>
                    <li>Fotky pred/po, pravidelné príspevky, Q&A</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Recenzie a citácie</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Zber a odpovede na recenzie (automatická výzva po montáži)</li>
                    <li>Lokálne citácie: firmy.sk, azet, Mapy, Facebook</li>
                    <li>Schema LocalBusiness na kontaktných stránkach</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Obsahová stratégia – konkrétnejšie</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Redakčný kalendár</h3>
                  <p className="text-slate-700">2–4 články mesačne. Striedať edukáciu, návody, prípadovky a porovnania.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Clustre tém</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Ochrana vozidla</li>
                    <li>Označovanie bicyklov</li>
                    <li>Spolupráca s PZ SR</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Prelinkovanie</h3>
                  <p className="text-slate-700">Každý článok odkazuje na produkt a na „Overiť kód”. CTA na konci aj v strede článku.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Partnerstvá / B2B</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Stránka pre partnerov</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Benefity programu, model spolupráce</li>
                    <li>Marže a objemové bonusy</li>
                    <li>Onboarding: školenie, materiály, registrácia</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Lead‑to‑partner flow</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Formulár s kvalifikačnými otázkami</li>
                    <li>Schválenie, podpísanie rámcovej zmluvy</li>
                    <li>Prístup do materiálov a objednávok</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </details>

        <details className="bg-white rounded-2xl shadow-lg mb-16">
          <summary className="cursor-pointer select-none px-6 py-4 text-2xl font-bold text-slate-900">IA, konverzná stratégia a registračné toky</summary>
          <div className="px-6 pb-6">

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Informačná architektúra a URL naming</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Stromová štruktúra</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>/ – domov</li>
                    <li>/riesenia – prehľad riešení</li>
                    <li>/riesenia/auto a /riesenia/bike – produktové LP</li>
                    <li>/register – vstupný bod</li>
                    <li>/register/overit-kod, /register/nahlasit-nalez, /register/nahlasit-kradez</li>
                    <li>/partneri – B2B a reselleri</li>
                    <li>/blog – clustre: /blog/ochrana-vozidla, /blog/oznacovanie-bicyklov</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Naming a zásady</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Malé písmená, bez diakritiky, pomlčky namiesto medzier</li>
                    <li>Konzistentné slugs naprieč jazykmi, lokalizované vo /sk, /hu, /en</li>
                    <li>Krátke, zrozumiteľné URL; kľúčové slová na začiatku</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Konverzná stratégia</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Risk‑reducers</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Garancia spokojnosti 30 dní</li>
                    <li>Záruka 24 mesiacov</li>
                    <li>Dodanie/montáž do 48 hodín</li>
                    <li>Servisná sieť a podpora</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Sticky objednávací panel</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Cena a tri hlavné benefity</li>
                    <li>Primárne CTA: „Zabezpečiť auto/bicykel”</li>
                    <li>Sekundárne CTA: „Overiť kód”</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Social proof</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Logá partnerov a médií</li>
                    <li>Recenzie s menom a fotkou</li>
                    <li>„10 000+ označených vozidiel” v hero/benefitoch</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Registrácia a law‑enforcement flow</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Verejné stránky</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Overiť kód</li>
                    <li>Nahlásiť nález</li>
                    <li>Nahlásiť krádež</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Polícia/servisy</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Návod na overenie, kontakty a formulár</li>
                    <li>SLA: reakcia do 24 hodín, eskalácia pri naliehavých prípadoch</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Post‑purchase onboarding</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>E‑mail s potvrdením, návodom a odkazom na registráciu</li>
                    <li>Checklist: fotky, kód, prevod vlastníctva</li>
                    <li>Pripomienky pri nedokončenej registrácii</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </details>

        <details className="bg-white rounded-2xl shadow-lg mb-16">
          <summary className="cursor-pointer select-none px-6 py-4 text-2xl font-bold text-slate-900">KPI, Roadmapa a technické SEO</summary>
          <div className="px-6 pb-6">

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">KPI a merací plán</h2>
              <p className="text-slate-600 text-center max-w-3xl mx-auto mb-6">Meranie zamerané na získanie dopytov a registrácií, s jasným pomenovaním eventov a atribútov pre atribúciu kampaní a optimalizáciu.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Primárne KPI</h3>
                  <ul className="text-slate-600 list-disc pl-6 space-y-1">
                    <li>Odoslané dopyty/objednávky (konverzný pomer 2–6 %)</li>
                    <li>CTR na primárne CTA v hero a sekciách (&ge; 2.5 %)</li>
                    <li>Dokončené registrácie v registri (&ge; 70 % z rozbehnutých)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Sekundárne KPI</h3>
                  <ul className="text-slate-600 list-disc pl-6 space-y-1">
                    <li>Scroll‑depth 50/75/90 % podľa stránky</li>
                    <li>View‑through kľúčových sekcií (Hero, Výhody, Register)</li>
                    <li>Čas do prvej akcie (&lt; 10 s pri platenom traffice)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Event taxonómia</h3>
                  <ul className="text-slate-600 list-disc pl-6 space-y-1">
                    <li>cta_click: {`{page, section, label, language, event_id}`}</li>
                    <li>form_submit: {`{form_id, status, lead_id, value, currency, event_id}`}</li>
                    <li>register_start/complete: {`{method, step, user_id, event_id}`}</li>
                    <li>code_verify: {`{result, code_type, event_id}`}</li>
                    <li>product_view: {`{product_id, name, price, event_id}`}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Prioritizácia a roadmapa (WordPress)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
                  <h3 className="font-semibold text-slate-900 mb-2">Impact/Effort</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Vysoký dopad, nízka náročnosť: prepísať hero, zvýrazniť CTA, kontrast navigácie</li>
                    <li>Stredný dopad: preštruktúrovať produktové stránky na LP a doplniť dôkazy</li>
                    <li>Vyššia náročnosť: S2S konverzné meranie a i18n architektúra</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                  <h3 className="font-semibold text-slate-900 mb-2">30‑60‑90 dní</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>0–30: hero copy, CTA, GDPR + anti‑spam vo formulároch, základné eventy, PostHog</li>
                    <li>31–60: produktové LP (CarCode/BikeCode), sekcie Register/Overenie/Nahlásenie, FAQ, recenzie</li>
                    <li>61–90: i18n (/sk,/hu,/en), hreflang, 301 mapy, S2S pre Meta/Google, obsahové clustre</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Alternatíva: Migrácia na Next.js</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Architektúra a benefity</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>Výkon: SSG/ISR, edge cache, optimalizácia obrázkov a fontov</li>
                    <li>i18n: subfoldery, automatický hreflang, shared UI a preklady</li>
                    <li>SEO: čisté URL, generované sitemap/robots, structured data</li>
                    <li>Meranie: server‑side events, Consent Mode v2, stabilná atribúcia</li>
                    <li>Bezpečnosť: minimum pluginov, CSP/HSTS, rate limiting</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Migrácia – 30‑60‑90</h3>
                  <ul className="text-slate-700 list-disc pl-6 space-y-1">
                    <li>0–30: dizajn systém, základné routy (/sk,/hu,/en), import obsahu z WP</li>
                    <li>31–60: produktové LP, Register/Overenie/Nahlásenie, hreflang automat</li>
                    <li>61–90: S2S tracking, CWV tuning, presun blogu, 301 redirect mapy</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                  <h3 className="font-semibold text-slate-900 mb-2">CMS</h3>
                  <p className="text-slate-700">Headless WordPress, Payload CMS alebo Sanity. Migrácia bez straty obsahu.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
                  <h3 className="font-semibold text-slate-900 mb-2">Prevádzka</h3>
                  <p className="text-slate-700">Vercel, CDN, ISR revalidácie, monitorovanie cez PostHog.</p>
                </div>
                <div className="bg-rose-50 rounded-lg p-6 border border-rose-100">
                  <h3 className="font-semibold text-slate-900 mb-2">Riziká</h3>
                  <p className="text-slate-700">Parita URL a SEO. Potrebná 301 mapa a kontrola indexácie po migrácii.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">SEO technický audit do hĺbky</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">i18n a indexácia</h3>
                  <ul className="text-slate-600 list-disc pl-6 space-y-1">
                    <li>Subfoldery: /sk, /hu, /en + <span className="whitespace-nowrap">x‑default</span> na predvolenú mutáciu</li>
                    <li>Self‑canonical na všetkých stránkach, alternates pre hreflang</li>
                    <li>301 mapy pri konsolidácii domén (.eu/.hu → hlavná doména)</li>
                    <li>robots.txt: blokovať staging, povoliť produkciu; sitemap index per locale</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Core Web Vitals</h3>
                  <ul className="text-slate-600 list-disc pl-6 space-y-1">
                    <li>LCP &lt; 2.5s, CLS &lt; 0.1, INP &lt; 200ms</li>
                    <li>Next/Image so správnymi <span className="whitespace-nowrap">sizes</span>, preconnect k CDN, font‑display: swap</li>
                    <li>Self‑hostované fonty, dlhé cache hlavičky pre obrázky (1y, immutable)</li>
                    <li>Code‑splitting podľa routy, odstránenie nepoužitých knižníc</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Štruktúrované dáta</h3>
                  <ul className="text-slate-600 list-disc pl-6 space-y-1">
                    <li>Product pre CarCode/BikeCode: name, description, brand, offers {`{price, priceCurrency, availability}`}</li>
                    <li>FAQPage pre FAQ sekciu; Organization na webe + sameAs</li>
                    <li>OpenGraph/Twitter meta s obrazmi 1200×630, konzistentné názvy/ceny</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </details>


        <details className="bg-white rounded-2xl shadow-lg mb-16">
          <summary className="cursor-pointer select-none px-6 py-4 text-2xl font-bold text-slate-900">Navrhovaná prezentácia</summary>
          <div className="px-6 pb-6">

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Navrhovaná prezentácia
              </h2>
              <p className="text-slate-600 text-center max-w-3xl mx-auto">
                Návrh štruktúry, ktorú vidí návštevník hneď po príchode na stránku.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Dôveryhodnosť – navrhovaná prezentácia
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <p className="text-3xl font-bold text-slate-900 mb-1">20+ rokov</p>
                  <p className="text-slate-600">na trhu</p>
                </div>
                <div className="text-center bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <p className="text-3xl font-bold text-slate-900 mb-1">10 000+</p>
                  <p className="text-slate-600">označených vozidiel</p>
                </div>
                <div className="text-center bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <p className="text-3xl font-bold text-slate-900 mb-1">PZ SR</p>
                  <p className="text-slate-600">spolupráca a overenie</p>
                </div>
              </div>
              <p className="text-slate-600 text-center max-w-3xl mx-auto">
                Označenie umožňuje rýchlu identifikáciu dielov a znižuje ich hodnotu pre čierny trh.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Ako to funguje
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">1) Označenie dielov</h3>
                  <p className="text-slate-600">Aplikujeme tisíce mikro‑kódov na kľúčové časti vozidla.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">2) Registrácia</h3>
                  <p className="text-slate-600">Kód priradíme k majiteľovi v bezpečnom registri.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">3) Overenie</h3>
                  <p className="text-slate-600">Polícia/servis vie kód overiť a kontaktovať majiteľa.</p>
                </div>
              </div>
              <p className="text-slate-600 text-center mt-4">Proces trvá približne 60–90 minút. Kód je neviditeľný voľným okom.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Čo získate
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Prevencia krádeží</h3>
                  <p className="text-slate-600">Označené diely sú pre zlodejov nepredajné.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Sledovateľnosť</h3>
                  <p className="text-slate-600">Diely sú identifikovateľné a dohľadateľné.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Pokoj</h3>
                  <p className="text-slate-600">Register a spolupráca s PZ SR zvyšujú šancu návratu majetku.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Výber riešenia
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">CarCode</h3>
                  <p className="text-slate-600">Pre osobné a dodávkové vozidlá. Funkčný princíp rovnaký, líši sa rozsah označenia a obsah balenia.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">BikeCode</h3>
                  <p className="text-slate-600">Pre bicykle a motorky. Funkčný princíp rovnaký, upravený pre rám a komponenty.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Čo je v balení
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">CarCode</h3>
                  <ul className="text-slate-600 list-disc pl-6 space-y-1">
                    <li>Sada mikro‑kódov</li>
                    <li>Aplikačné médium a čistiace tampóny</li>
                    <li>Návod a registračná karta</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">BikeCode</h3>
                  <ul className="text-slate-600 list-disc pl-6 space-y-1">
                    <li>Mikro‑kódy pre rám a komponenty</li>
                    <li>Aplikačné médium</li>
                    <li>Návod a registračná karta</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Register a spolupráca s PZ SR
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-3">
                  <p className="text-slate-600">Váš kód priradíme k vám v registri. V prípade nálezu vie polícia alebo servis overiť vlastníctvo a kontaktovať vás.</p>
                  <div className="flex gap-3 pt-2">
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white">Overiť kód v registri</Button>
                    <Button variant="outline" className="border-slate-300">Registrovať označenie</Button>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Právne a bezpečnostné výhody</h3>
                  <ul className="text-slate-600 list-disc pl-6 space-y-1">
                    <li>Rýchla identifikácia dielov</li>
                    <li>Vyššia šanca návratu majetku</li>
                    <li>Oficiálna spolupráca s PZ SR</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Cena a objednanie – návrh
              </h2>
              <div className="text-slate-600 max-w-3xl mx-auto text-center space-y-2">
                <p>Jasná cena s DPH a informácia o montáži/dodávke. Pripravení do 48 hodín. Záruka spokojnosti 30 dní.</p>
                <p>Sticky panel s cenou a hlavnými benefitmi zvyšuje konverziu.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                FAQ – návrh otázok
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Je označenie viditeľné?</h3>
                  <p className="text-slate-600">Voľným okom nie. Kód je čitateľný pri kontrole.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Ovplyvní to záruku?</h3>
                  <p className="text-slate-600">Nie, postup je neinvazívny.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Ako prebieha registrácia?</h3>
                  <p className="text-slate-600">Po montáži vám priradíme kód a pošleme potvrdenie e‑mailom.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Čo ak predám vozidlo?</h3>
                  <p className="text-slate-600">V registri prevedieme vlastníctvo na nového majiteľa.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Referencie – návrh dôkazov
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Prípad: vozidlo nájdené do 72 hodín</h3>
                  <p className="text-slate-600">Označené diely umožnili rýchlu identifikáciu a spojenie s majiteľom.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Citácia zákazníka</h3>
                  <p className="text-slate-600">Po označení mám pokoj – viem, že diely sú dohľadateľné.</p>
                </div>
              </div>
            </div>

          </div>
        </details>

        <details className="bg-white rounded-2xl shadow-lg mb-16">
          <summary className="cursor-pointer select-none px-6 py-4 text-2xl font-bold text-slate-900">Obsahové odporúčania</summary>
          <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
            Obsahové odporúčania
          </h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-6">Zmeny v texte, štruktúre a komunikácii pre vyššiu zrozumiteľnosť a konverzie.</p>
          <div className="space-y-8">

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Zjednotenie webu a multijazyčná architektúra
              </h3>
              <p className="text-slate-600 mb-3">
                Presun obsahu na jeden web s jazykovými mutáciami (SK/HU/EN) a jasnou doménovou stratégiou.
              </p>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Výhody:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Jednotný brand a konzistentná navigácia</li>
                  <li>• Silnejšia doménová autorita a SEO</li>
                  <li>• Jednoduchšia správa obsahu</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-violet-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Blog – posilniť obsahovú stratégiu
              </h3>
              <p className="text-slate-600 mb-3">
                Blog je dobrý základ, odporúčame zvýšiť frekvenciu a lepšie štruktúrovať témy.
              </p>
              <div className="bg-violet-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Odporúčania:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Publikovať 2–4 články mesačne</li>
                  <li>• Tematické clustre: označovanie áut a bicyklov</li>
                  <li>• Kombinácia evergreen tém a prípadových štúdií</li>
                  <li>• Interné prelinkovanie na produkty a jasné CTA</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Navigačné menu – zviditeľniť a doplniť CTA
              </h3>
              <p className="text-slate-600 mb-3">
                Aktuálne menu je nenápadné. Potrebné je jasné vizuálne vedenie a akčné prvky vpravo.
              </p>
              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Odporúčania:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Vyšší kontrast, čitateľnejšia veľkosť písma, výrazné hover/active stavy</li>
                  <li>• Primárny CTA vpravo: Objednať kód</li>
                  <li>• Sekundárny CTA/link: Nahlásiť krádež</li>
                  <li>• Sticky header, menej položiek (5–7), logické zoskupenie</li>
                  <li>• Na mobile zvýrazniť CTA aj v hamburger menu</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-sky-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Sociálne siete – posilniť stratégiu a edukáciu
              </h3>
              <p className="text-slate-600 mb-3">
                Zvýšiť záber na Facebook a Instagram s dôrazom na ukážky použitia kódu a spolupráce s influencermi.
              </p>
              <div className="bg-sky-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Odporúčania:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Krátke videá (Reels): ako sa kód nanáša a overuje</li>
                  <li>• Spolupráce s influencermi v auto/bike komunite</li>
                  <li>• UGC: reálne príbehy zákazníkov a výsledky</li>
                  <li>• Piliere obsahu: edukácia, bezpečnosť, návody, case studies</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
          </div>
        </details>

        <details className="bg-white rounded-2xl shadow-lg mb-16">
          <summary className="cursor-pointer select-none px-6 py-4 text-2xl font-bold text-slate-900">Technické odporúčania</summary>
          <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
            Technické odporúčania
          </h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-6">Implementácie pre meranie, bezpečnosť a výkon.</p>
          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Conversion Tracking API pre Meta a Google Ads
              </h3>
              <p className="text-slate-600 mb-3">
                Implementácia server-side conversion tracking pre presné meranie konverzií a optimalizáciu reklám.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Výhody:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Presnejšie sledovanie konverzií bez ad blockers</li>
                  <li>• Lepšia optimalizácia reklám a bidding stratégie</li>
                  <li>• Zníženie nákladov na získanie zákazníka (CAC)</li>
                  <li>• GDPR compliant tracking</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                PostHog pre sledovanie user sessions a chýb
              </h3>
              <p className="text-slate-600 mb-3">
                Implementácia PostHog pre detailné sledovanie používateľského správania a identifikáciu chýb na stránke.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Výhody:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Sledovanie user sessions a heatmaps</li>
                  <li>• Automatická detekcia chýb a crash reporting</li>
                  <li>• A/B testovanie a feature flags</li>
                  <li>• GDPR compliant analytics</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Formuláre – GDPR súhlas a ochrana proti botom
              </h3>
              <p className="text-slate-600 mb-3">
                Chýba povinný GDPR checkbox a anti‑spam ochrana (reCAPTCHA/hCaptcha), čo predstavuje právne aj bezpečnostné riziko.
              </p>
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Odporúčania:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Povinný GDPR checkbox so zrozumiteľným znením a odkazom na zásady</li>
                  <li>• reCAPTCHA v3 alebo hCaptcha + server‑side verifikácia</li>
                  <li>• Rate limiting a server‑side validácia polí</li>
                  <li>• Logovanie chýb a spam pokusov; double opt‑in pre newsletter</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-slate-500 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Backend – preveriť objednávkový proces
              </h3>
              <ul className="text-slate-600 space-y-1">
                <li>• Preveriť celý objednávkový proces v backende</li>
                <li>• Odosielanie e‑mailov (potvrdenia, faktúry, upozornenia)</li>
                <li>• Stavy objednávok a ich automatizácie</li>
                <li>• Fakturácia a prepojenia (číslovanie, PDF, splatnosti)</li>
              </ul>
            </div>
          </div>
        </div>
          </div>
        </details>

        </div>
        <div className="text-center">
          <DownloadAuditButton />
        </div>
      </div>

      <Contact />
    </div>
  );
}
