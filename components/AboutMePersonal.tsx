'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Coffee, Music, Gamepad2, Cat } from 'lucide-react';

const aboutVariants = {
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

const imageVariants = {
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

const personalFacts = [
  {
    icon: MapPin,
    text: "Začiatkom roku 2025 som sa presťahoval do Brna",
    color: "text-blue-500"
  },
  {
    icon: Music,
    text: "Po nociach som DJ, produkujem drum and bass",
    color: "text-purple-500"
  },
  {
    icon: Cat,
    text: "Mám čiernu mačku, ktorá sa volá Dyňa",
    color: "text-orange-500"
  },
  {
    icon: Coffee,
    text: "Vo voľnom čase rád trávim experimentovaním vo sfére online marketingu",
    color: "text-green-500"
  },
  {
    icon: Gamepad2,
    text: "Som gamer a vždy si rád pozriem dobrý film",
    color: "text-red-500"
  }
];

const images = [
  {
    src: "/about-me.jpeg",
    alt: "Andrej Srna - Web Developer",
    caption: "V práci"
  },
  {
    src: "/andrej-dj.jpg", 
    alt: "Andrej Srna - DJ",
    caption: "DJ set"
  },
  {
    src: "/dyna.jpg",
    alt: "Dyňa - čierna mačka",
    caption: "Dyňa 🐱"
  }
];

export function AboutMePersonal() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="about-personal" className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            variants={aboutVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-500 to-blue-600 text-transparent bg-clip-text">
                O mne
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ľudský prístup s profesionálnymi výsledkami
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div
              variants={aboutVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardContent className="p-8">
                  
                  {/* Main Text */}
                  <div className="mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Som <strong className="text-gray-900">Andrej Srna</strong>, web developer a marketér. 
                      Posledné roky spravujem weby pre verejnú správu aj komerčné projekty. 
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Viem spojiť technické riešenia s marketingovým pohľadom – teda web nielen vyzerá, 
                      ale aj <strong className="text-blue-600">predáva</strong>.
                    </p>
                  </div>

                  {/* Personal Facts */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      A keď nie som za počítačom...
                    </h3>
                    {personalFacts.map((fact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`mt-1 ${fact.color}`}>
                          <fact.icon className="w-5 h-5" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {fact.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                
                {/* Main Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={images[activeImage].src}
                    alt={images[activeImage].alt}
                    fill
                    className="object-cover transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">
                        {images[activeImage].caption}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Thumbnails */}
                <div className="flex gap-3 mt-6 justify-center">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                        activeImage === index 
                          ? 'ring-2 ring-blue-500 ring-offset-2 scale-110' 
                          : 'hover:scale-105 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-xl" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMePersonal;
