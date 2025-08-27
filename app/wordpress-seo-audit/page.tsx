import Image from "next/image";
import Link from "next/link";
import { Search, TrendingUp, Target, Lightbulb, Settings, Users, FileText, BarChart2 } from "lucide-react"; // Prispôsobené ikony
import References from "@/components/References";
import LatestPosts from "@/components/LatestPosts";
import Contact from "@/components/Contact";

export const metadata = {
  title: "WordPress SEO Audit | Odhalenie Potenciálu Vášho Webu | Andrej Srna",
  description: "Profesionálny WordPress SEO audit na identifikáciu problémov a návrh riešení pre zlepšenie pozícií vo vyhľadávaní a zvýšenie organickej návštevnosti.",
};

interface Service {
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

interface CollaborationStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function WordpressSeoAuditPage() {
  const benefits = [
    {
      icon: Search,
      title: "Identifikácia Chýb",
      description: "Odhalenie technických SEO nedostatkov, ktoré bránia vášmu webu v lepších pozíciách."
    },
    {
      icon: TrendingUp,
      title: "Zvýšenie Viditeľnosti",
      description: "Optimalizácia pre vyhľadávače s cieľom zlepšiť organické pozície a návštevnosť."
    },
    {
      icon: Target,
      title: "Lepšie Zacielenie",
      description: "Analýza kľúčových slov a obsahu pre prilákanie relevantnejších návštevníkov."
    },
    {
      icon: Lightbulb,
      title: "Konkrétne Odporúčania",
      description: "Praktické a prioritizované kroky na odstránenie nájdených problémov."
    },
    {
      icon: Settings,
      title: "Optimalizácia Výkonu",
      description: "Analýza rýchlosti načítania a návrhy na jej zlepšenie pre lepší UX a SEO."
    },
    {
      icon: FileText,
      title: "Kvalitnejší Obsah",
      description: "Odporúčania pre tvorbu a optimalizáciu obsahu, ktorý osloví používateľov aj vyhľadávače."
    },
    {
      icon: Users,
      title: "Porozumenie Konkurencii",
      description: "Analýza SEO stratégií konkurencie na identifikáciu príležitostí."
    },
    {
      icon: BarChart2,
      title: "Merateľné Výsledky",
      description: "Nastavenie analytických nástrojov pre sledovanie pokroku a efektivity SEO aktivít."
    }
  ];

  const services: Service[] = [
    {
      title: "Technický SEO Audit",
      description: "Hĺbková kontrola technických aspektov vášho WordPress webu.",
      features: [
        "Analýza indexovateľnosti a crawlability",
        "Kontrola súborov robots.txt a sitemap.xml",
        "Analýza rýchlosti načítania stránok",
        "Optimalizácia pre mobilné zariadenia",
        "Identifikácia a oprava chybových stavov (404, 5xx)",
        "Kontrola štruktúrovaných dát",
      ],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "On-Page SEO Analýza",
      description: "Optimalizácia obsahu a štruktúry vašich stránok.",
      features: [
        "Analýza kľúčových slov a ich použitia",
        "Optimalizácia titulkov (title tags) a meta popisov",
        "Kontrola štruktúry nadpisov (H1-H6)",
        "Analýza interného prelinkovania",
        "Optimalizácia obrázkov (alt texty, kompresia)",
        "Hodnotenie kvality a relevancie obsahu",
      ],
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "Off-Page SEO Audit",
      description: "Analýza externých faktorov ovplyvňujúcich vašu autoritu.",
      features: [
        "Analýza profilu spätných odkazov",
        "Identifikácia toxických alebo nekvalitných odkazov",
        "Hodnotenie autority domény a stránok",
        "Analýza konkurenčných spätných odkazov",
        "Návrhy na budovanie kvalitných spätných odkazov",
      ],
      gradient: "from-cyan-500 to-sky-500"
    },
    {
      title: "Stratégia a Akčný Plán",
      description: "Dodanie prehľadného reportu s konkrétnymi odporúčaniami.",
      features: [
        "Detailný report s nálezmi a prioritizáciou úloh",
        "Konkrétne kroky na implementáciu odporúčaní",
        "Individuálna konzultácia výsledkov auditu",
        "Návrh dlhodobej SEO stratégie",
        "Možnosť asistencie pri implementácii",
      ],
      gradient: "from-sky-500 to-blue-500"
    }
  ];

