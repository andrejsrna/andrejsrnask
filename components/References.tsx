'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const referenceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
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
    technologies: ["WordPress", "PHP", "Tailwind CSS", "Responsive Design", "SEO", "Google Analytics", "User Permissions", "UX/UI Design", "UX Research", "UX Testing", "CMS", "API", "REST", "Nginx", "MySQL", "jQuery", "AJAX", "Facebook API"]
  },
  {
    title: "Správa majetku mesta Trnava",
    description: "Vývoj komplexnej webovej aplikácie pre správu mestského majetku, implementácia pokročilých nástrojov pre efektívnu správu nehnuteľností.",
    imageUrl: "/smmt.jpg",
    websiteUrl: "https://smmt.trnava.sk/",
    imagePosition: "left",
    technologies: ["WordPress", "PHP", "CSS", "jQuery", "AJAX", "MySQL", "API", "REST", "Nginx", "Tailwind CSS", "Facebook API", "CMS", "SEO", "Google Analytics", "User Permissions", "Responsive Design", "UX/UI Design", "UX Research", "UX Testing"]
  },
  {
    title: "Zdravá župa",
    description: "Vývoj komplexnej webovej aplikácie pre Zdravú župu, implementácia pokročilých nástrojov pre efektívnu správu informácií o zdravotníckych službách.",
    imageUrl: "/zz.jpg",
    websiteUrl: "https://www.zdravazupa.sk/",
    imagePosition: "right",
    technologies: ["React", "Tailwind", "Shadcn", "Next.js", "TypeScript", "API", "REST", "NextAuth", "PostgreSQL", "Docker", "Router", "Git", "GitHub", "Prisma", "Responsive Design", "SEO", "Cursor", "React Lightbox", "Confluence", "Jira"]
  }
];

export function References() {
  return (
    <section 
      id="references" 
      className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Modern Abstract Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-red-500/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
            Referencie
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Projekty, na ktorých som pracoval a pomohol klientom dosiahnuť ich ciele
          </p>
        </motion.div>

        <div className="space-y-24">
          {referencesData.map((reference) => (
            <motion.div
              key={reference.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={referenceVariants}
              className="relative"
            >
              {/* Background gradient for each reference */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-xl -z-10"></div>

              <div className={`relative flex flex-col ${reference.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-3xl overflow-hidden bg-white shadow-xl`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={reference.imageUrl}
                    alt={reference.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/80 backdrop-blur-sm"></div>
                </div>

                {/* Content */}
                <div className="relative md:w-1/2 p-8">
                  <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 p-8">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      {reference.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {reference.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Použité Technológie:</h4>
                      <div className="flex flex-wrap gap-2">
                        {reference.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-700"
                      onClick={() => window.open(reference.websiteUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Navštíviť stránku
                    </Button>
                  </Card>
                </div>

                {/* Preview Image */}
                <div className="relative md:w-1/2">
                  <div className="relative w-full aspect-video md:aspect-auto md:h-full">
                    <Image 
                      src={reference.imageUrl}
                      alt={reference.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default References;