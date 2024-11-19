'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mail, Phone, MapPin, Globe } from "lucide-react";

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

const ContactItem = ({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>, label: string, value: string }) => (
  <div className="flex items-start space-x-3 mb-4">
    <Icon className="w-5 h-5 text-blue-500 mt-1" />
    <div>
      <div className="font-medium text-gray-500">{label}</div>
      <div className="text-gray-900">{value}</div>
    </div>
  </div>
);

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Kontakt
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Fakturačné údaje</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Spoločnosť</h3>
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

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Kontaktné údaje</h3>
                  <ContactItem
                    icon={Phone}
                    label="Telefón"
                    value="+421 914 230 321"
                  />
                  <ContactItem
                    icon={Mail}
                    label="Email"
                    value="ahoj@andrejsrna.sk"
                  />
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-500 mb-2">Bankové spojenie</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">IBAN: SK53 1100 0000 0029 4212 1294</p>
                      <p className="text-sm text-gray-700">SWIFT: TATRSKBX</p>
                      <p className="text-sm text-gray-700">Tatra banka, a.s.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Spoločnosť je zapísaná v Obchodnom registri Okresného súdu Bratislava III,</p>
              <p>oddiel: Sro, vložka č.: 157956/B</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;