  const collaborationSteps: CollaborationStep[] = [
    {
      step: 1,
      title: "Úvodná Konzultácia",
      description: "Zistíme vaše ciele, aktuálny stav webu a kľúčové oblasti, na ktoré sa máme zamerať. Prejdeme si prístupy k analytickým nástrojom.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      step: 2,
      title: "Hĺbková Analýza",
      description: "Prevediem komplexný audit vášho WordPress webu – technické SEO, on-page faktory, off-page signály a analýzu obsahu.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: "Report a Odporúčania",
      description: "Spracujem detailný report s identifikovanými problémami, ich dopadom a konkrétnymi, prioritizovanými odporúčaniami na ich riešenie.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      step: 4,
      title: "Prezentácia a Konzultácia",
      description: "Predstavím vám výsledky auditu, vysvetlím všetky nálezy a odporúčania. Preberieme ďalšie kroky a možnosti implementácie.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7M9 19h12a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "Prečo potrebujem WordPress SEO audit?",
      answer: "SEO audit odhalí skryté problémy, ktoré bránia vášmu webu dosahovať lepšie pozície vo vyhľadávačoch. Pomôže vám pochopiť, čo treba zlepšiť, aby ste prilákali viac organickej návštevnosti a potenciálnych zákazníkov."
    },
    {
      question: "Ako dlho trvá vytvorenie SEO auditu?",
      answer: "Dĺžka trvania SEO auditu závisí od veľkosti a komplexnosti vášho webu. Pre menšie weby to môže byť niekoľko dní, pre rozsiahlejšie projekty 1-2 týždne. Presný časový odhad poskytnem po úvodnej konzultácii."
    },
    {
      question: "Čo dostanem ako výstup SEO auditu?",
      answer: "Dostanete podrobný report, ktorý bude obsahovať analýzu kľúčových oblastí SEO (technické, on-page, off-page), zoznam nájdených problémov, ich prioritizáciu a konkrétne odporúčania na ich odstránenie. Súčasťou je aj konzultácia výsledkov."
    },
    {
      question: "Pomôžete mi aj s implementáciou odporúčaní?",
      answer: "Áno, po dokončení auditu vám môžem pomôcť s implementáciou navrhovaných zmien, prípadne vás usmerniť, ako ich vykonať. Rozsah asistencie závisí od našej dohody."
    },
    {
      question: "Uvidím výsledky SEO auditu okamžite?",
      answer: "Niektoré technické zmeny môžu priniesť rýchle výsledky, avšak SEO je dlhodobý proces. Výraznejšie zlepšenie pozícií a návštevnosti si zvyčajne vyžaduje čas a konzistentnú prácu na základe odporúčaní z auditu."
    }
  ];

  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center -mt-16 bg-gradient-to-br from-green-900 via-teal-800 to-green-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(20,184,166,0.1)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                <span className="text-white">Odhalíme Skrytý Potenciál Vášho </span>
                <span className="bg-gradient-to-r from-sky-400 to-green-400 text-transparent bg-clip-text">
                  WordPress Webu
                </span>
              </h1>

              <p className="text-xl text-teal-100 leading-relaxed">
                Profesionálny SEO audit pre identifikáciu problémov, optimalizáciu a zlepšenie pozícií vo vyhľadávaní.
              </p>

              <div className="pt-4">
                <Link
                  href="/#contact-form"
                  className="inline-block px-8 py-4 text-lg bg-gradient-to-r from-sky-600 to-green-600 hover:from-sky-700 hover:to-green-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Objednať SEO Audit
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/audit.jpeg" // Placeholder, ideálne nový obrázok
                alt="WordPress SEO Audit"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-green-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Audit Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-green-400 text-transparent bg-clip-text">
              Prečo Investovať do SEO Auditu?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              SEO audit je kľúčovým krokom k úspechu online. Pomôže vám pochopiť aktuálny stav a naplánovať efektívnu stratégiu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  <benefit.icon 
                    className="w-12 h-12 text-green-400 group-hover:text-green-300 transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-green-400 text-transparent bg-clip-text">
              Čo Zahŕňa WordPress SEO Audit?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Komplexná analýza vášho webu pre maximálny online dosah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-300">
                        <svg
                          className="w-6 h-6 text-green-400 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Process Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-green-400 text-transparent bg-clip-text">
              Ako Prebieha SEO Audit?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transparentný a efektívny proces od analýzy po konkrétne odporúčania.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-sky-500 to-green-500 opacity-20" />

            {/* Steps */}
            <div className="space-y-16">
              {collaborationSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Step Number */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  } mt-8 md:mt-0`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                      <div className="flex items-center mb-4">
                        <div className="mr-4 text-green-400">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <References />

      {/* FAQ Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-green-400 text-transparent bg-clip-text">
              Často Kladené Otázky
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Odpovede na vaše otázky týkajúce sa WordPress SEO auditu.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-start">
                    <span className="text-green-400 mr-3 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 pl-7">
                    {faq.answer}
                  </p>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-sky-500/20 via-green-500/20 to-sky-500/20 rounded-b-2xl group-hover:from-sky-500/40 group-hover:via-green-500/40 group-hover:to-sky-500/40 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              Máte ďalšie otázky alebo záujem o SEO audit? Neváhajte ma kontaktovať.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 text-lg bg-gradient-to-r from-sky-600 to-green-600 hover:from-sky-700 hover:to-green-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Kontaktujte ma
            </Link>
          </div>
        </div>
      </section>

      <LatestPosts />

      <Contact />
    </>
  );
} 