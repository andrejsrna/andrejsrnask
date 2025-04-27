'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  Check,
  Code,
  FileText,
  Layout,
  ShoppingCart,
  Sparkles,
} from 'lucide-react'

const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    const headerOffset = 64
    const elementPosition = contactSection.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Modern Abstract Background */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1),transparent_50%)]"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Cenník tvorby web stránok
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transparentné ceny pre rôzne typy projektov
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Vizitka */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full border-gray-800 hover:border-gray-700 relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <FileText className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Vizitka
                  </h3>
                  <div className="text-3xl font-bold mb-2 text-white">
                    199€ - 599€
                  </div>
                  <p className="text-gray-400">
                    Jednoduchá prezentácia pre živnostníkov a malé firmy
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>1-3 podstránky</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Responzívny dizajn</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Kontaktný formulár</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Základné SEO</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Administrácia obsahu</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToContact}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300"
                >
                  Nezáväzná konzultácia
                </button>
              </div>
            </Card>
          </motion.div>

          {/* Firemný web */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full border-gray-800 hover:border-gray-700 relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <Layout className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Firemný web
                  </h3>
                  <div className="text-3xl font-bold mb-2 text-white">
                    399€ - 1 499€
                  </div>
                  <p className="text-gray-400">
                    Komplexná prezentácia pre stredné a väčšie firmy
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>5-15 podstránok</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Moderný dizajn na mieru</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Administrácia obsahu (CMS)</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pokročilé SEO</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Blog/Aktuality</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToContact}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300"
                >
                  Nezáväzná konzultácia
                </button>
              </div>
            </Card>
          </motion.div>

          {/* E-shop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full relative border-gray-800 hover:border-gray-700 overflow-hidden group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <div className="absolute -top-2 -right-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-1 rotate-45 w-32 text-sm font-medium shadow-lg">
                  <div className="flex items-center justify-center gap-1">
                    <Sparkles className="w-10 h-4" />
                    Populárne
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <ShoppingCart className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    E-shop
                  </h3>
                  <div className="text-3xl font-bold mb-2 text-white">
                    699€ - 3 999€
                  </div>
                  <p className="text-gray-400">
                    Kompletné riešenie pre online predaj
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Neobmedzený počet produktov</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Platobné brány (Tatrapay, CardPay)</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dopravcovia (GLS, Packeta, Pošta)</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fakturačný systém</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Marketingové nástroje</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToContact}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300"
                >
                  Nezáväzná konzultácia
                </button>
              </div>
            </Card>
          </motion.div>

          {/* Portál/Aplikácia */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full border-gray-800 hover:border-gray-700 relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <Code className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Portál/Aplikácia
                  </h3>
                  <div className="text-3xl font-bold mb-2 text-white">
                    na mieru
                  </div>
                  <p className="text-gray-400">
                    Komplexné riešenia na mieru s vlastnou funkcionalitou
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Vývoj na mieru</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Používateľské účty a role</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integrácia s externými systémami</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analytika a reporty</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Škálovateľná architektúra</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToContact}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300"
                >
                  Nezáväzná konzultácia
                </button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-16"
        >
          <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border-gray-800">
            <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Doplnkové služby
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-3 text-gray-200 flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  Hosting a doména
                </h3>
                <p className="text-gray-400 mb-2">
                  Spoľahlivý hosting s 99.9% dostupnosťou
                </p>
                <p className="text-gray-300 font-semibold">od 8€/mesiac</p>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-gray-200 flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  Technická podpora
                </h3>
                <p className="text-gray-400 mb-2">
                  Pravidelné aktualizácie a údržba
                </p>
                <p className="text-gray-300 font-semibold">od 25€/mesiac</p>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-gray-200 flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  Programovanie na mieru
                </h3>
                <p className="text-gray-400 mb-2">Vývoj dodatočných funkcií</p>
                <p className="text-gray-300 font-semibold">45€/hodina</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Potrebujete individuálnu cenovú ponuku?
          </h2>
          <p className="text-gray-400 mb-8">
            Každý projekt je jedinečný. Kontaktujte ma pre vypracovanie presnej
            cenovej ponuky na mieru vašim potrebám.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-4 px-8 rounded-xl hover:from-gray-700 hover:to-gray-600 transform hover:scale-[1.02] transition-all duration-300"
          >
            Získať cenovú ponuku
          </button>
        </motion.div>
      </div>
    </section>
  )
}
