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
    color: "text-blue-500"
  },
  {
    icon: PenTool,
    title: "UI/UX dizajn",
    description: "Navrhovanie intuitívnych a esteticky príťažlivých používateľských rozhraní, ktoré zlepšujú používateľský zážitok.",
    color: "text-green-500"
  },
  {
    icon: Server,
    title: "Serverové riešenia",
    description: "Návrh a implementácia škálovateľných backend riešení so zameraním na výkon a bezpečnosť.",
    color: "text-purple-500"
  },
  {
    icon: Search,
    title: "SEO optimalizácia",
    description: "Zlepšenie viditeľnosti vašej webovej stránky vo vyhľadávačoch a zvýšenie organického prenosu.",
    color: "text-yellow-500"
  },
  {
    icon: Globe,
    title: "Administrácia webových stránok",
    description: "Správa obsahu, aktualizácie a optimalizácie pre vaše webové stránky.",
    color: "text-orange-500"
  },
  {
    icon: Smartphone,
    title: "Vývoj mobilných aplikácií",
    description: "Tvorba natívnych a multiplatformových mobilných aplikácií pre Android a iOS.",
    color: "text-red-500"
  },
  {
    icon: DownloadCloud,
    title: "Marketingový plán",
    description: "Príprava komplexných marketingových stratégií a plánov na mieru podľa vašich cieľov.",
    color: "text-cyan-500"
  },
  {
    icon: FileText,
    title: "CMS riešenia",
    description: "Implementácia a správa redakčných systémov, ktoré vám umožnia jednoducho spravovať obsah.",
    color: "text-teal-500"
  },
  {
    icon: Layers,
    title: "Moderný technologický stack",
    description: "Použitie najnovších technológií pre robustné a udržateľné riešenia.",
    color: "text-indigo-500"
  }
];


export function Services() {
  return (
    <section 
      id="services" 
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Moje služby
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={serviceVariants}
            >
              <Card className="hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="pb-2">
                  <div className={`mb-4 ${service.color}`}>
                    <service.icon size={48} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
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