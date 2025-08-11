'use client';

type QA = { q: string; a: string };

const defaultItems: QA[] = [
  { q: 'Kedy sa vieme pustiť do spolupráce?', a: 'Konzultácie riešim priebežne, implementáciu selektívne a mimo pracovného času.' },
  { q: 'Ako prebieha mini audit?', a: 'Pošlete URL webu, do 24 hodín pošlem PDF s prioritami (výkon, SEO, UX).' },
  { q: 'Koľko to stojí?', a: 'Orientačné ceny sú v cenníku. Po audite navrhnem rozsah a odhad.' },
  { q: 'Čo potrebujem dodať?', a: 'Ciele projektu, prístup k meraniu (GA4/Search Console) a základný obsah.' }
];

export default function FAQ({ items }: { items?: QA[] }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Často kladené otázky</h2>
        <div className="max-w-3xl mx-auto divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {(items || defaultItems).map((item) => (
            <details key={item.q} className="group">
              <summary className="cursor-pointer list-none p-6 flex items-center justify-between">
                <span className="font-medium text-gray-900">{item.q}</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


