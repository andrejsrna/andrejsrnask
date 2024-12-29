'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Andrej Srna
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Otvoriť menu</span>
            <svg
              className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Domov
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-gray-900">
              Služby
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-gray-900">
              O mne
            </Link>
            <Link href="/#references" className="text-gray-700 hover:text-gray-900">
              Referencie
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/tvorba-web-stranok-cennik" className="text-gray-700 hover:text-gray-900">
              Cenník
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-gray-900">
              Kontakt
            </Link>
          </nav>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden py-2`}>
          <div className="flex flex-col space-y-2">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Domov
            </Link>
            <Link 
              href="/#services" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Služby
            </Link>
            <Link 
              href="/#about" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              O mne
            </Link>
            <Link 
              href="/#references" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Referencie
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/tvorba-web-stranok-cennik" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Cenník
            </Link>
            <Link 
              href="/#contact" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 
