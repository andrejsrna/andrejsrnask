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

const caseStudiesData = [
  {
    title: "Komplexný web pre úrad Trnavského samosprávneho kraja",
    problem: "potrebovali modernizovať zastaraný portál a zlepšiť komunikáciu s občanmi",
    solution: "komplexný redesign, mobilná optimalizácia, zlepšená navigácia",
    result: "moderný responzívny portál, lepšia dostupnosť informácií pre občanov",
    imageUrl: "/ttsk.jpg",
    websiteUrl: "https://www.trnava-vuc.sk",
    technologies: ["WordPress", "PHP", "Tailwind CSS", "SEO", "UX Design"],
    anonymize: true,
    anonymizedTitle: "Portál regionálnej samosprávy",
    anonymizedProblem: "zastaraný dizajn, neprehľadná štruktúra informácií",
    anonymizedSolution: "moderný responzívny dizajn, optimalizovaná navigácia",
    anonymizedResult: "lepšia dostupnosť informácií pre občanov, moderný vzhľad"
  },
  {
    title: "Správa majetku mesta Trnava",
    problem: "lepšia dostupnosť dôležitých informácií pre občanov a menej otravovania zamestnancov",
    solution: "intuitívne rozhranie, samoobslužné funkcie, prehľadná dokumentácia",
    result: "efektívnejšia komunikácia, menej administratívnej záťaže pre zamestnancov",
    imageUrl: "/smmt.jpg",
    websiteUrl: "https://smmt.trnava.sk/",
    technologies: ["WordPress", "PHP", "UX Research", "API", "Responsive Design"],
    anonymize: true,
    anonymizedTitle: "Systém správy mestského majetku",
    anonymizedProblem: "neefektívne procesy, častý kontakt občanov so zamestnancami",
    anonymizedSolution: "samoobslužné riešenia, jasná dokumentácia, intuitive UX",
    anonymizedResult: "menej administratívnej záťaže, spokojnejší občania aj zamestnanci"
  },
  {
    title: "Rýchla, SEO optimalizovaná stránka pre zdravotnícke centrum pod správou TTSK",
    problem: "5+ ambulancií potrebovalo jednotný online systém s notifikáciami",
    solution: "výkonná platforma so systémom notifikácií, pokročilé SEO",
    result: "zjednotený portál pre všetky ambulancie",
    imageUrl: "/zz.jpg",
    websiteUrl: "https://www.zdravazupa.sk/",
    technologies: ["React", "Next.js", "TypeScript", "SEO", "Notifikácie"],
    anonymize: true,
    anonymizedTitle: "Zdravotnícka platforma s 5+ ambulanciami",
    anonymizedProblem: "roztrieštenosť služieb, chýbajúce online notifikácie",
    anonymizedSolution: "centralizovaná platforma, notifikačný systém",
    anonymizedResult: "zjednotený systém, automatické notifikácie, lepšia SEO viditeľnosť"
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
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Konkrétne problémy, riešenia a výsledky z reálnych projektov. Citlivé údaje sú anonymizované.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy) => {
            const technologies = caseStudy.technologies.map(categorizeTechnology);
            
            return (
              <motion.div
                key={caseStudy.title}
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
                          src={caseStudy.imageUrl}
                          alt={caseStudy.anonymize ? (caseStudy.anonymizedTitle || caseStudy.title) : caseStudy.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-gray-900/0"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {caseStudy.anonymize ? (caseStudy.anonymizedTitle || caseStudy.title) : caseStudy.title}
                        </h3>
                        
                        {/* Problem */}
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">Problém</span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {caseStudy.anonymize ? (caseStudy.anonymizedProblem || caseStudy.problem) : caseStudy.problem}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Riešenie</span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {caseStudy.anonymize ? (caseStudy.anonymizedSolution || caseStudy.solution) : caseStudy.solution}
                          </p>
                        </div>

                        {/* Result */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Výsledok</span>
                          </div>
                          <p className="text-gray-900 text-sm font-semibold leading-relaxed">
                            {caseStudy.anonymize ? (caseStudy.anonymizedResult || caseStudy.result) : caseStudy.result}
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <Code2 className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">Použité technológie</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          <AnimatePresence>
                            {technologies.slice(0, 4).map((tech, i) => (
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
                            {technologies.length > 4 && (
                              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                +{technologies.length - 4}
                              </span>
                            )}
                          </AnimatePresence>
                        </div>

                        {caseStudy.websiteUrl && (
                          <Button 
                            variant="outline"
                            size="sm"
                            className="w-full bg-white hover:bg-gray-50 border-gray-200 text-gray-600 transition-all duration-200 group/button"
                            onClick={() => window.open(caseStudy.websiteUrl, '_blank')}
                          >
                            <span className="flex items-center justify-center gap-2">
                              Navštíviť stránku
                              <ExternalLink className="w-3 h-3 transition-transform duration-200 group-hover/button:translate-x-0.5" />
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