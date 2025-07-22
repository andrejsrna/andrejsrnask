'use client';

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Target, Search, ShoppingCart, Zap, BarChart3, Globe, Megaphone, Settings, FileText, Mail, ChevronDown, Quote } from "lucide-react";
import Contact from "@/components/Contact";
import Image from "next/image";

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
    icon: Users,
    number: "3x",
    label: "Viac zákazníkov"
  },
  {
    icon: TrendingUp,
    number: "150%",
    label: "Rast tržieb"
  },
  {
    icon: Target,
    number: "24/7",
    label: "Automatizácia"
  }
];

const problems = [
  {
    icon: Search,
    title: "Nízka návštevnosť z Googlu",
    description: "Vaša stránka sa nezobrazuje vo výsledkoch vyhľadávania, takže potenciálni zákazníci vás nemôžu nájsť."
  },
  {
    icon: ShoppingCart,
    title: "Web, ktorý nepredáva",
    description: "Návštevníci prichádzajú na vašu stránku, ale nekonvertujú na zákazníkov alebo klientov."
  },
  {
    icon: Zap,
    title: "Chaotická online prezentácia",
    description: "Nekonzistentná komunikácia na rôznych platformách mätie zákazníkov a oslabuje vašu značku."
  },
  {
    icon: BarChart3,
    title: "Slabá stratégia alebo žiadna",
    description: "Bez jasnej stratégie míňate peniaze na neefektívne aktivity, ktoré neprinášajú výsledky."
  }
];

const solutions = [
  {
    icon: Globe,
    title: "Weby, ktoré predávajú",
    description: "Vytváram webové stránky zamerané na konverzie, ktoré premieňajú návštevníkov na skutočných zákazníkov."
  },
  {
    icon: Megaphone,
    title: "Zmysluplný marketing bez bullshitov",
    description: "Stratégie založené na dátach a overených metódach, nie na módnych trendoch bez výsledkov."
  },
  {
    icon: Settings,
    title: "Automatizácia, ktorá šetrí čas",
    description: "Nastavím systémy, ktoré pracujú za vás 24/7 a oslobodzujú váš čas pre dôležité veci."
  },
  {
    icon: FileText,
    title: "Zrozumiteľné reporty a čísla",
    description: "Jasné metriky a pravidelné reporty, ktoré vám ukážu skutočný dopad na váš biznis."
  }
];

const caseStudies = [
  {
    logo: "/grilovaneprasiatko.jpeg",
    company: "Grilované Prasiatko",
    result: "+150% online viditeľnosť",
    metric: "za 4 mesiace",
    description: "Kompletná online prezentácia pre rodinný podnik s lokálnym SEO."
  },
  {
    logo: "/allsoftcorp.jpeg", 
    company: "AllSoft Corp",
    result: "+85% lead generation",
    metric: "optimalizácia webu",
    description: "Redesign firemnej stránky s dôrazom na UX/UI a lead generation pre IT spoločnosť."
  },
  {
    logo: "/ttsk.jpg",
    company: "TTSK",
    result: "+40% organická návštevnosť", 
    metric: "za 6 mesiacov",
    description: "SEO optimalizácia a content marketing pre župný úrad s dôrazom na občiansku informovanosť."
  },
  {
    logo: "/smmt.jpg",
    company: "SMMT",
    result: "+200% organická návštevnosť",
    metric: "marketing automatizácia", 
    description: "Nastavenie kompletného marketing funnel-u pre vzdelávaciu inštitúciu s automatizovanými kampañami."
  }
];

const testimonials = [
  {
    quote: "Andrej nám výrazne zvýšil konverzie na webe. Za 3 mesiace sme mali o 40% viac objednávok.",
    author: "Michal Kováč",
    company: "E-shop Elektro"
  },
  {
    quote: "Konečne máme jasno v tom, čo funguje a čo nie. Andrejove reporty sú zrozumiteľné a užitočné.",
    author: "Jana Nováková", 
    company: "Fitness Centrum"
  },
  {
    quote: "Automatizácia, ktorú nastavil, nám šetrí 10 hodín týždenne. Konečne sa môžeme sústrediť na biznis.",
    author: "Peter Horváth",
    company: "Konzultačná firma"
  }
];

const faqs = [
  {
    question: "Koľko stojí spolupráca?",
    answer: "Ceny sa líšia podľa rozsahu projektu. Jednoduchá optimalizácia webu začína od 500€, komplexné riešenia s marketingom od 1500€ mesačne. Vždy navrhneme riešenie podľa vášho rozpočtu a potrieb."
  },
  {
    question: "Čo všetko budete potrebovať odo mňa?",
    answer: "Hlavne váš čas na úvodné stretnutie (1-2 hodiny) a prístup k vašim systémom. Všetko ostatné vyriešim ja - od analýzy cez implementáciu až po reportovanie. Budeme v pravidelnom kontakte, ale vaša každodenná práca nebude narušená."
  },
  {
    question: "Ako rýchlo uvidím výsledky?",
    answer: "Závisí to od typu riešenia. Optimalizácie webu prinášajú výsledky do 2-4 týždňov. SEO a content marketing potrebuje 3-6 mesiacov. Marketing automatizácia funguje ihneď po nastavení. Vždy nastavíme realistické očakávania a priebežne monitorujeme pokrok."
  }
];

