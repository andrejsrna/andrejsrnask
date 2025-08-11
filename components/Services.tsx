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
    title: "Weby a aplikácie, ktoré šetria čas aj náklady",
    description: "Audit rýchlosti a UX, návrh riešení a prioritizácia. Dôraz na Core Web Vitals, stabilitu a konverzie.",
    color: "text-blue-500",
    gradient: "from-blue-50/50 to-white"
  },
  {
    icon: Code,
    title: "WordPress na mieru bez limitov",
    description: "Technické konzultácie, performance, bezpečnosť a integrácie. Odporúčania pre tému/pluginy a roadmapu zlepšení.",
    color: "text-emerald-500",
    gradient: "from-emerald-50/50 to-white"
  },
  {
    icon: Rocket,
    title: "Zrýchlenie webu a rast organiky",
    description: "Technická SEO, CWV, štruktúrované dáta a interné prelinkovanie. Zameranie na merateľné výsledky.",
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
              Ako vám viem pomôcť
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Konzultácie a audity so zameraním na výkon, SEO a konverzie. Implementáciu riešim selektívne a mimo pracovného času.
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