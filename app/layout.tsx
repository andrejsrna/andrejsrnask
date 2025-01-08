import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';

// Dynamically import heavy components
const Header = dynamic(() => import('@/components/Header'), {
  ssr: true,
  loading: () => <div className="h-16" /> // Simple loading state
});

const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer), {
  ssr: true
});

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andrejsrna.sk"),
  title: "Andrej Srna | Tvorba web stránok",
  description: "Tvorba moderných web stránok a e-shopov na mieru. Pomôžem vám s online prezentáciou vášho podnikania.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <head>
        <link
          rel="preconnect"
          href={process.env.NEXT_PUBLIC_SITE_URL}
        />
        <link
          rel="preload"
          as="image"
          href="/zombo-andrej.webp"
          type="image/webp"
          imageSrcSet="/zombo-andrej.webp?w=384&q=90 384w, /zombo-andrej.webp?w=640&q=90 640w"
          sizes="(max-width: 768px) 256px, 320px"
        />
      </head>
      <body className={inter.className}>
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main className="mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
