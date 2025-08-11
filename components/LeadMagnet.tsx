'use client';

import { ArrowRight } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h2 className="text-3xl font-bold mb-3">Bezplatný mini audit webu</h2>
          <p className="text-gray-600 mb-6">PDF s prioritnými odporúčaniami do 24 hodín. Externé spolupráce riešim mimo pracovného času.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:ahoj@andrejsrna.sk?subject=Bezplatný%20mini%20audit%20webu&body=URL%20vá%C5%A1ho%20webu:%20"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Získať mini audit
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              Nezáväzná konzultácia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


