'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const heroVariants: Variants = {
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

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div 
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6"
      >
        {/* Heading */}
        <motion.h1
          variants={heroVariants}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Ahoj, som <span className="text-blue-600">Andrej Srna</span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 1,
                delay: 0.3,
                ease: "easeOut"
              }
            }
          }}
          className="text-lg sm:text-xl text-gray-700 mb-6"
        >
          Som vášnivý webový vývojár so špecializáciou na moderné, 
          užívateľsky prívetivé webové aplikácie. <i>Vytvorme spolu niečo úžasné!</i>
        </motion.p>

        {/* Button */}
        <motion.div
          variants={buttonVariants}
          className="mb-8"
        >
          <Button asChild className="px-6 py-3 text-lg">
            <a href="#contact">Kontaktujte ma</a>
          </Button>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 1,
                delay: 0.8,
                ease: "easeOut"
              }
            }
          }}
          className="flex justify-center mx-auto max-w-xs sm:max-w-sm"
        >
          <Image
            src="/zombo-andrej.jpg"
            alt="Andrej Srna"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;