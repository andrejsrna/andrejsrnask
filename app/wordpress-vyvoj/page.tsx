'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Settings, Shield, Rocket, Search, Zap, LineChart, Palette } from "lucide-react";
import { FaWordpress, FaCode, FaRocket, FaTools } from "react-icons/fa";
import References from "@/components/References";
import LatestPosts from "@/components/LatestPosts";
import Contact from "@/components/Contact";

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

export default function WordPressPage() {
  const benefits = [
    {
      icon: Rocket,
      title: "Rýchlosť",
      description: "Optimalizované riešenia pre maximálny výkon a rýchle načítanie"
    },
    {
      icon: Settings,
      title: "Jednoduchá správa",
      description: "Intuitívne rozhranie pre správu obsahu a funkcií webu"
    },
    {
      icon: Palette,
      title: "Moderný dizajn",
      description: "Responzívny dizajn prispôsobený vašej značke"
    },
    {
      icon: Shield,
      title: "Bezpečnosť",
      description: "Implementácia najlepších bezpečnostných praktík"
    },
    {
      icon: Search,
      title: "SEO",
      description: "Optimalizácia pre vyhľadávače už v základe"
    },
    {
      icon: Code,
      title: "Čistý kód",
      description: "Kvalitný a udržateľný zdrojový kód"
    },
    {
      icon: Zap,
      title: "Výkon",
      description: "Optimalizácia pre maximálnu rýchlosť načítania"
    },
    {
      icon: LineChart,
      title: "Analytika",
      description: "Integrácia analytických nástrojov pre sledovanie výkonu"
    }
  ];

  const collaborationSteps: CollaborationStep[] = [
    {
      step: 1,
      title: "Analýza požiadaviek",
      description: "Detailne preberieme vaše potreby, ciele a predstavy o webstránke. Analyzujeme konkurenciu a navrhneme najlepšie riešenie.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      step: 2,
      title: "Návrh a dizajn",
      description: "Vytvoríme návrh štruktúry webu a dizajnu. Pripravíme wireframy a vizuálne návrhy pre vašu spätnú väzbu.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: "Vývoj",
      description: "Implementácia schváleného návrhu, vývoj vlastných funkcií a integrácia potrebných pluginov. Pravidelné konzultácie a testovanie.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      step: 4,
      title: "Spustenie a podpora",
      description: "Finálne testovanie, optimalizácia výkonu, spustenie webu a zaškolenie. Následná technická podpora a údržba.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7M9 19h12a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "Prečo je WordPress správna voľba pre môj web?",
      answer: "WordPress je najpoužívanejší CMS systém na svete, ktorý poháňa viac ako 40% všetkých webových stránok. Ponúka neobmedzenú flexibilitu, jednoduchú správu obsahu, rozsiahlu komunitu a tisíce dostupných rozšírení. Je ideálny pre všetky typy webov - od jednoduchých prezentačných stránok až po komplexné portály."
    },
    {
      question: "Ako dlho trvá vývoj WordPress webu?",
      answer: "Doba vývoja závisí od komplexnosti projektu. Jednoduchší web vieme spustiť do 2-3 týždňov, komplexnejšie projekty môžu trvať 1-2 mesiace. Presný časový harmonogram stanovíme po analýze vašich požiadaviek."
    },
    {
      question: "Aká je bezpečnosť WordPress webu?",
      answer: "WordPress je bezpečný, ak sa správne nakonfiguruje a udržiava. Implementujeme najlepšie bezpečnostné praktiky, pravidelné aktualizácie, monitoring a zálohovanie. Používame overené bezpečnostné pluginy a vlastné riešenia pre maximálnu ochranu vášho webu."
    },
    {
      question: "Môžem si web spravovať sám?",
      answer: "Áno, WordPress má intuitívne administračné rozhranie, ktoré zvládne aj začiatočník. Súčasťou dodávky je zaškolenie a dokumentácia. V prípade potreby vám vieme poskytnúť aj pravidelnú podporu pri správe webu."
    },
    {
      question: "Čo obsahuje pravidelná údržba webu?",
      answer: "Pravidelná údržba zahŕňa aktualizácie WordPress core, tém a pluginov, monitoring bezpečnosti, zálohovanie dát, optimalizáciu databázy a výkonu, riešenie prípadných problémov a základnú technickú podporu."
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
                <span className="text-white">Profesionálny </span>
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  WordPress vývoj
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Vytvorím moderné, rýchle a bezpečné webové stránky pre váš biznis.
              </p>

              <div className="pt-4">
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Získať cenovú ponuku
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/wp-vyvoj.jpeg"
                alt="WordPress vývoj"
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

      {/* Why WordPress Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Prečo WordPress?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              WordPress je najpoužívanejší CMS systém na svete, ktorý poháňa viac ako 40% všetkých webových stránok
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
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Služby WordPress vývoja
              </span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Komplexné riešenia pre váš úspešný web
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {[
                {
                  icon: FaWordpress,
                  title: "WordPress Development",
                  description: "Vývoj webových stránok na mieru s dôrazom na rýchlosť, bezpečnosť a používateľský zážitok.",
                  features: [
                    "Responzívny dizajn",
                    "Vlastné témy a pluginy",
                    "Optimalizácia rýchlosti",
                    "SEO friendly riešenia"
                  ]
                },
                {
                  icon: FaRocket,
                  title: "WordPress Optimalizácia",
                  description: "Vylepšenie výkonu existujúcich stránok pre maximálnu efektivitu a konverzie.",
                  features: [
                    "Audit a optimalizácia",
                    "Bezpečnostné vylepšenia",
                    "Výkon databázy",
                    "Optimalizácia médií"
                  ]
                },
                {
                  icon: FaCode,
                  title: "Vlastné Riešenia",
                  description: "Vývoj na mieru podľa vašich špecifických požiadaviek a potrieb.",
                  features: [
                    "Vlastné WordPress pluginy",
                    "Integrácia API",
                    "Migrácia a zálohovanie",
                    "Vlastné post typy"
                  ]
                },
                {
                  icon: FaTools,
                  title: "Maintenance & Support",
                  description: "Pravidelná údržba a podpora pre bezproblémový chod vášho webu.",
                  features: [
                    "Pravidelné aktualizácie",
                    "Monitoring bezpečnosti",
                    "Zálohovanie dát",
                    "Technická podpora"
                  ]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <service.icon className="text-4xl mb-6 text-blue-600" />
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0"
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
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Jednoduchý a efektívny proces vývoja vášho webu
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
              Odpovede na najčastejšie otázky o WordPress vývoji
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
    </>
  );
}
