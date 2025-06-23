'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const serviceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1, 
    y: 0,
    transition: {
      delay: delay * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const servicesData = [
  {
    icon: Zap,
    title: "Vývoj webových aplikácií na mieru",
    description: "Tvorba rýchlych, bezpečných a škálovateľných webových aplikácií s využitím moderných technológií ako Next.js, React a TypeScript. Ideálne pre firemné systémy, SaaS platformy a komplexné weby, kde je dôraz na výkon a používateľský zážitok.",
    color: "text-blue-500",
    gradient: "from-blue-50/50 to-white"
  },
  {
    icon: Code,
    title: "Pokročilé WordPress riešenia",
    description: "Posúvam hranice WordPressu. Tvorba vlastných tém a pluginov na mieru, integrácie s externými systémami a optimalizácia pre maximálny výkon a bezpečnosť. Od firemných webov po komplexné portály.",
    color: "text-emerald-500",
    gradient: "from-emerald-50/50 to-white"
  },
  {
    icon: Rocket,
    title: "Zrýchlenie a optimalizácia webu (Performance & SEO)",
    description: "Analýza a odstránenie technických problémov, ktoré brzdia váš web. Zlepšenie rýchlosti načítania (Core Web Vitals) a technická SEO optimalizácia pre lepšiu viditeľnosť v Google.",
    color: "text-purple-500",
    gradient: "from-purple-50/50 to-white"
  }
];

export function Services() {
  return (
    <section 
      id="services" 
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-blue-600 text-transparent bg-clip-text">
              S čím vám viem pomôcť
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Špecializujem sa na tri kľúčové oblasti, v ktorých prinášam najväčšiu hodnotu.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={serviceVariants}
              className="h-full"
            >
              <Card className={`group transition-all duration-300 bg-gradient-to-br ${service.gradient} border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full`}>
                <CardHeader className="pb-4">
                  <div className={`mb-4 inline-block p-3 rounded-xl bg-white border border-gray-100 shadow-sm`}>
                    <service.icon size={28} className={service.color} strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-500">
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