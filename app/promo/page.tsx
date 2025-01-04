import { Metadata } from 'next';
import FacebookAd from '@/components/FacebookAd';

export const metadata: Metadata = {
  title: 'Web stránka bez počiatočných investícií | Andrej Srna',
  description: 'Získajte modernú web stránku bez vstupných nákladov. Platíte až po úspešnom spustení vášho webu.',
  openGraph: {
    title: 'Web stránka bez počiatočných investícií | Andrej Srna',
    description: 'Získajte modernú web stránku bez vstupných nákladov. Platíte až po úspešnom spustení vášho webu.',
    url: 'https://andrejsrna.sk/promo',
    images: [
      {
        url: '/andrej-srna-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Web stránka bez počiatočných investícií'
      }
    ],
    siteName: 'Andrej Srna Web Development',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web stránka bez počiatočných investícií | Andrej Srna',
    description: 'Získajte modernú web stránku bez vstupných nákladov. Platíte až po úspešnom spustení vášho webu.',
    images: ['/andrej-srna-cover.jpg']
  }
};

export default function PromoPage() {
  return (
    <main className="min-h-screen">
      <FacebookAd />
    </main>
  );
} 