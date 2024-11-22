'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const aboutMeVariants: Variants = {
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
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">O mne</h2>
        <motion.div 
          variants={aboutMeVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center"
        >
          {/* Fotografia */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <Image
              src="/about-me.jpeg" // Uistite sa, že obrázok existuje v priečinku public
              alt="O mne"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Textový obsah */}
          <div className="md:w-1/2 w-full md:ml-12">
            <h3 className="text-2xl font-semibold mb-4">Ahoj, som Andrej Srna</h3>
            <p className="text-gray-700 mb-6">
              Som webový vývojár so skúsenosťami v tvorbe moderných a responzívnych webových aplikácií. Mojou vášňou je vytváranie užívateľsky prívetivých a esteticky príťažlivých riešení, ktoré prinášajú hodnotu používateľom a klientom.
            </p>
            <p className="text-gray-700 mb-6">
              V priebehu svojej kariéry som pracoval na rôznych projektoch, od jednoduchých webových stránok až po komplexné aplikácie, čo mi umožnilo získať hlboké znalosti v rôznych technológiách a nástrojoch.
            </p>
            <a href="/cv-andrej-srna.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300">
              Stiahnuť životopis
            </a>
          </div>
        </motion.div>

        {/* Zručnosti */}
        <motion.div 
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Moje zručnosti</h3>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center m-4">
              <FaHtml5 className="text-orange-600 text-4xl mb-2" />
              <span className="text-gray-700">HTML5</span>
            </div>
            <div className="flex flex-col items-center m-4">
              <FaCss3Alt className="text-blue-600 text-4xl mb-2" />
              <span className="text-gray-700">CSS3</span>
            </div>
            <div className="flex flex-col items-center m-4">
              <FaJs className="text-yellow-500 text-4xl mb-2" />
              <span className="text-gray-700">JavaScript</span>
            </div>
            <div className="flex flex-col items-center m-4">
              <FaReact className="text-blue-400 text-4xl mb-2" />
              <span className="text-gray-700">React</span>
            </div>
            <div className="flex flex-col items-center m-4">
              <FaNodeJs className="text-green-600 text-4xl mb-2" />
              <span className="text-gray-700">Node.js</span>
            </div>
            <div className="flex flex-col items-center m-4">
              <FaDatabase className="text-purple-600 text-4xl mb-2" />
              <span className="text-gray-700">Databázy</span>
            </div>
            {/* Pridajte ďalšie zručnosti podľa potreby */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
