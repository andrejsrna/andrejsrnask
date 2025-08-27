'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaSearch, FaMobile, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa";
import { RiSpeedFill, RiSearchEyeLine, RiSmartphoneLine, RiShieldCheckLine } from "react-icons/ri";
import LandingHero from "@/components/LandingHero";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/TheySay";
import References from "@/components/References";
import LatestPosts from "@/components/LatestPosts";
import Pricing from "@/components/Pricing";
import LeadMagnet from "@/components/LeadMagnet";
import FAQ from "@/components/FAQ";
import Script from "next/script";

export default function TvorbaWebStranokPezinok() {
  const services = [
    {
      icon: FaRocket,
      title: "Moderné webové stránky",
      description: "Výkonné a rýchle weby s dôrazom na Core Web Vitals, SEO a konverzie. Responzívne pre všetky zariadenia."
    },
    {
      icon: FaSearch,
      title: "SEO optimalizácia",
      description: "Optimalizácia pre vyhľadávače už v základe. Vaša webová stránka bude viditeľná v Google a prinesie vám nových zákazníkov."
    },
    {
      icon: FaMobile,
      title: "Mobilné riešenia",
      description: "Optimalizované pre mobil s výborným UX a rýchlosťou. Zelené CWV aj na 4G."
    },
    {
      icon: FaShieldAlt,
      title: "Bezpečnosť a rýchlosť",
      description: "Bezpečné a rýchle webové stránky. Implementácia najlepších bezpečnostných praktík a optimalizácia výkonu."
    }
  ];

  const benefits = [
    {
      icon: RiSpeedFill,
      title: "Rýchle načítanie",
      description: "Optimalizácia kódu a obrázkov, lazy‑load a CDN. Cieľ: zelené Core Web Vitals."
    },
    {
      icon: RiSearchEyeLine,
      title: "Viditeľnosť v Google",
      description: "SEO optimalizované webové stránky pre lepšie umiestnenie vo výsledkoch vyhľadávania. Získajte viac organickej návštevnosti."
    },
    {
      icon: RiSmartphoneLine,
      title: "Responzívny dizajn",
      description: "Tvorba web stránok Pezinok pre všetky zariadenia - mobil, tablet aj počítač. Konzistentný zážitok na každom zariadení."
    },
    {
      icon: RiShieldCheckLine,
      title: "Bezpečnosť",
      description: "Bezpečnostné zásady, aktualizácie a monitoring. Stabilita bez výpadkov."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Konzultácia a analýza",
      description: "Spoločne preberieme ciele, konkurenciu a dáta. Výstup: mini audit a prioritizácia. 1–2 dni."
    },
    {
      step: 2,
      title: "Návrh a dizajn",
      description: "Návrh štruktúry, UX a obsahu so zameraním na konverzie a SEO. 3–5 dní."
    },
    {
      step: 3,
      title: "Vývoj a implementácia",
      description: "Implementácia a optimalizácia výkonu (CWV, obrázky, CDN). 2–4 týždne podľa rozsahu."
    },
    {
      step: 4,
      title: "Spustenie a podpora",
      description: "Spustenie, zaškolenie a meranie (GA4, GSC). Následná podpora dohodou. 1–2 dni."
    }
  ];

  const pezFaqItems = [
    { q: 'Aké sú termíny pre Pezinok a okolie?', a: 'Konzultáciu viem spraviť do 24 hodín, implementáciu riešim selektívne mimo pracovného času (2–4 týždne podľa rozsahu).' },
    { q: 'Koľko stojí web pre lokálny biznis?', a: 'Základná prezentačná stránka od 800 €, prepracovanejšie riešenia individuálne podľa auditu a požiadaviek.' },
    { q: 'Čo je v cene?', a: 'Návrh štruktúry, technická SEO, optimalizácia rýchlosti, nasadenie a základné meranie (GA4, Search Console).' },
    { q: 'Ako prebieha spolupráca?', a: 'Krátka konzultácia → mini audit → návrh riešení → implementácia → spustenie a meranie.' }
  ];

  return (
    <div>
      <LandingHero />
      <LeadMagnet />
      
      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Tvorba web stránok Pezinok
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionálna tvorba web stránok v Pezinku a okolí. Moderné riešenia pre váš úspech online. 
              <Link href="/tvorba-web-stranok-cennik" className="text-blue-700 hover:underline">Pozrieť cenník</Link> · 
              <Link href="/#references" className="text-blue-700 hover:underline">Portfólio</Link>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <service.icon className="text-3xl mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <ul className="mt-3 text-sm text-gray-600 list-disc pl-5 space-y-1">
                  {index === 0 && (
                    <>
                      <li>Zelené Core Web Vitals</li>
                      <li>Optimalizované obrázky a CDN</li>
                      <li>GA4 a Search Console</li>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <li>Technická SEO (schema, sitemap)</li>
                      <li>On‑page (H1–H3, interné linky)</li>
                      <li>Lokálne signály (GBP, NAP)</li>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <li>LCP &lt; 2.5 s na 4G</li>
                      <li>CLS &lt; 0.1</li>
                      <li>Tap targets a čitateľnosť</li>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <li>HTTPS a HSTS</li>
                      <li>Aktualizácie a zálohy</li>
                      <li>Monitoring dostupnosti</li>
                    </>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <Script id="localbusiness-pezinok-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Andrej Srna – Tvorba web stránok',
              image: 'https://andrejsrna.sk/andrej-srna-cover.jpg',
              url: 'https://andrejsrna.sk/tvorba-web-stranok-pezinok',
              telephone: '+421914230321',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1. mája 33',
                addressLocality: 'Báhoň',
                postalCode: '900 84',
                addressCountry: 'SK'
              },
              areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Pezinok'
              }
            }),
          }} />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Prečo si vybrať tvorbu web stránok Pezinok?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lokálny odborník s globálnymi skúsenosťami. Tvorba web stránok Pezinok s dôrazom na kvalitu a výsledky.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <benefit.icon className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 grid">
            <div className="p-6 bg-white rounded-2xl border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-1">Mini case</div>
              <div className="text-gray-900 font-semibold">Lokálny remeselník</div>
              <div className="text-gray-600">+32 % telefonátov do 4 týždňov po zrýchlení webu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Ako prebieha tvorba web stránok Pezinok?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jednoduchý a transparentný proces tvorby web stránok. Od nápadu až po spustenie.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20" />
            
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  <div className={`w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  } mt-8 md:mt-0`}>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Tvorba web stránok Pezinok s lokálnym SEO
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Špecializujem sa na tvorbu web stránok v Pezinku a okolí s dôrazom na lokálne vyhľadávanie. 
              Vaša webová stránka bude viditeľná pre zákazníkov v Pezinku a okolitých obciach.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <FaSearch className="text-3xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Lokálne vyhľadávanie</h3>
                <p className="text-gray-600">Optimalizácia pre vyhľadávanie v Pezinku a okolí</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <FaUsers className="text-3xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Cieľová skupina</h3>
                <p className="text-gray-600">Zameranie na lokálnych zákazníkov a klientov</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <FaChartLine className="text-3xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Merateľné výsledky</h3>
                <p className="text-gray-600">Sledovanie návštevnosti a konverzií</p>
              </div>
            </div>
            <div className="mt-10">
              <Link href="#contact-form" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">Skontrolovať váš lokálny profil</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutMe/>
      <References />
      <FAQ items={pezFaqItems} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link href="/tvorba-web-stranok-cennik" className="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">Pozrieť cenník</Link>
            <Link href="#contact-form" className="px-6 py-3 rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors">Nezáväzná konzultácia</Link>
          </div>
        </div>
      </section>
      <Pricing />
      <LatestPosts />
      <Testimonials/>
      <Contact />
      <Script id="faq-pezinok-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: pezFaqItems.map((qa) => ({
            '@type': 'Question',
            name: qa.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: qa.a,
            },
          })),
        }),
      }} />
    </div>
  );
}