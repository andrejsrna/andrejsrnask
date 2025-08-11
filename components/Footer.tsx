'use client';

import { FaGithub, FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
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

export function Footer() {
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

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Andrej Srna. Všetky práva vyhradené.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