export default function ZiskatViacZakaznikov() {
  return (
    <div>
      {/* Hero Section */}
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
          className="relative container mx-auto px-6 text-center z-10"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700/30 shadow-sm mb-6 backdrop-blur-sm">
              <span className="text-blue-200 font-medium">Stratégia pre váš rast</span>
              <ArrowRight className="w-4 h-4 ml-2 text-blue-300" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Máte plán, ako{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  získať viac zákazníkov?
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/20 -rotate-1" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Pomáham malým a stredným firmám získať viac klientov cez{" "}
              <span className="font-semibold text-blue-300">web, marketing a automatizáciu</span>.
            </p>

            <motion.div
              variants={buttonVariants}
              className="mb-16"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-lg px-8 py-6">
                <a href="https://calendly.com/ahoj-andrejsrna/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Rezervujte si bezplatnú konzultáciu
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
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

      {/* Problem Identification Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">
                Prečo sa vašim stránkam darí menej, než by mohlo?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
                Spolu môžeme zmeniť hru
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Pripravený začať?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Nemusíte riešiť všetko naraz. Začneme spolu s jednou oblasťou a postupne 
                vybudujeme systém, ktorý vám bude skutočne fungovať.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-lg">
                <a href="https://calendly.com/ahoj-andrejsrna/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Dohodnime si stretnutie
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
                Reálne výsledky mojich klientov
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nie sú to len sľuby - toto sú skutočné čísla a výsledky, ktoré som dosiahol pre svojich klientov
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shadow-sm">
                      <Image
                        src={study.logo}
                        alt={`${study.company} logo`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.company}</h3>
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {study.result}
                      </div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {study.metric}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Spokojných klientov</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">120%</div>
                <div className="text-sm text-gray-600">Priemerný rast</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Podpora</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Úspešnosť projektov</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                Kto som a prečo to robím
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/zombo-andrej.webp"
                    alt="Andrej Srna - Web Developer a Marketér"
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20"></div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Som Andrej Srna
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Web developer, marketér a človek, čo vie prepojiť{" "}
                    <span className="font-semibold text-purple-600">dizajn, vývoj aj výsledky</span>.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Už viac ako 10 rokov pomáham firmám rásť online. Nie som len programátor 
                    ani len marketér - som niekto, kto rozumie celému procesu od nápadu až po 
                    merateľné výsledky. Preto viem vytvoriť riešenia, ktoré skutočne fungujú.
                  </p>
                  
                  {/* Key Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700">10+ rokov skúseností</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">50+ úspešných projektov</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Technológie + Marketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">Zameranie na výsledky</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href="/cv" 
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300"
                    >
                      Viac o mne a mojej práci
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
                Dôvera & najčastejšie otázky
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
              Pozrite si, čo hovoria klienti o spolupráci so mnou
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Často kladené otázky
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-orange-300 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h4 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h4>
                    <div className="flex-shrink-0">
                      <ChevronDown className="w-5 h-5 text-gray-400 transform transition-transform duration-300 group-open:rotate-180" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <div className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Získaj konkrétne návrhy pre svoj biznis
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Nemusíš čakať na zázrak. Dohodnime si 30-minútové stretnutie a ukážem ti, 
              čo konkrétne môžeš zmeniť už zajtra.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 max-w-md"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Bezplatná konzultácia
                  </h3>
                  <p className="text-blue-100 mb-6">
                    30 minút, kde sa dozvieš konkrétne kroky pre svoj biznis
                  </p>
                  <a
                    href="https://calendly.com/ahoj-andrejsrna/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Rezervovať konzultáciu
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="flex items-center gap-4 lg:flex-col">
                <div className="h-px w-16 lg:h-16 lg:w-px bg-white/30"></div>
                <span className="text-white/70 font-medium">alebo</span>
                <div className="h-px w-16 lg:h-16 lg:w-px bg-white/30"></div>
              </div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 max-w-md"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Napíš mi priamo
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Rád ti odpoviem na otázky a pošlem užitočné rady
                  </p>
                  <a
                    href="mailto:ahoj@andrejsrna.sk"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/20 text-white hover:bg-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/30 hover:border-white/50"
                  >
                    ahoj@andrejsrna.sk
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">✅</div>
                <div className="text-sm text-blue-100">Bez zbytočného predaja</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">⚡</div>
                <div className="text-sm text-blue-100">Konkrétne riešenia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">🎯</div>
                <div className="text-sm text-blue-100">Zamerané na výsledky</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
} 