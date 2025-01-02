'use client';

import { motion, Variants } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { RiSpeedFill, RiSearchEyeLine, RiSmartphoneLine, RiShieldCheckLine } from "react-icons/ri";

const contentVariants: Variants = {
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

const skillsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

export function AboutMe() {
  const solutions = [
    {
      icon: RiSpeedFill,
      title: "Pomalý web",
      description: "Optimalizujem rýchlosť načítania vášho webu, aby ste nestrácali potenciálnych zákazníkov kvôli dlhému čakaniu."
    },
    {
      icon: RiSearchEyeLine,
      title: "Slabá viditeľnosť v Google",
      description: "Implementujem SEO best practices a technické vylepšenia pre lepšie umiestnenie vo výsledkoch vyhľadávania."
    },
    {
      icon: RiSmartphoneLine,
      title: "Nefunkčnosť na mobiloch",
      description: "Vytváram responzívne weby, ktoré fungujú bezchybne na všetkých zariadeniach - od mobilov až po veľké monitory."
    },
    {
      icon: RiShieldCheckLine,
      title: "Bezpečnostné riziká",
      description: "Zabezpečujem web proti hackerským útokom a implementujem najnovšie bezpečnostné štandardy."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-red-500 to-blue-600 text-transparent bg-clip-text">
              Riešim vaše problémy s webom
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Pomáham firmám premeniť ich web na efektívny nástroj pre získavanie zákazníkov
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <solution.icon className="text-3xl mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies section */}
        <motion.div 
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Technológie ktoré používam</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: FaHtml5, name: "HTML5", color: "text-red-500", bgColor: "bg-red-50" },
              { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", bgColor: "bg-blue-50" },
              { icon: FaJs, name: "JavaScript", color: "text-yellow-500", bgColor: "bg-yellow-50" },
              { icon: FaReact, name: "React", color: "text-blue-400", bgColor: "bg-blue-50" },
              { icon: FaNodeJs, name: "Node.js", color: "text-green-500", bgColor: "bg-green-50" },
              { icon: FaDatabase, name: "Databázy", color: "text-purple-500", bgColor: "bg-purple-50" }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-4"
              >
                <div className={`relative p-3 ${skill.bgColor} rounded-full mb-2`}>
                  <skill.icon className={`text-2xl ${skill.color}`} />
                </div>
                <span className="text-sm text-gray-600 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
