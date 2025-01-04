import Hero from "@/components/Hero";
import AboutMe from '@/components/AboutMe';
import Services from "@/components/Services";
import References from '@/components/References';
import Testimonials from '@/components/TheySay';
import Contact from '@/components/Contact';
import LatestPosts from '@/components/LatestPosts';
import Pricing from '@/components/Pricing';
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutMe/>
      <Services />
      <References />
      <Pricing />
      <Suspense>
        <LatestPosts />
      </Suspense>
      <Testimonials/>
      <Contact />
    </>
  );
}