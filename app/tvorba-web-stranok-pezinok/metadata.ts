import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tvorba web stránok Pezinok | Andrej Srna',
  description: 'Profesionálna tvorba web stránok v Pezinku. Moderný dizajn, SEO a výkon. Nezáväzná konzultácia; externé spolupráce riešim mimo pracovného času.',
  keywords: 'tvorba web stránok, web development, Pezinok, web dizajn, SEO Pezinok, tvorba webu Pezinok',
  openGraph: {
    title: 'Tvorba web stránok Pezinok | Andrej Srna',
    description: 'Profesionálna tvorba web stránok v Pezinku. Moderný dizajn, SEO a výkon. Nezáväzná konzultácia; externé spolupráce mimo pracovného času.',
    url: 'https://andrejsrna.sk/tvorba-web-stranok-pezinok',
    images: [
      {
        url: '/andrej-srna-cover.jpg',
        width: 800,
        height: 600,
        alt: 'Tvorba web stránok Pezinok'
      }
    ],
    siteName: 'Andrej Srna Web Development',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tvorba web stránok Pezinok | Andrej Srna',
    description: 'Profesionálna tvorba web stránok v Pezinku. Moderný dizajn, SEO a výkon. Nezáväzná konzultácia; externé spolupráce mimo pracovného času.',
    images: ['/andrej-srna-cover.jpg']
  }
}; 