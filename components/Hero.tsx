'use client';
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
    
    // Smooth scroll to contact section with header offset
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 64;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative py-20 -mt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
      
      {/* Modern Abstract Background Shapes */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        
        {/* Geometric shapes */}
        <svg className="absolute top-1/4 right-1/4 w-32 h-32 text-blue-300 opacity-20 animate-spin-slow" viewBox="0 0 100 100">
          <polygon points="50,0 100,86.6 0,86.6" fill="currentColor"/>
        </svg>
        
        {/* Decorative lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
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
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold">
              <span className="text-white">Ahoj, som </span>
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                Andrej Srna
              </span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed">
              Som vášnivý webový vývojár so špecializáciou na moderné, 
              užívateľsky prívetivé webové aplikácie. <i>Vytvorme spolu niečo úžasné!</i>
            </p>

            {/* Single Interactive Button */}
            <motion.div
              variants={buttonVariants}
              className="pt-4"
            >
              <div className="relative inline-block">
                <motion.button
                  variants={crazyButtonVariants}
                  animate={isCrazy ? "crazy" : "normal"}
                  onClick={handleCrazyClick}
                  onAnimationComplete={() => setIsCrazy(false)}
                  className="px-8 py-4 text-lg bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontaktujte ma
                </motion.button>
                {clickCount >= 3 && (
                  <motion.p
                    key={getCurrentMessage()}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-blue-300 font-semibold whitespace-nowrap"
                  >
                    {getCurrentMessage()}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-full animate-spin-slow opacity-20"></div>
            <Image
              src="/zombo-andrej.jpeg"
              alt="Andrej Srna"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl border-4 border-white/10 relative z-10"
            />
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
