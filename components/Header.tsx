'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-orange-600">
            Andrej Srna
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
              Domov
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">
              Blog
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">
              O mne
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-orange-600 transition-colors">
              Služby
            </Link>
            <Link href="#references" className="text-gray-600 hover:text-orange-600 transition-colors">
              Referencie
            </Link>
          </nav>

          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="#contact">Kontakt</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
} 