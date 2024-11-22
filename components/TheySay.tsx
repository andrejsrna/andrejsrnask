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
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Hovoria o mne</h2>
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0"
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={testimonialVariants}
              className="bg-white p-6 rounded-lg shadow-lg flex-1"
            >
              <FaQuoteLeft className="text-orange-600 text-2xl mb-4" />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-900 font-semibold text-right">- {testimonial.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
