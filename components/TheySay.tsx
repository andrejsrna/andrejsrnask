'use client';

import { motion, Variants } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialsData = [
  {
    quote: "Andrejovi sme zverili tvorbu nášho nového firemného webu. I napriek vysokým požiadavkám sa s nimi dokázal popasovať a vytvoril pekný a funkčný web. Je otvorený novým veciam a nebojí sa výziev. Výborne sa osvedčil a radi s ním budeme spolupracovať aj v budúcnosti.",
    author: "Peter Nádler"
  },
  {
    quote: "Mal som dlho problém nastaviť web, keďže som mal komplikovanú šablónu, tak som poprosil Andreja o pomoc a musím priznať, že hneď reagoval ochotne a veľmi rád pomohol... rýchlo a bez problémov opravil to, čo by mne trvalo x hodín, tak Andrej to opravil do 10 minút, keď som neprehľadal. Musím a chcem takúto osobu odporučiť.",
    author: "Jakub Bačo"
  },
  {
    quote: "Andrej nám prenášal a doladil veľmi zložitý portál, ktorý bol robený na objednávku. Prácu odviedol výborne a my sme veľmi spokojní. Určite odporúčame.",
    author: "Jozef Krkoš"
  }
];

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const testimonialVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden">
      {/* Modern Abstract Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
            Hovoria o mne
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prečítajte si, čo o mojej práci hovoria klienti
          </p>
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={testimonialVariants}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                <div className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <FaQuoteLeft className="text-blue-600 text-xl" />
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-gray-700 mb-6 relative z-10 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center justify-end">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ml-auto mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
