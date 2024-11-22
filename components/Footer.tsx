'use client';

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const footerVariants = {
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

export function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo alebo Názov */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-orange-600">Andrej Srna</h1>
          </div>
          
          {/* Navigačné Odkazy */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://andrejsrna.sk/#about" className="hover:text-orange-600 transition-colors duration-300">O mne</a>
            <a href="https://andrejsrna.sk/#services" className="hover:text-orange-600 transition-colors duration-300">Služby</a>
            <a href="https://andrejsrna.sk/#references" className="hover:text-orange-600 transition-colors duration-300">Portfólio</a>
            <a href="https://andrejsrna.sk/#contact" className="hover:text-orange-600 transition-colors duration-300">Kontakt</a>
          </div>
          
          {/* Sociálne Siete */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/andrej-srna-937351111/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-600 transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/andrejsrna" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-600 transition-colors duration-300">
              <FaGithub />
            </a>
            <a href="https://x.com/AndrejSrna" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-600 transition-colors duration-300">
              <FaTwitter />
            </a>
            {/* Pridajte ďalšie sociálne siete podľa potreby */}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Andrej Srna. Všetky práva vyhradené.
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;