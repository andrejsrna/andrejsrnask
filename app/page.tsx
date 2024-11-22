import React from 'react';
import Hero from "@/components/Hero";
import AboutMe from '@/components/AboutMe';
import Services from "@/components/Services";
import References from '@/components/References';
import Testimonials from '@/components/TheySay';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe/>
      <Services />
      <References />
      <Testimonials/>
      <Contact />
      <Footer/>
      {/* Add more sections as needed */}
    </>
  );
}