'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mail, Phone, MapPin, Globe, ExternalLink } from "lucide-react";

const contactVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ContactItem = ({ icon: Icon, label, value, link }: { icon: React.ComponentType<{ className?: string }>, label: string, value: string, link?: string }) => (
  <div className="flex items-start space-x-3 mb-6">
    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-blue-600" />
    </div>
    <div>
      <div className="text-sm font-medium text-gray-500 mb-1">{label}</div>
      {link ? (
        <a 
          href={link} 
          className="text-gray-900 hover:text-blue-600 transition-colors duration-300 flex items-center gap-1 group"
        >
          {value}
          <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </a>
      ) : (
        <div className="text-gray-900">{value}</div>
      )}
    </div>
  </div>
);

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Modern Abstract Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
            Začnime spoluprácu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Som tu pre vás, aby som vašim nápadom dal digitálnu podobu. Poďme spolu vytvoriť niečo výnimočné.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Photo Section */}
            <div className="relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image
                  src="/Srna.jpg"
                  alt="Andrej Srna - Webový vývojár"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/50 text-center">
                  <p className="text-lg font-semibold text-gray-900">Andrej Srna</p>
                  <p className="text-sm text-gray-600">Webový vývojár & konzultant</p>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-gray-200/50">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-2xl bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
                  Kontaktné informácie
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Spojte sa so mnou
                  </h3>
                  <ContactItem
                    icon={Phone}
                    label="Telefón"
                    value="+421 914 230 321"
                    link="tel:+421914230321"
                  />
                  <ContactItem
                    icon={Mail}
                    label="Email"
                    value="ahoj@andrejsrna.sk"
                    link="mailto:ahoj@andrejsrna.sk"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Fakturačné údaje
                  </h3>
                  <ContactItem
                    icon={Building2}
                    label="Názov spoločnosti"
                    value="Enroll Limited s.r.o."
                  />
                  <ContactItem
                    icon={MapPin}
                    label="Sídlo"
                    value="1. mája 33 900 84 Báhoň"
                  />
                  <ContactItem
                    icon={Globe}
                    label="IČO"
                    value="54072638"
                  />
                  <ContactItem
                    icon={Globe}
                    label="DIČ"
                    value="2121638728"
                  />
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Bankové spojenie</h4>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700 flex justify-between">
                        <span className="text-gray-500">IBAN:</span>
                        <span className="font-medium">SK53 1100 0000 0029 4212 1294</span>
                      </p>
                      <p className="text-sm text-gray-700 flex justify-between">
                        <span className="text-gray-500">SWIFT:</span>
                        <span className="font-medium">TATRSKBX</span>
                      </p>
                      <p className="text-sm text-gray-700 flex justify-between">
                        <span className="text-gray-500">Banka:</span>
                        <span className="font-medium">Tatra banka, a.s.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 text-center text-sm text-gray-500 bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200"
            >
              <p>Spoločnosť je zapísaná v Obchodnom registri Okresného súdu Bratislava III,</p>
              <p>oddiel: Sro, vložka č.: 157956/B</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;