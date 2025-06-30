'use client';

import { motion } from "framer-motion";
import { FaRocket, FaSearch, FaMobile, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa";
import { RiSpeedFill, RiSearchEyeLine, RiSmartphoneLine, RiShieldCheckLine } from "react-icons/ri";
import LandingHero from "@/components/LandingHero";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/TheySay";
import References from "@/components/References";
import LatestPosts from "@/components/LatestPosts";
import Pricing from "@/components/Pricing";

export default function TvorbaWebStranokPezinok() {
  const services = [
    {
      icon: FaRocket,
      title: "Moderné webové stránky",
      description: "Tvorba web stránok Pezinok s najnovšími technológiami a trendmi v dizajne. Responzívne riešenia pre všetky zariadenia."
    },
    {
      icon: FaSearch,
      title: "SEO optimalizácia",
      description: "Optimalizácia pre vyhľadávače už v základe. Vaša webová stránka bude viditeľná v Google a prinesie vám nových zákazníkov."
    },
    {
      icon: FaMobile,
      title: "Mobilné riešenia",
      description: "Tvorba web stránok Pezinok s dôrazom na mobilné zariadenia. Väčšina návštevníkov prichádza z mobilov - vaša stránka musí byť pripravená."
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
      description: "Tvorba web stránok Pezinok s optimalizovaným kódom pre maximálnu rýchlosť načítania. Vaši zákazníci nebudú čakať."
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
      description: "Zabezpečené webové stránky s pravidelnými aktualizáciami a monitoringom. Ochrana vašich dát a dát vašich zákazníkov."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Konzultácia a analýza",
      description: "Spoločne preberieme vaše potreby a ciele. Analyzujeme konkurenciu a navrhneme najlepšie riešenie pre tvorbu web stránok Pezinok."
    },
    {
      step: 2,
      title: "Návrh a dizajn",
      description: "Vytvoríme moderný a funkčný dizajn vašej webovej stránky. Dôraz kladieme na používateľský zážitok a konverzie."
    },
    {
      step: 3,
      title: "Vývoj a implementácia",
      description: "Profesionálna tvorba web stránok Pezinok s najnovšími technológiami. Čistý kód a optimalizovaný výkon."
    },
    {
      step: 4,
      title: "Spustenie a podpora",
      description: "Spustenie webovej stránky a zaškolenie. Následná technická podpora a údržba pre bezproblémový chod."
    }
  ];

  return (
    <div>
      <LandingHero />
      
      {/* Services Section */}
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
                Tvorba web stránok Pezinok
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionálna tvorba web stránok v Pezinku a okolí. Moderné riešenia pre váš úspech online.
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
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
          </motion.div>
        </div>
      </section>

      <AboutMe/>
      <References />
      <Pricing />
      <LatestPosts />
      <Testimonials/>
      <Contact />
    </div>
  );
}