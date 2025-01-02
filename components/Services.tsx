'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, PenTool, Server, Search, Globe, Smartphone, DownloadCloud, FileText, Layers } from "lucide-react";
import { motion } from "framer-motion";

const serviceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1, 
    y: 0,
    transition: {
      delay: delay * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const servicesData = [
  {
    icon: Code,
    title: "Vývoj webových aplikácií",
    description: "Vytváranie moderných, responzívnych a výkonných webových aplikácií využívajúcich najnovšie technológie.",
    color: "text-blue-500",
    gradient: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: PenTool,
    title: "UI/UX dizajn",
    description: "Navrhovanie intuitívnych a esteticky príťažlivých používateľských rozhraní, ktoré zlepšujú používateľský zážitok.",
    color: "text-green-500",
    gradient: "from-green-500/20 to-green-600/20"
  },
  {
    icon: Server,
    title: "Serverové riešenia",
    description: "Návrh a implementácia škálovateľných backend riešení so zameraním na výkon a bezpečnosť.",
    color: "text-purple-500",
    gradient: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: Search,
    title: "SEO optimalizácia",
    description: "Zlepšenie viditeľnosti vašej webovej stránky vo vyhľadávačoch a zvýšenie organického prenosu.",
    color: "text-yellow-500",
    gradient: "from-yellow-500/20 to-yellow-600/20"
  },
  {
    icon: Globe,
    title: "Administrácia webových stránok",
    description: "Správa obsahu, aktualizácie a optimalizácie pre vaše webové stránky.",
    color: "text-orange-500",
    gradient: "from-orange-500/20 to-orange-600/20"
  },
  {
    icon: Smartphone,
    title: "Vývoj mobilných aplikácií",
    description: "Tvorba natívnych a multiplatformových mobilných aplikácií pre Android a iOS.",
    color: "text-red-500",
    gradient: "from-red-500/20 to-red-600/20"
  },
  {
    icon: DownloadCloud,
    title: "Marketingový plán",
    description: "Príprava komplexných marketingových stratégií a plánov na mieru podľa vašich cieľov.",
    color: "text-cyan-500",
    gradient: "from-cyan-500/20 to-cyan-600/20"
  },
  {
    icon: FileText,
    title: "CMS riešenia",
    description: "Implementácia a správa redakčných systémov, ktoré vám umožnia jednoducho spravovať obsah.",
    color: "text-teal-500",
    gradient: "from-teal-500/20 to-teal-600/20"
  },
  {
    icon: Layers,
    title: "Moderný technologický stack",
    description: "Použitie najnovších technológií pre robustné a udržateľné riešenia.",
    color: "text-indigo-500",
    gradient: "from-indigo-500/20 to-indigo-600/20"
  }
];

export function Services() {
  return (
    <section 
      id="services" 
      className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Modern Abstract Background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-delayed"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-950/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Moje služby
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Komplexné riešenia pre váš digitálny úspech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={serviceVariants}
            >
              <Card className={`group hover:scale-105 transition-all duration-300 bg-gradient-to-br ${service.gradient} backdrop-blur-sm bg-white/10 border-gray-800 hover:border-gray-700 h-full`}>
                <CardHeader className="pb-2">
                  <div className={`mb-4 ${service.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon size={48} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-gray-200">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400 group-hover:text-gray-300">
                  {service.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;