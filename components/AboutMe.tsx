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
  const challenges = [
    {
      icon: Users,
      title: "Málo zákazníkov z webu",
      description: "Váš web má návštevníkov, ale nekonvertujú na zákazníkov. Nastavím stratégiu a systémy pre efektívnu konverziu."
    },
    {
      icon: BarChart3,
      title: "Chýba vám digitálna stratégia",
      description: "Míňate peniaze na náhodné aktivity bez jasného plánu. Vytvorím stratégiu založenú na dátach a merateľných cieľoch."
    },
    {
      icon: Target,
      title: "Nevieme kto sú vaši zákazníci",
      description: "Komunikujete so všetkými rovnako namiesto cielenej komunikácie. Definujeme cieľové skupiny a vytvoríme relevantnú komunikáciu."
    },
    {
      icon: TrendingUp,
      title: "Nízka online viditeľnosť",
      description: "Vaša konkurencia vás predbieha online. Zvýšim vašu viditeľnosť v Google a na sociálnych sieťach."
    }
  ];

  const services = [
    {
      icon: Globe,
      name: "Digitálna stratégia",
      description: "Plán rastu založený na dátach"
    },
    {
      icon: Megaphone,
      name: "Online marketing",
      description: "Cielená komunikácia s výsledkami"
    },
    {
      icon: Target,
      name: "Konverzná optimalizácia",
      description: "Premena návštevníkov na zákazníkov"
    },
    {
      icon: BarChart3,
      name: "Analytika & reporting",
      description: "Meranie a zlepšovanie výsledkov"
    },
    {
      icon: Users,
      name: "Automatizácia procesov",
      description: "Systémy ktoré pracujú 24/7"
    },
    {
      icon: TrendingUp,
      name: "SEO & obsahový marketing",
      description: "Organický rast návštevnosti"
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
              Riešim vaše digitálne výzvy
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Pomáham firmám vybudovať silnú online prítomnosť a získať viac zákazníkov cez web a marketing
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <challenge.icon className="w-8 h-8 mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services section */}
        <motion.div 
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Čo pre vás môžem urobiť</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-6 text-center bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="relative p-3 bg-blue-50 rounded-full mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-900 mb-2">{service.name}</span>
                <span className="text-xs text-gray-600">{service.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
