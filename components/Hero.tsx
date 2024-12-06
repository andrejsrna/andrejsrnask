'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const buttonVariants: Variants = {
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

const crazyButtonVariants: Variants = {
  normal: { 
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0
  },
  crazy: {
    scale: [1, 1.2, 0.8, 1.4, 0.9, 1],
    rotate: [0, 45, -45, 180, -180, 0],
    x: [0, 50, -50, 20, -20, 0],
    y: [0, -30, 30, -15, 15, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    }
  }
};

export function Hero() {
  const [isCrazy, setIsCrazy] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const messages = [
    "Stále nestačilo? 😈",
    "Niekto tu má rád chaos... 🌪️",
    "Už si to klikol/a {clickCount}x! 🤪",
    "Toto tlačidlo má magickú moc... ✨",
    "Hovorí sa, že po 100 kliknutiach... 🤫",
    "...sa stane niečo špeciálne! 🎉",
    "Ale nikto sa tam ešte nedostal 😅",
    "Máš na to! 💪",
  ];

  const getCurrentMessage = () => {
    if (clickCount < 3) return null;
    const messageIndex = Math.min(Math.floor(clickCount / 3) - 1, messages.length - 1);
    return messages[messageIndex].replace("{clickCount}", clickCount.toString());
  };

  const handleCrazyClick = () => {
    setIsCrazy(true);
    setClickCount(prev => prev + 1);
  };

  return (
    <section className="relative py-16 bg-gradient-to-r from-orange-50 to-yellow-100 overflow-hidden">
      
      {/* Abstraktné Oranžové Tvarov Pozadie */}
      <div className="absolute inset-0">
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
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10"
      >
        {/* Text Content */}
        <motion.div
          variants={textVariants}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Ahoj, som <span className="text-orange-600">Andrej Srna</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Som vášnivý webový vývojár so špecializáciou na moderné, 
            užívateľsky prívetivé webové aplikácie. <i>Vytvorme spolu niečo úžasné!</i>
          </p>

          {/* Button */}
          <motion.div
            variants={buttonVariants}
            className="mt-4 space-x-4"
          >
            <Button asChild className="px-6 py-3 text-lg bg-orange-600 hover:bg-orange-700 text-white">
              <a href="#contact">Kontaktujte ma</a>
            </Button>
            
            <div className="inline-block relative">
              <motion.button
                variants={crazyButtonVariants}
                animate={isCrazy ? "crazy" : "normal"}
                onClick={handleCrazyClick}
                onAnimationComplete={() => setIsCrazy(false)}
                className="px-4 py-1.5 text-lg bg-purple-600 hover:bg-purple-700 text-white rounded-md"
              >
                Toto tlačítko určite nechcete stlačiť
              </motion.button>
              {clickCount >= 3 && (
                <motion.p
                  key={getCurrentMessage()}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-purple-600 font-semibold whitespace-nowrap"
                >
                  {getCurrentMessage()}
                </motion.p>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <Image
              src="/zombo-andrej.jpeg"
              alt="Andrej Srna"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg border-4 border-white"
            />
            {/* Dekoratívny Element */}
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-transparent bg-gradient-to-tr from-orange-400 to-yellow-600 animate-pulse opacity-20"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
