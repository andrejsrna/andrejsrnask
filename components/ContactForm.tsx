'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Shield } from "lucide-react";
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';

const contactFormVariants = {
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

const budgetOptions = [
  { value: "", label: "Vyberte rozpočet..." },
  { value: "less-500", label: "Menej ako 500 €" },
  { value: "500-1500", label: "500 – 1500 €" },
  { value: "1500-3000", label: "1500 – 3000 €" },
  { value: "3000-plus", label: "3000 € a viac" }
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  turnstileToken: string;
  gdprConsent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  turnstileToken?: string;
  gdprConsent?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    turnstileToken: '',
    gdprConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const turnstileRef = useRef<TurnstileInstance>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Meno a priezvisko je povinné';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail je povinný';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Neplatný e-mail';
    }

    if (!formData.projectType.trim()) {
      newErrors.projectType = 'Typ projektu je povinný';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Správa je povinná';
    }

    if (!formData.turnstileToken) {
      newErrors.turnstileToken = 'Prosím, potvrďte, že nie ste robot';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'Súhlas so spracovaním osobných údajov je povinný';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Formulár bol úspešne odoslaný! Ozvem sa vám do 24 hodín.');
        
        // Reset formulára
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          message: '',
          turnstileToken: '',
          gdprConsent: false
        });
        
        // Reset Turnstile
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
      } else {
        throw new Error(data.error || 'Chyba pri odosielaní');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error instanceof Error ? error.message : 'Chyba pri odosielaní formulára. Skúste to prosím znovu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Vymazať chybu pre pole keď užívateľ začne písať
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact-form" className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            variants={contactFormVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Poďme prebrať váš projekt
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stačí mi pár informácií a ozvem sa vám do 24 hodín. Spolupráca je nezáväzná – uvidíme, či si budeme sedieť.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={contactFormVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Meno a priezvisko */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Meno a priezvisko <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="Váše meno a priezvisko"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  {/* E-mail a telefón v riadku */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                          errors.email 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-blue-500'
                        }`}
                        placeholder="vas@email.sk"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefón <span className="text-gray-400">(nepovinné)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="+421 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  {/* O aký projekt ide */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      O aký projekt ide? <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-3">
                      Čím viac detailov, tým presnejší bude návrh.
                    </p>
                    <input
                      type="text"
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                        errors.projectType 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="nový web, SEO, audit, marketing..."
                    />
                    {errors.projectType && <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>}
                  </div>

                  {/* Rozpočet */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Rozpočet / predstava <span className="text-gray-400">(nepovinné)</span>
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    >
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Správa */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Správa <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${
                        errors.message 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="Popíšte váš projekt, ciele, požiadavky..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  {/* GDPR Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="gdprConsent" className="text-sm text-gray-700 leading-relaxed">
                      Súhlasím so spracovaním osobných údajov na účely kontaktovania a poskytnutia informácií o službach. 
                      Podrobnosti o spracovaní nájdete v{' '}
                      <a 
                        href="/ochrana-osobnych-udajov" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        zásadách ochrany osobných údajov
                      </a>. <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {errors.gdprConsent && (
                    <p className="text-sm text-red-600">{errors.gdprConsent}</p>
                  )}

                  {/* Turnstile CAPTCHA */}
                  <div className="flex justify-center">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY!}
                      onSuccess={(token) => {
                        setFormData(prev => ({ ...prev, turnstileToken: token }));
                        if (errors.turnstileToken) {
                          setErrors(prev => ({ ...prev, turnstileToken: undefined }));
                        }
                      }}
                      onError={() => {
                        setFormData(prev => ({ ...prev, turnstileToken: '' }));
                      }}
                      onExpire={() => {
                        setFormData(prev => ({ ...prev, turnstileToken: '' }));
                      }}
                    />
                    {errors.turnstileToken && (
                      <p className="mt-1 text-sm text-red-600 text-center">{errors.turnstileToken}</p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.turnstileToken || !formData.gdprConsent}
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                          Odosielam...
                        </>
                      ) : (
                        <>
                          Odoslať a získať mini audit zdarma
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>

                    {/* Mikrotext pod tlačidlom */}
                    <div className="mt-4 text-center space-y-2">
                      <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                        <Shield className="w-4 h-4" />
                        Vaše údaje sú v bezpečí, používam ich iba na účely spätného kontaktovania.
                      </p>
                      <p className="text-sm text-blue-600 font-medium">
                        Mesačne prijímam len obmedzený počet projektov – rezervujte si miesto vopred.
                      </p>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
