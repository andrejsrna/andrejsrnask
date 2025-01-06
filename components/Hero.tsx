'use client';
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState, Suspense } from "react";

// Dynamically import Framer Motion components
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
});

// Import variants
import { 
  containerVariants,
  textVariants,
  imageVariants,
  buttonVariants,
  crazyButtonVariants 
} from '../lib/animations';

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
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center -mt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
      
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
      
      <MotionDiv 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10"
      >
        {/* Text Content */}
        <MotionDiv
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
            <MotionDiv
              variants={buttonVariants}
              className="pt-4"
            >
              <div className="relative inline-block">
                <MotionDiv
                  variants={crazyButtonVariants}
                  animate={isCrazy ? "crazy" : "normal"}
                  onClick={handleCrazyClick}
                  onAnimationComplete={() => setIsCrazy(false)}
                  className="px-8 py-4 text-lg bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontaktujte ma
                </MotionDiv>
                {clickCount >= 3 && (
                  <MotionDiv
                    key={getCurrentMessage()}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-blue-300 font-semibold whitespace-nowrap"
                  >
                    {getCurrentMessage()}
                  </MotionDiv>
                )}
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>

        {/* Image */}
        <MotionDiv
          variants={imageVariants}
          className="hidden md:flex w-full md:w-1/2 justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Suspense fallback={
              <div className="w-full h-full rounded-full bg-gray-800 content-placeholder" />
            }>
              <Image
                src="/zombo-andrej.webp"
                alt="Andrej Srna"
                fill
                priority={true}
                loading="eager"
                fetchPriority="high"
                className="rounded-full shadow-2xl border-4 border-white/10 relative z-10 object-cover"
                sizes="(max-width: 768px) 256px, 320px"
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,..."
              />
            </Suspense>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default Hero;
