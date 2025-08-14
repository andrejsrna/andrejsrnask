import dynamic from 'next/dynamic';
import { Suspense } from "react";

// Static imports for critical above-the-fold content
import Hero from "@/components/Hero";

// Dynamic imports for below-the-fold content
const AboutMe = dynamic(() => import('@/components/AboutMe'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const References = dynamic(() => import('@/components/References'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});


const Testimonials = dynamic(() => import('@/components/TheySay'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

// Keep LatestPosts with Suspense as it's already optimized
import LatestPostsWrapper from '@/components/LatestPostsWrapper';
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100" />
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

export default function Home() {
return (
    <>
      <Hero />
      <AboutMe />
      <LeadMagnet />
      <References />
      <Suspense>
        <LatestPostsWrapper />
      </Suspense>
      <FAQ />
      <Testimonials />
      <Contact />
    </>
  );
}