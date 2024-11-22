'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const landingHeroVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const landingButtonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut"
    }
  }
};

export function LandingHero() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-orange-50 to-yellow-100 overflow-hidden">
      
      {/* Abstraktné Oranžové Tvarov Pozadie */}
      <div className="absolute inset-0 -z-20">
        {/* Tvar 1 */}
        <svg 
          className="absolute top-10 left-10 w-40 h-40 text-orange-300 opacity-70"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
        
        {/* Tvar 2 */}
        <svg 
          className="absolute bottom-20 right-10 w-24 h-24 text-orange-400 opacity-60"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-hidden="true"
        >
          <polygon points="50,0 100,100 0,100" />
        </svg>
        
        {/* Tvar 3 */}
        <svg 
          className="absolute top-1/2 left-1/3 w-32 h-32 text-orange-200 opacity-50"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-hidden="true"
        >
          <rect width="100" height="100" rx="20" />
        </svg>
        
        {/* Tvar 4 */}
        <svg 
          className="absolute bottom-10 left-1/2 w-20 h-20 text-orange-500 opacity-40"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-hidden="true"
        >
          <ellipse cx="50" cy="50" rx="50" ry="25" />
        </svg>
        
        {/* Tvar 5 */}
        <svg 
          className="absolute top-3/4 right-1/4 w-28 h-28 text-orange-350 opacity-55"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-hidden="true"
        >
          <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
        </svg>
      </div>
      
      <motion.div 
        variants={landingHeroVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10"
      >
        {/* Textový obsah */}
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Tvorba web stránok <span className="text-orange-600">Pezinok</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Profesionálne a responzívne webové stránky priamo z Pezinka. Zameriavame sa na moderný dizajn, optimalizáciu pre vyhľadávače a bezproblémovú funkčnosť.
          </p>

          {/* Button */}
          <motion.div
            variants={landingButtonVariants}
            className="mt-4"
          >
            <Button asChild className="px-6 py-3 text-lg bg-orange-600 hover:bg-orange-700 text-white">
              <a href="#contact">Získať cenovú ponuku</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Obrázok */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <Image
              src="/pezinok.jpeg" // Uistite sa, že obrázok existuje v priečinku public
              alt="Tvorba web stránok Pezinok"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg border-4 border-white"
            />
            {/* Dekoratívny Element */}
            <div className="absolute top-0 left-0 w-full h-full rounded-lg border-4 border-transparent bg-gradient-to-tr from-orange-400 to-yellow-600 animate-pulse opacity-20"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default LandingHero;