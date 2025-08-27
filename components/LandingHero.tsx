'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function LandingHero() {
  return (
    <section className="relative py-24 -mt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/[0.03] bg-[size:30px_30px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <motion.div 
        variants={landingHeroVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10"
      >
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/50 to-red-900/50 border border-blue-700/30 shadow-sm mb-6 backdrop-blur-sm">
            <span className="text-blue-200 font-medium">Webové stránky pre váš biznis</span>
            <ArrowRight className="w-4 h-4 ml-2 text-blue-300" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Moderné weby pre firmy v{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text">
                Pezinku a okolí
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/20 -rotate-1" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Navrhujem a optimalizujem weby, ktoré nielen dobre vyzerajú, ale aj{" "}
            <span className="font-semibold text-blue-300">prinášajú zákazníkov</span>.{" "}
            Každému projektu sa venujem osobne a naplno.
          </p>

          {/* CTA Buttons */}
          <motion.div
            variants={landingButtonVariants}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-lg">
                <a href="#contact-form" className="flex items-center gap-2">
                  Poďme prebrať váš projekt
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-blue-700/30 text-white hover:bg-blue-900/50 hover:text-white transition-all duration-300 text-lg backdrop-blur-sm">
                <a href="/tvorba-web-stranok-cennik">Pozrieť cenník</a>
              </Button>
            </div>
            <p className="text-base text-blue-100 text-center sm:text-left font-medium leading-relaxed">
              Spoločne nájdeme cestu k lepšiemu webu.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-blue-200">Spokojných klientov</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-blue-200">Zelené CWV</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24 h</div>
              <div className="text-sm text-blue-200">Odpoveď</div>
            </div>
          </div>

          <p className="mt-6 text-sm text-blue-200">
            Externé spolupráce riešim mimo pracovného času, v súlade so zmluvnými podmienkami.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-red-400 rounded-2xl rotate-6 opacity-20" />
            <Image
              src="/pezinok.jpeg"
              alt="Tvorba web stránok Pezinok"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-2xl transform -rotate-3 transition-transform duration-300 hover:rotate-0"
            />
            {/* Decorative Elements */}
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-red-400 rounded-xl rotate-12 opacity-40 blur-lg" />
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-gradient-to-br from-red-400 to-blue-400 rounded-lg -rotate-12 opacity-40 blur-lg" />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50L48 45.8333C96 41.6667 192 33.3333 288 29.1667C384 25 480 25 576 33.3333C672 41.6667 768 58.3333 864 62.5C960 66.6667 1056 58.3333 1152 45.8333C1248 33.3333 1344 16.6667 1392 8.33333L1440 0V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" 
                fill="white" fillOpacity="0.05"/>
        </svg>
      </div>
    </section>
  );
}

export default LandingHero;