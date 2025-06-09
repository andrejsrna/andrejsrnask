'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: "/#about", label: "O mne" },
  { href: "/#services", label: "Služby" },
  { href: "/#references", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on a page that needs a solid header background
  const needsSolidBg = pathname === '/tvorba-web-stranok-cennik' || pathname === '/blog' || /^\/blog\/.*/.test(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToElement = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Increased for mobile
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      // For mobile devices, use a more reliable scrolling method
      if (window.innerWidth < 768) {
        // Use setTimeout to ensure smooth scrolling on mobile
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    // Always close mobile menu when any link is clicked
    setIsOpen(false);
    
    if (href?.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');

      if (pathname !== '/') {
        // If not on homepage, navigate to homepage with hash
        // Store the target in sessionStorage for after redirect
        sessionStorage.setItem('scrollToSection', targetId);
        window.location.href = '/';
        return;
      }

      // Scroll to element immediately if on homepage
      scrollToElement(targetId);
    }
    // For regular links (like /blog), let the default Link behavior handle it
  };

  // Handle scroll to section after page load (for redirects from other pages)
  useEffect(() => {
    const targetSection = sessionStorage.getItem('scrollToSection');
    if (targetSection && pathname === '/') {
      // Clear the stored section
      sessionStorage.removeItem('scrollToSection');
      
      // Wait for page to fully load, then scroll
      const timer = setTimeout(() => {
        scrollToElement(targetSection);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || needsSolidBg ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Andrej Srna
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="px-4 py-2 text-white hover:text-blue-300 rounded-lg transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: menuItems.length * 0.1 }}
            >
              <Link
                href="/#contact"
                onClick={handleLinkClick}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Kontakt
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden relative w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-700/50 transition-colors duration-300 hover:border-gray-600/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Zavrieť menu" : "Otvoriť menu"}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5 text-gray-300" aria-hidden="true" /> : <Menu className="w-5 h-5 text-gray-300" aria-hidden="true" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu */}
              <motion.div
                id="mobile-menu"
                role="navigation"
                aria-label="Mobilné menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg rounded-b-2xl border-t border-gray-800 relative z-50"
              >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
                <div>
                  <Link
                    href="/#contact"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 
