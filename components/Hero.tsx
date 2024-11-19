import { Button } from "@/components/ui/button"; // ShadCN Button Component
import Image from "next/image"; // For optimized image rendering

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Ahoj, som <span className="text-blue-600">Andrej Srna</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
        Som vášnivý webový vývojár so špecializáciou na moderné, 
        užívateľsky prívetivé webové aplikácie. <i>Vytvorme spolu niečo úžasné!</i>
        </p>
        {/* Button */}
        <div className="mb-8">
          <Button asChild className="px-6 py-3 text-lg">
            <a href="#contact">Kontaktujte ma</a>
          </Button>
        </div>

        {/* Image */}
        <div className="relative mx-auto max-w-xs sm:max-w-sm">
          <Image
            src="/zombo-andrej.jpg" // Replace with your image path in `public/`
            alt="Andrej Srna"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;