'use client';
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    
    const contactFormSection = document.getElementById('contact-form');
    if (contactFormSection) {
      const headerOffset = 64;
      const elementPosition = contactFormSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative py-24 -mt-16 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/[0.03] bg-[size:30px_30px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <motion.div 
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-6 z-10"
      >
        <div className="flex flex-col items-center justify-center text-center py-16">
          {/* Content */}
          <div className="w-full max-w-4xl">
            <div className="space-y-6 justify-center align-middle">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700/30 shadow-sm backdrop-blur-sm">
                <span className="text-blue-200 font-medium">Web Developer & Marketér</span>
                <ArrowRight className="w-4 h-4 ml-2 text-blue-300" />
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                Weby a marketing, ktoré prinášajú{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text">
                    výsledky
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-red-500/20 -rotate-1" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-blue-100">
                Pomáham firmám a značkám rásť online – od rýchlych webov až po SEO a výkonnostný marketing. Spolupracujem selektívne, aby mal každý projekt moju plnú pozornosť.
              </p>

              {/* CTA Button */}
              <motion.div
                variants={buttonVariants}
                className="pt-6"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-top justify-center">
                  {/* Primary CTA - Contact */}
                  <div className="relative">
                    <button
                      onClick={handleClick}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    >
                      Získajte mini audit zdarma
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-base text-blue-100 mt-3 text-center font-medium leading-relaxed">
                      Zistíte, kde váš web stráca zákazníkov.
                    </p>
                    {clickCount >= 3 && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-blue-300 font-semibold whitespace-nowrap"
                      >
                        {getCurrentMessage()}
                      </motion.p>
                    )}
                  </div>
                  
                  {/* Secondary CTA */}
                  <div>
                    <a
                      href="#references"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg border border-white/20 text-white rounded-full transition-all duration-300 hover:bg-white/10"
                    >
                      Pozrieť projekty
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>


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

export default Hero;
