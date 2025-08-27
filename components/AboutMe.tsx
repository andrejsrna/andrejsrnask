'use client';

import { motion, Variants } from "framer-motion";
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react";

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



export function AboutMe() {
  const areasOfInterest = [
    {
      icon: TrendingUp,
      title: "Tvorba webstránok – rýchle, moderné, responzívne",
      description: "Google aj ľudia ich budú milovať"
    },
    {
      icon: Users,
      title: "SEO optimalizácia – viac zákazníkov z vyhľadávania",
      description: "bez platených reklám"
    },
    {
      icon: Target,
      title: "Výkonnostný marketing – Google Ads, Meta Ads",
      description: "trackovanie výsledkov, nie len kliky"
    },
    {
      icon: BarChart3,
      title: "Mini audit zdarma – konkrétne tipy, čo vylepšiť",
      description: "ešte pred spoluprácou"
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
              Služby zamerané na výsledok
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Konkrétne riešenia, ktoré prinášajú merateľnú hodnotu vašemu biznisu
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


      </div>
    </section>
  );
}

export default AboutMe;
