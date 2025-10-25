'use client';

import { FaGithub, FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/andrejsrna",
    label: "GitHub"
  },
  {
    icon: FaTwitter,
    href: "https://x.com/AndrejSrna",
    label: "X (Twitter)"
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UCtjCCncCi8XQjKiqNk5c_mg/",
    label: "YouTube"
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/andrej.srna",
    label: "Instagram"
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@andrejsrna",
    label: "TikTok"
  }
];

const pageLinks = [
  { href: "/cv", label: "CV" },
  { href: "/tvorba-web-stranok-cennik", label: "Cenník" },
  { href: "/tvorba-web-stranok-pezinok", label: "Weby Pezinok" },
  { href: "/wordpress-vyvoj", label: "WordPress vývoj" },
  { href: "/woocommerce-wordpress", label: "WooCommerce" },
  { href: "/wordpress-seo-audit", label: "SEO audit" },
  { href: "/ziskat-viac-zakaznikov", label: "Získať viac zákazníkov" },
];

export function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <motion.footer 
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 py-16 overflow-hidden"
    >
      {/* Modern Abstract Background */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1),transparent_50%)]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Decorative shapes */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-xs text-gray-500 mb-6">
            Táto stránka je osobné portfólio. Názory sú moje vlastné. Externé spolupráce riešim výhradne mimo pracovného času a v súlade so zmluvnými podmienkami.
          </div>
          {/* Social Links */}
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700/50 transition-colors duration-300 group-hover:border-gray-600/50">
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
                </div>
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Hamburger Menu */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 text-xs text-gray-500 hover:text-gray-300 transition-colors duration-300 border border-gray-700/50 rounded-full hover:border-gray-600/50"
              aria-label="Otvoriť menu stránok"
            >
              <svg 
                className={`w-3 h-3 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>Stránky</span>
            </button>
          </div>

          {/* Full Width Modal */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                ref={menuRef}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                  <h2 className="text-xl font-semibold text-white">Navigácia stránok</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-full hover:bg-gray-800/50"
                    aria-label="Zavrieť menu"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 overflow-y-auto max-h-[60vh]">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pageLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group block p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/30 hover:border-gray-600/50 rounded-lg transition-all duration-200 hover:scale-[1.02]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors duration-200"></div>
                          <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-200">
                            {link.label}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-700/50 bg-gray-800/30">
                  <p className="text-center text-sm text-gray-400">
                    Kliknite na stránku alebo mimo modalu pre zatvorenie
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} Andrej Srna. Všetky práva vyhradené.
              </p>
              <div className="flex items-center gap-4">
                <span>•</span>
                <Link 
                  href="/ochrana-osobnych-udajov"
                  className="hover:text-gray-300 transition-colors duration-300 underline"
                >
                  Ochrana osobných údajov
                </Link>
                <span>•</span>
                <a 
                  href="https://synthbit.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-300 underline"
                >
                  Synthbit
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
