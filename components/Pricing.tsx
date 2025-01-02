'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";

const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
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

export default function Pricing() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      {/* Modern Abstract Background */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1),transparent_50%)]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Cenník tvorby web stránok
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexibilné možnosti platby pre váš nový web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* One-time Payment */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full border-gray-800 hover:border-gray-700 relative group">
              {/* Glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Jednorazová platba
                  </h3>
                  <div className="text-5xl font-bold mb-4 text-white">od 599€</div>
                  <p className="text-gray-400">Kompletný web na mieru s jednorazovou platbou</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Responzívny dizajn</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>SEO optimalizácia</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Kontaktný formulár</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Vlastníctvo webu</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Hosting prvý rok v cene</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <span>Pravidelné aktualizácie</span>
                  </li>
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 relative group"
                >
                  <span className="relative z-10">Vypočítať cenu</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </button>
              </div>
            </Card>
          </motion.div>

          {/* Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full relative border-gray-800 hover:border-gray-700 overflow-hidden group">
              {/* Glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <div className="absolute -top-2 -right-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-1 rotate-45 w-32 text-sm font-medium shadow-lg">
                  <div className="flex items-center justify-center gap-1">
                    <Sparkles className="w-10 h-4" />
                    Odporúčané
                  </div>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Mesačné predplatné
                  </h3>
                  <div className="text-5xl font-bold mb-4 text-white">od 25€<span className="text-2xl font-normal text-gray-400">/mesiac</span></div>
                  <p className="text-gray-400">Nulové počiatočné náklady a pravidelná údržba</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Žiadne počiatočné náklady</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Hosting v cene</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Pravidelné aktualizácie</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Možnosť dodatočných úprav</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Technická podpora</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Viazanosť na 2 roky</span>
                  </li>
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 relative group"
                >
                  <span className="relative z-10">Mám záujem</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16"
        >
          <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800">
            <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Prečo zvoliť mesačné predplatné?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold mb-2 text-gray-200">Žiadne počiatočné náklady</h3>
                <p className="text-gray-400">Začnite s novým webom bez vysokej počiatočnej investície.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold mb-2 text-gray-200">Pravidelné aktualizácie</h3>
                <p className="text-gray-400">Váš web bude vždy aktuálny a zabezpečený.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold mb-2 text-gray-200">Flexibilita</h3>
                <p className="text-gray-400">Možnosť kedykoľvek upraviť alebo rozšíriť váš web.</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Potrebujete poradiť s výberom?
          </h2>
          <p className="text-gray-400 mb-8">
            Rád vám vysvetlím výhody jednotlivých možností a pomôžem vybrať najlepšie riešenie pre váš projekt.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-4 px-8 rounded-xl hover:from-gray-700 hover:to-gray-600 transform hover:scale-[1.02] transition-all duration-300 relative group"
          >
            <span className="relative z-10">Nezáväzná konzultácia</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
} 