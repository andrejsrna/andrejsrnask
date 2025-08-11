'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

const categorizeTechnology = (tech: string): Technology => {
  const frontendTechs = ['React', 'TypeScript', 'Tailwind', 'CSS', 'jQuery', 'Next.js', 'Shadcn', 'UX/UI Design'];
  const backendTechs = ['PHP', 'WordPress', 'API', 'REST', 'NextAuth', 'Router'];
  const databaseTechs = ['MySQL', 'PostgreSQL', 'Prisma'];
  const devopsTechs = ['Docker', 'Git', 'GitHub', 'Nginx'];

  return {
    name: tech,
    category: frontendTechs.includes(tech) ? 'frontend' :
             backendTechs.includes(tech) ? 'backend' :
             databaseTechs.includes(tech) ? 'database' :
             devopsTechs.includes(tech) ? 'devops' : 'other'
  };
};

const getCategoryColor = (category: Technology['category']) => {
  const colors = {
    frontend: 'bg-blue-50 text-blue-700 border-blue-100',
    backend: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    database: 'bg-amber-50 text-amber-700 border-amber-100',
    devops: 'bg-purple-50 text-purple-700 border-purple-100',
    other: 'bg-gray-50 text-gray-700 border-gray-100'
  };
  return colors[category];
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const referencesData = [
  {
    title: "Web Trnavského samosprávneho raja",
    description: "Komplexný redesign webovej stránky pre Trnavský samosprávny kraj, vytvorenie moderného, responzívneho rozhrania so zameraním na používateľskú prívetivosť a prístupnosť informácií.",
    imageUrl: "/ttsk.jpg",
    websiteUrl: "https://www.trnava-vuc.sk",
    imagePosition: "right",
    technologies: ["WordPress", "PHP", "Tailwind CSS", "Responsive Design", "SEO", "Google Analytics", "User Permissions", "UX/UI Design", "UX Research", "UX Testing", "CMS", "API", "REST", "Nginx", "MySQL", "jQuery", "AJAX", "Facebook API"],
    anonymize: true,
    anonymizedTitle: "Verejný sektor: portál kraja",
    anonymizedDescription: "Redesign verejného portálu so zameraním na prístupnosť, prehľadnú navigáciu a výkon."
  },
  {
    title: "Správa majetku mesta Trnava",
    description: "Vývoj komplexnej webovej aplikácie pre správu mestského majetku, implementácia pokročilých nástrojov pre efektívnu správu nehnuteľností.",
    imageUrl: "/smmt.jpg",
    websiteUrl: "https://smmt.trnava.sk/",
    imagePosition: "left",
    technologies: ["WordPress", "PHP", "CSS", "jQuery", "AJAX", "MySQL", "API", "REST", "Nginx", "Tailwind CSS", "Facebook API", "CMS", "SEO", "Google Analytics", "User Permissions", "Responsive Design", "UX/UI Design", "UX Research", "UX Testing"],
    anonymize: true,
    anonymizedTitle: "Mestský interný systém",
    anonymizedDescription: "Webová aplikácia pre správu majetku so zameraním na prehľadnosť, stabilitu a práva používateľov."
  },
  {
    title: "Zdravá župa",
    description: "Vývoj komplexnej webovej aplikácie pre Zdravú župu, implementácia pokročilých nástrojov pre efektívnu správu informácií o zdravotníckych službách.",
    imageUrl: "/zz.jpg",
    websiteUrl: "https://www.zdravazupa.sk/",
    imagePosition: "right",
    technologies: ["React", "Tailwind", "Shadcn", "Next.js", "TypeScript", "API", "REST", "NextAuth", "PostgreSQL", "Docker", "Router", "Git", "GitHub", "Prisma", "Responsive Design", "SEO", "Cursor", "React Lightbox", "Confluence", "Jira"],
    anonymize: true,
    anonymizedTitle: "Zdravotnícky portál",
    anonymizedDescription: "Portál so sieťou poskytovateľov a vyhľadávaním, nasadenie s dôrazom na výkon a dostupnosť."
  },
  {
    title: "AllSoftCorp",
    description: "Vývoj moderného korporátneho webu pre softvérovú spoločnosť s dôrazom na profesionálny vzhľad a používateľský zážitok, implementácia pokročilých UX/UI princípov.",
    imageUrl: "/allsoftcorp.jpeg",
    websiteUrl: "https://allsoftcorp.com",
    imagePosition: "right",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UX/UI Design", "UX Research", "UX Testing", "Responsive Design", "SEO", "Git", "GitHub", "Router", "API", "REST", "Performance Optimization"]
  },
  {
    title: "Grilované prasiatko",
    description: "Kompletná prerábka klientovej prezentačnej stránky do moderného responzívneho dizajnu pomocou no-code Oxygen Builder, zachovanie všetkých dôležitých informácií s vylepšeným používateľským zážitkom.",
    imageUrl: "/grilovaneprasiatko.jpeg",
    websiteUrl: "https://grilovaneprasiatko.com",
    imagePosition: "left",
    technologies: ["WordPress", "Oxygen Builder", "Tailwind CSS", "No-Code", "Responsive Design", "SEO", "CMS", "MySQL", "UX/UI Design"]
  },
  {
    title: "WordPress to CloudFlare R2 Media Offload",
    description: "Vývoj open-source WordPress pluginu pre automatické presúvanie médií do CloudFlare R2 úložiska, implementácia S3-kompatibilného API s pokročilými funkciami pre správu médií.",
    imageUrl: "/r2-media-offload.jpeg",
    websiteUrl: "https://github.com/andrejsrna/WordPress-to-CloudFlare-R2-Media-Offload",
    imagePosition: "right",
    technologies: ["PHP", "WordPress Plugin", "CloudFlare R2", "S3 API", "AWS SDK", "MySQL", "Git", "GitHub", "Object Storage", "Media Management", "API", "REST", "Performance Optimization", "Open Source", "MIT License"]
  }
];

export function References() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <section 
      id="references" 
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-blue-600 text-transparent bg-clip-text">
              Vybrané projekty
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Výsledky a úlohy, na ktorých som sa podieľal. Citlivé údaje sú zjednodušené.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {referencesData.map((reference) => {
            const technologies = reference.technologies.map(categorizeTechnology);
            
            return (
              <motion.div
                key={reference.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="relative group"
              >
                <Card className="overflow-hidden bg-white border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col">
                  <div className="relative">
                    {/* Project Status Indicator */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span className="text-xs text-gray-600 font-medium">Aktívny</span>
                        </div>
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-gray-50">
                        <Image 
                          src={reference.imageUrl}
                          alt={reference.anonymize ? (reference.anonymizedTitle || reference.title) : reference.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-gray-900/0"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {reference.anonymize ? (reference.anonymizedTitle || reference.title) : reference.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {reference.anonymize ? (reference.anonymizedDescription || reference.description) : reference.description}
                        </p>
                         <div className="mt-4 text-sm text-gray-600">
                           <span className="font-medium text-gray-800">Moja úloha:</span> návrh riešenia, performance, technická SEO
                         </div>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <Code2 className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">Použité technológie</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          <AnimatePresence>
                            {technologies.map((tech, i) => (
                              <motion.span 
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: i * 0.05 }}
                                onMouseEnter={() => setSelectedTech(tech.name)}
                                onMouseLeave={() => setSelectedTech(null)}
                                className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getCategoryColor(tech.category)} transition-all duration-200
                                  ${selectedTech && selectedTech !== tech.name ? 'opacity-50' : 'opacity-100'}`}
                              >
                                {tech.name}
                              </motion.span>
                            ))}
                          </AnimatePresence>
                        </div>

                        {reference.websiteUrl && (
                          <Button 
                            variant="outline"
                            className="w-full bg-white hover:bg-gray-50 border-gray-200 text-gray-600 transition-all duration-200 group/button"
                            onClick={() => window.open(reference.websiteUrl, '_blank')}
                          >
                            <span className="flex items-center justify-center gap-2">
                              Navštíviť stránku
                              <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/button:translate-x-0.5" />
                            </span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default References;