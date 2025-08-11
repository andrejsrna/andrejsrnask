import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ShoppingCart, Settings, Users, CreditCard, Truck, Palette, Lock, LineChart } from "lucide-react";
import References from "@/components/References";
import LatestPosts from "@/components/LatestPosts";
import Contact from "@/components/Contact";
export const metadata = {
  title: "WooCommerce WordPress E-shop | Andrej Srna",
  description: "Výkonný a bezpečný WooCommerce e‑shop so zameraním na rýchlosť, SEO a konverzie. Nezáväzná konzultácia; externé spolupráce mimo pracovného času.",
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

export default function WooCommercePage() {
  const benefits = [
    {
      icon: ShoppingCart,
      title: "Flexibilita",
      description: "Ideálne riešenie pre malé aj veľké e-shopy s možnosťou škálovania podľa potrieb"
    },
    {
      icon: Settings,
      title: "Jednoduchá správa",
      description: "Intuitívne rozhranie pre správu produktov, objednávok a zákazníkov"
    },
    {
      icon: Palette,
      title: "Prispôsobiteľnosť",
      description: "Neobmedzené možnosti úpravy dizajnu a funkcií podľa vašich predstáv"
    },
    {
      icon: CreditCard,
      title: "Platobné brány",
      description: "Integrácia so slovenskými platobnými systémami (Tatrapay, CardPay, PayPal)"
    },
    {
      icon: Truck,
      title: "Doprava",
      description: "Prepojenie so slovenskými dopravcami (Slovenská pošta, GLS, Packeta)"
    },
    {
      icon: Lock,
      title: "Bezpečnosť",
      description: "Zabezpečené platby a ochrana údajov vašich zákazníkov"
    },
    {
      icon: Users,
      title: "Správa zákazníkov",
      description: "Prehľadná evidencia zákazníkov a ich objednávok"
    },
    {
      icon: LineChart,
      title: "Analytika",
      description: "Detailné štatistiky a prehľady o predaji a zákazníkoch"
    }
  ];

  const services: Service[] = [
    {
      title: "Tvorba e-shopu na mieru",
      description: "Kompletné riešenie od návrhu až po spustenie s dôrazom na výkon a konverzie",
      features: [
        "Rýchla checkout cesta a UX",
        "Zelené Core Web Vitals",
        "GA4 a Search Console",
        "Technická SEO (schema, sitemap)",
      ],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Optimalizácia existujúceho e-shopu",
      description: "Zrýchlenie načítania a zvýšenie konverzií bez navýšenia reklám",
      features: [
        "−40 % LCP/TTFB (cieľ)",
        "Jednoduchší checkout (nižší drop-off)",
        "Technická SEO (interné linky)",
        "Cachovanie a CDN",
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Integrácie a rozšírenia",
      description: "Platby, doprava a ERP bez plugin bloatu",
      features: [
        "TatraPay, CardPay, PayPal",
        "Packeta, GLS, Slovenská pošta",
        "ERP/sklady a marketingové nástroje",
        "Minimalizácia pluginov",
      ],
      gradient: "from-pink-500 to-red-500"
    },
    {
      title: "Technická podpora a údržba",
      description: "Stabilita, bezpečnosť a monitoring",
      features: [
        "Aktualizácie a zálohy",
        "Monitoring a alerting",
        "Bezpečnostné revízie",
        "Podpora podľa dohody",
      ],
      gradient: "from-red-500 to-orange-500"
    }
  ];

  const collaborationSteps: CollaborationStep[] = [
    {
      step: 1,
      title: "Úvodná konzultácia",
      description: "1 hod. call: ciele, konkurencia, technický rámec. Výstup: krátky plán.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      step: 2,
      title: "Návrh riešenia",
      description: "1–3 dni: audit, návrh štruktúry, UX a priorít. Roadmapa a odhad.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: "Implementácia",
      description: "2–4 týždne: implementácia, optimalizácia výkonu (CWV, TTFB), testovanie checkoutu.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      step: 4,
      title: "Spustenie a podpora",
      description: "1–2 dni: spustenie, GA4/GTM, GSC, školenie. Podpora a údržba dohodou.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7M9 19h12a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "Aké sú výhody WooCommerce oproti iným platformám?",
      answer: "WooCommerce ponúka neobmedzenú flexibilitu, nižšie náklady na prevádzku, jednoduchú správu a rozsiahlu komunitu. Na rozdiel od uzavretých platforiem máte plnú kontrolu nad svojím e-shopom a dátami. Navyše, WooCommerce je optimalizovaný pre slovenský trh a podporuje lokálne platobné brány a dopravcov."
    },
    {
      question: "Koľko trvá vytvorenie e-shopu?",
      answer: "Doba vytvorenia e-shopu závisí od požadovanej funkcionality a rozsahu projektu. Jednoduchší e-shop je možné spustiť do 2-3 týždňov, komplexnejšie riešenia môžu trvať 1-2 mesiace. Presný časový harmonogram stanovíme po úvodnej konzultácii a analýze vašich požiadaviek."
    },
    {
      question: "Aké sú náklady na údržbu e-shopu?",
      answer: "Základné náklady zahŕňajú hosting (od 10€/mesiac), aktualizácie systému a zálohovanie. Voliteľné služby ako technická podpora, marketingové nástroje alebo dodatočné funkcie sa odvíjajú od vašich potrieb. Vytvoríme vám balík služieb presne podľa vašich požiadaviek a rozpočtu."
    },
    {
      question: "Môžem si neskôr e-shop sám spravovať?",
      answer: "Áno, WooCommerce má intuitívne administračné rozhranie, ktoré zvládne aj začiatočník. Súčasťou dodávky je zaškolenie a podrobná dokumentácia. Zároveň vám viem poskytnúť podporu pri správe e-shopu, ak by ste ju potrebovali."
    },
    {
      question: "Je WooCommerce vhodný aj pre väčšie e-shopy?",
      answer: "Áno, WooCommerce je škálovateľný a zvládne aj tisíce produktov a objednávok. Mnoho úspešných e-shopov používa práve WooCommerce. Systém je možné optimalizovať a rozšíriť podľa rastúcich potrieb vášho podnikania."
    },
    {
      question: "Ako prebieha migrácia zo Shopify/Wix?",
      answer: "Najprv urobím audit a plán migrácie. Prenos produktov, objednávok a zákazníkov riešim skriptami a testovaním bez straty dát a SEO."
    },
    {
      question: "Ako riešite rýchlosť pri veľkom katalógu?",
      answer: "Cachovanie, CDN, optimalizácia databázových dopytov a lazy‑load. Cieľ: zelené CWV a nízky TTFB aj pri tisícoch produktov."
    },
    {
      question: "Ako zabezpečujete bezpečnosť platieb?",
      answer: "Platby prebiehajú cez certifikované brány (CardPay, TatraPay, PayPal). HTTPS, HSTS, bezpečnostné zásady a pravidelné aktualizácie."
    },
    {
      question: "Koľko pluginov používate?",
      answer: "Minimum potrebné. Preferujem ľahké riešenia a vlastné úpravy bez plugin bloatu."
    },
    {
      question: "Viete dodať headless/Next.js frontend?",
      answer: "Áno, podľa rozsahu. Headless riešenia prinášajú rýchlosť a flexibilitu, najmä pri vysokom trafiku."
    }
  ];

  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center -mt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                <span className="text-white">Profesionálne riešenia pre váš </span>
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  e-shop s WooCommerce
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Rýchly a bezpečný e‑shop na WooCommerce so zameraním na výkon, SEO a konverzie.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <Link
                  href="/#contact"
                  className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Nezáväzná konzultácia
                </Link>
                <Link
                  href="mailto:ahoj@andrejsrna.sk?subject=Bezplatn%C3%BD%20mini%20audit%20checkoutu&body=URL%20e-shopu:%20"
                  className="px-8 py-4 text-lg border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Bezplatný audit checkoutu
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-3">Externé spolupráce riešim mimo pracovného času, v súlade so zmluvnými podmienkami.</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/woocommerce-hero.webp"
                alt="WooCommerce E-shop"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why WooCommerce Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Prečo je WooCommerce správna voľba?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              WooCommerce je najpopulárnejšie riešenie pre e-commerce, ktoré poháňa viac ako 30% všetkých online obchodov
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
                    className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" 
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Čo vám môžem ponúknuť
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Komplexné služby pre váš úspešný online predaj. {" "}
              <Link href="/tvorba-web-stranok-cennik" className="text-blue-300 hover:underline">Pozrieť cenník</Link> · {" "}
              <Link href="/#references" className="text-blue-300 hover:underline">Portfólio</Link>
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
                          className="w-6 h-6 text-blue-400 mr-2 flex-shrink-0"
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 text-center">
              <div className="text-sm text-gray-400 mb-1">Mini case</div>
              <div className="text-white font-semibold">E‑shop s 800+ produktmi</div>
              <div className="text-gray-300">−45 % LCP, +18 % konverzií za 6 týždňov</div>
            </div>
            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 text-center">
              <div className="text-sm text-gray-400 mb-1">Mini case</div>
              <div className="text-white font-semibold">Integrácie platieb a dopravy</div>
              <div className="text-gray-300">−27 % opustených košíkov po CardPay + Packeta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Process Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Ako spolupracujeme?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Jednoduchý a efektívny proces vytvorenia vášho e-shopu
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 opacity-20" />

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
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  } mt-8 md:mt-0`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                      <div className="flex items-center mb-4">
                        <div className="mr-4 text-blue-400">
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Často kladené otázky
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Odpovede na najčastejšie otázky o WooCommerce e-shopoch
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
                    <span className="text-blue-400 mr-3 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 pl-7">
                    {faq.answer}
                  </p>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-b-2xl group-hover:from-purple-500/40 group-hover:via-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              Máte ďalšie otázky? Neváhajte ma kontaktovať
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Kontaktujte ma
            </Link>
          </div>
        </div>
      </section>

      <LatestPosts />

      <Contact />
      <Script id="faq-woocommerce-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((qa) => ({
            '@type': 'Question',
            name: qa.question,
            acceptedAnswer: { '@type': 'Answer', text: qa.answer },
          })),
        }),
      }} />

      <Script id="service-woocommerce-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'WooCommerce vývoj a optimalizácia',
          serviceType: 'WooCommerce development',
          provider: { '@type': 'Person', name: 'Andrej Srna', url: 'https://andrejsrna.sk' },
          areaServed: 'Slovensko',
          offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'EUR' }
        }),
      }} />

    </>
  );
}
