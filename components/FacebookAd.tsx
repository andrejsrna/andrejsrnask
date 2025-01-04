'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
  {
    text: "Žiadne vstupné náklady",
    highlight: true
  },
  {
    text: "Platba až po spustení webu",
    highlight: true
  },
  {
    text: "Moderný responzívny dizajn",
    highlight: false
  },
  {
    text: "SEO optimalizácia v cene",
    highlight: false
  }
];

export default function FacebookAd() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with modern gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Highlight Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-white font-medium">Limitovaná ponuka</span>
            <Euro className="w-4 h-4 ml-2 text-yellow-300" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Získajte modernú web stránku{' '}
            <span className="relative">
              <span className="relative z-10 text-yellow-300">
                bez počiatočných nákladov
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300/20 -rotate-1"></span>
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl text-blue-100 mb-8">
            Platíte až po úspešnom spustení vášho webu. Žiadne skryté poplatky.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center p-4 rounded-lg ${
                  benefit.highlight
                    ? 'bg-white/10 backdrop-blur-sm'
                    : 'bg-transparent'
                }`}
              >
                <Check className={`w-5 h-5 mr-3 ${
                  benefit.highlight ? 'text-yellow-300' : 'text-blue-200'
                }`} />
                <span className={`${
                  benefit.highlight ? 'text-white font-medium' : 'text-blue-100'
                }`}>
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-lg">
              <Link href="/#contact" className="flex items-center gap-2">
                Mám záujem
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 