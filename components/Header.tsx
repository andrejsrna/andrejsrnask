'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from 'next/navigation';

interface SubMenuItem {
  href: string;
  label: string;
}

interface BaseMenuItem {
  label: string;
}

interface LinkMenuItem extends BaseMenuItem {
  href: string;
  submenu?: never;
}

interface SubmenuItem extends BaseMenuItem {
  href?: never;
  submenu: SubMenuItem[];
}

type MenuItem = LinkMenuItem | SubmenuItem;

const isSubmenuItem = (item: MenuItem): item is SubmenuItem => {
  return 'submenu' in item;
};

const menuItems: MenuItem[] = [
  { href: "/#services", label: "Služby" },
  { href: "/#references", label: "Portfólio" },
  { href: "/tvorba-web-stranok-cennik", label: "Cenník" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "O mne" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [submenuTimeout, setSubmenuTimeout] = useState<NodeJS.Timeout | null>(null);
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

  // Close mobile menu and submenu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (submenuTimeout) {
        clearTimeout(submenuTimeout);
      }
    };
  }, [submenuTimeout]);

  const handleSubmenuEnter = (item: MenuItem) => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
      setSubmenuTimeout(null);
    }
    if (isSubmenuItem(item)) {
      setActiveSubmenu(item.label);
    }
  };

  const handleSubmenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300); // 300ms delay before hiding
    setSubmenuTimeout(timeout);
  };

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
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      if (window.innerWidth < 768) {
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
    
    setIsOpen(false);
    setActiveSubmenu(null);
    
    if (href?.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');

      if (pathname !== '/') {
        sessionStorage.setItem('scrollToSection', targetId);
        window.location.href = '/';
        return;
      }

      scrollToElement(targetId);
    }
  };

  // Handle scroll to section after page load (for redirects from other pages)
  useEffect(() => {
    const targetSection = sessionStorage.getItem('scrollToSection');
    if (targetSection && pathname === '/') {
      sessionStorage.removeItem('scrollToSection');
      
      const timer = setTimeout(() => {
        scrollToElement(targetSection);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || needsSolidBg || activeSubmenu ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
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
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => handleSubmenuEnter(item)}
                onMouseLeave={handleSubmenuLeave}
              >
                {isSubmenuItem(item) ? (
                  <>
                    <button 
                      className="px-4 py-2 text-white hover:text-blue-300 rounded-lg transition-colors duration-300 flex items-center gap-1 group"
                      onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeSubmenu === item.label ? 'rotate-180' : ''} group-hover:text-blue-300`} />
                    </button>

                    <AnimatePresence>
                      {activeSubmenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2"
                        >
                          {/* Invisible extension to prevent gap */}
                          <div className="absolute h-2 -top-2 left-0 right-0 bg-transparent" />
                          
                          <div className="py-2 bg-gray-900/95 backdrop-blur-lg rounded-lg border border-gray-800 shadow-xl min-w-[240px] relative">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                            {/* Gradient border effect */}
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 rounded-b" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="px-4 py-2 text-white hover:text-blue-300 rounded-lg transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )}
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
                Nezáväzná konzultácia
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
                  <div key={isSubmenuItem(item) ? item.label : item.href}>
                    {isSubmenuItem(item) ? (
                      <>
                        <button
                          onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-colors duration-300"
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeSubmenu === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-2 mt-2"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-gray-400 hover:text-white rounded-lg transition-colors duration-300"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div>
                  <Link
                    href="/#contact"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                  >
                    Nezáväzná konzultácia
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
