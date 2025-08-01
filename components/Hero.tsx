'use client';
import Image from "next/image";
import { useState, Suspense } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

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

const stats = [
  {
    icon: Code,
    number: "10+",
    label: "Rokov skúseností"
  },
  {
    icon: Palette,
    number: "50+",
    label: "Projektov"
  },
  {
    icon: Zap,
    number: "100%",
    label: "Dedikácia"
  }
];

const HERO_DESCRIPTION = "Pomáham firmám rásť a vynikať v digitálnom svete. Zameriavam sa na riešenie vašich výziev a vytváram digitálne riešenia, ktoré skutočne pracujú pre váš úspech.";

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
        <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700/30 shadow-sm backdrop-blur-sm">
                <span className="text-blue-200 font-medium">Web Developer & Marketér</span>
                <ArrowRight className="w-4 h-4 ml-2 text-blue-300" />
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                Ahoj, som{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text">
                    Andrej Srna
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-red-500/20 -rotate-1" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl" suppressHydrationWarning>
                {HERO_DESCRIPTION.split('.').map((sentence, i) => (
                  <span key={i} className="inline-block">
                    {sentence.trim()}{i < HERO_DESCRIPTION.split('.').length - 1 ? '. ' : ''}
                  </span>
                ))}
              </p>

              {/* CTA Button */}
              <motion.div
                variants={buttonVariants}
                className="pt-4"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Primary CTA - Calendly */}
                  <a
                    href="https://calendly.com/ahoj-andrejsrna/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Rezervovať konzultáciu
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  {/* Secondary CTA - Contact */}
                  <div className="relative">
                    <button
                      onClick={handleClick}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 rounded-full transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm"
                    >
                      Kontaktujte ma
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    {clickCount >= 3 && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-blue-300 font-semibold whitespace-nowrap"
                      >
                        {getCurrentMessage()}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
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
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
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

export default Hero;
