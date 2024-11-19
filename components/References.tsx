'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const referenceVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const referencesData = [
  {
    title: "Web Trnavského Samosprávneho Kraja",
    description: "Komplexná redesign webovej stránky pre Trnavský samosprávny kraj, vytvorenie moderného, responzívneho rozhrania sozameraním na používateľskú prívetivosť a prístupnosť informácií.",
    imageUrl: "/ttsk.jpg",
    websiteUrl: "https://www.trnava-vuc.sk",
    imagePosition: "right",
    technologies: ["WordPress", "PHP", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Správa Majetku Mesta Trnava",
    description: "Vývoj komplexnej webovej aplikácie pre správu mestského majetku, implementácia pokročilých filtračných a analytických nástrojov pre efektívnu správu nehnuteľností.",
    imageUrl: "/smmt.jpg",
    websiteUrl: "https://smmt.trnava.sk/",
    imagePosition: "left",
    technologies: ["WordPress", "PHP", "CSS", "jQuery"]
  }
];

export function References() {
  return (
    <section 
      id="references" 
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Referencie
        </motion.h2>

        {referencesData.map((reference) => (
          <motion.div
            key={reference.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={referenceVariants}
            className={`flex flex-col md:flex-row items-center mb-16 ${
              reference.imagePosition === 'left' 
                ? 'md:flex-row-reverse' 
                : ''
            }`}
          >
            <div className="md:w-1/2 p-4">
              <Card className="p-6 h-full">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {reference.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {reference.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Použité Technológie:</h4>
                  <div className="flex flex-wrap gap-2">
                    {reference.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => window.open(reference.websiteUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Navštíviť stránku
                </Button>
              </Card>
            </div>
            <div className="md:w-1/2 p-4">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={reference.imageUrl}
                  alt={reference.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default References;