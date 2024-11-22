import LandingHero from "@/components/LandingHero";
import Services from "@/components/Services"; // Upravte sekciu Služieb pre Pezinok podľa potreby
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/TheySay";
import References from "@/components/References";

export default function TvorbaWebStranokPezinok() {
  return (
    <div>
      <LandingHero />
      <AboutMe/>
      <Services />
      <References />
      <Testimonials/>
      <Contact />
      <Footer/>
    </div>
  );
}