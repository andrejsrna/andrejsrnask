'use client';

import { motion, Variants } from "framer-motion";
import { TrendingUp, Users, Target, BarChart3, Globe, Megaphone } from "lucide-react";

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const skillsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

export function AboutMe() {
  const areasOfInterest = [
    {
      icon: Users,
      title: "Porozumenie správaniu zákazníkov",
      description: "Fascinuje ma psychológia za rozhodovaním návštevníkov na webe. Namiesto všeobecnej komunikácie sa vo svojich projektoch zameriavam na analýzu dát a definovanie cieľových skupín, aby som pochopil ich potreby a motivácie."
    },
    {
      icon: BarChart3,
      title: "Tvorba digitálnej stratégie",
      description: "Verím, že úspech v online svete nie je náhoda. Je to výsledok premysleného plánu. Rád analyzujem dáta, hľadám príležitosti a skladám ich do stratégie, ktorá má jasne definované a merateľné ciele."
    },
    {
      icon: Target,
      title: "Konverzná optimalizácia (CRO)",
      description: "Každý web je ako živý organizmus. Neustále skúmam cesty používateľov, testujem rôzne hypotézy a hľadám spôsoby, ako vylepšiť používateľský zážitok tak, aby prirodzene viedol k želanej akcii."
    },
    {
      icon: TrendingUp,
      title: "Budovanie online viditeľnosti (SEO)",
      description: "Byť nájdený v správny čas je kľúčové. Skúmam, ako fungujú vyhľadávače a ako vytvárať kvalitný obsah a technicky vyladené weby, ktoré si zaslúžia najvyššie pozície a prinášajú organickú návštevnosť."
    }
  ];

  const competencies = [
    {
      icon: Globe,
      name: "Digitálna stratégia",
      description: "Tvorba dlhodobých plánov založených na analýze dát a trhových príležitostí"
    },
    {
      icon: TrendingUp,
      name: "SEO & obsahový marketing",
      description: "Optimalizácia pre vyhľadávače a tvorba obsahu, ktorý priťahuje a edukuje publikum"
    },
    {
      icon: Target,
      name: "Konverzná optimalizácia (CRO)",
      description: "Analýza správania používateľov (UX) a A/B testovanie s cieľom zvyšovať efektivitu webu"
    },
    {
      icon: BarChart3,
      name: "Analytika & reporting",
      description: "Nastavenie merania (Google Analytics 4) a interpretácia dát pre informované rozhodnutia"
    },
    {
      icon: Megaphone,
      name: "Online marketing",
      description: "Správa cielených kampaní a budovanie komunity na relevantných platformách"
    },
    {
      icon: Users,
      name: "Automatizácia procesov",
      description: "Navrhovanie systémov, ktoré zjednodušujú opakujúce sa marketingové a obchodné úlohy"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-red-500 to-blue-600 text-transparent bg-clip-text">
              Kľúčové oblasti môjho záujmu
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Prehľad techník a stratégií, ktoré ma fascinujú a ktoré aplikujem vo svojich projektoch
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {areasOfInterest.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <area.icon className="w-8 h-8 mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competencies section */}
        <motion.div 
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Prehľad kompetencií</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {competencies.map((competency, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-6 text-center bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="relative p-3 bg-blue-50 rounded-full mb-4">
                  <competency.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-900 mb-2">{competency.name}</span>
                <span className="text-xs text-gray-600">{competency.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
