import React from 'react';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import References from '@/components/References';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <References />
      <Contact />
      {/* Add more sections as needed */}
    </>
  );
}