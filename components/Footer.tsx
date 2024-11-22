'use client';

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from 'next/link';

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
          
          {/* Logo alebo Názov s odkazom na homepage */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-orange-600">Andrej Srna</Link>
          </div>
          
          {/* Navigačné Odkazy */}
          <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
            <Link href="#about" className="hover:text-orange-600 transition-colors duration-300">O mne</Link>
            <Link href="#services" className="hover:text-orange-600 transition-colors duration-300">Služby</Link>
            <Link href="#references" className="hover:text-orange-600 transition-colors duration-300">Portfólio</Link>
            <Link href="#contact" className="hover:text-orange-600 transition-colors duration-300">Kontakt</Link>
          </div>
          
          {/* Sociálne Siete */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/andrej-srna-937351111/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-600 transition-colors duration-300" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/andrejsrna" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-600 transition-colors duration-300" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://x.com/AndrejSrna" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-600 transition-colors duration-300" aria-label="Twitter">
              <FaTwitter />
            </a>
            {/* Pridajte ďalšie sociálne siete podľa potreby */}
          </div>
        </div>
        

        <details className="mt-8">
          <summary className="cursor-pointer text-sm font-semibold mb-4">Ďalšie odkazy</summary>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link href="/tvorba-web-stranok-pezinok" className="hover:text-orange-600 transition-colors duration-300">Tvorba web stránok Pezinok</Link>
            </li>
          </ul>
        </details>
        
        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Andrej Srna. Všetky práva vyhradené.
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
