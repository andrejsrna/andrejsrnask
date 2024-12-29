import { Metadata } from 'next';
import Pricing from '@/components/Pricing';

export const metadata: Metadata = {
  title: 'Cenník tvorby web stránok | Andrej Srna',
  description: 'Transparentný cenník tvorby webových stránok. Vyberte si medzi jednorazovou platbou alebo mesačným predplatným.',
};

export default function PricingPage() {
  return <Pricing />;
} 