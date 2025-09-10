'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Users, Globe, Quote } from 'lucide-react';

const trustVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};

// Štatistiky
const stats = [
  {
    icon: Globe,
    number: "15+",
    label: "spustených webov",
    color: "text-blue-500"
  },
  {
    icon: TrendingUp,
    number: "25%",
    label: "nárast návštevnosti u klientov",
    color: "text-green-500"
  },
  {
    icon: Users,
    number: "30%",
    label: "vyššia interakcia",
    color: "text-purple-500"
  }
];

// Recenzie
const testimonials = [
  {
    text: "Andrej nám pomohol s komplexnou optimalizáciou webu. Výsledky boli viditeľné už po mesiaci.",
    author: "Martina K.",
    position: "Projektová manažérka"
  },
  {
    text: "Profesionálny prístup a rýchla komunikácia. Web teraz funguje perfektne na všetkých zariadeniach.",
    author: "Tomáš S.", 
    position: "IT koordinátor"
  },
  {
    text: "Oceňujem, že Andrej myslí na SEO už pri návrhu. Naša viditeľnosť v Google sa výrazne zlepšila.",
    author: "Jana M.",
    position: "Marketing specialist"
  }
];

export function TrustElements() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            variants={trustVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-500 to-blue-600 text-transparent bg-clip-text">
                Dôveryhodnosť
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Konkrétne výsledky a spokojní klienti hovoria za seba
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <Card className="bg-gradient-to-br from-gray-50 to-white border-gray-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 ${stat.color}`}>
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>


          {/* Testimonials */}
          <motion.div
            variants={trustVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-12">
              Čo hovoria klienti
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-50 to-white border-gray-100 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Quote className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 leading-relaxed italic">
                          {testimonial.text}
                        </p>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TrustElements;
