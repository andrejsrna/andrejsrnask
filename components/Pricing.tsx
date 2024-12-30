import { Card } from "@/components/ui/card";

export default function Pricing() {
  return (
    <div className="bg-blue-50 mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl container mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Cenník tvorby web stránok
        </h1>
        <p className="text-xl text-gray-600">
          Flexibilné možnosti platby pre váš nový web
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* One-time Payment */}
        <Card className="p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Jednorazová platba</h3>
            <div className="text-4xl font-bold mb-4">od 599€</div>
            <p className="text-gray-600 mb-6">Kompletný web na mieru s jednorazovou platbou</p>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Responzívny dizajn
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              SEO optimalizácia
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Kontaktný formulár
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Vlastníctvo webu
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Hosting prvý rok v cene
            </li>
            <li className="flex items-center text-gray-500">
              <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Pravidelné aktualizácie
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Vypočítať cenu
          </button>
        </Card>

        {/* Subscription */}
        <Card className="p-8 border-blue-500 border-2">
          <div className="text-center">
            <div className="text-blue-600 font-semibold mb-2">Odporúčané</div>
            <h3 className="text-2xl font-bold mb-2">Mesačné predplatné</h3>
            <div className="text-4xl font-bold mb-4">od 25€/mesiac</div>
            <p className="text-gray-600 mb-6">Nulové počiatočné náklady a pravidelná údržba</p>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Žiadne počiatočné náklady
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Hosting v cene
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Pravidelné aktualizácie
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Možnosť dodatočných úprav
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Technická podpora
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Viazanosť na 2 roky
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Mám záujem
          </button>
        </Card>
      </div>

      {/* Additional Info */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Prečo zvoliť mesačné predplatné?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="font-bold mb-2">Žiadne počiatočné náklady</h3>
              <p className="text-gray-600">Začnite s novým webom bez vysokej počiatočnej investície.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Pravidelné aktualizácie</h3>
              <p className="text-gray-600">Váš web bude vždy aktuálny a zabezpečený.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Flexibilita</h3>
              <p className="text-gray-600">Možnosť kedykoľvek upraviť alebo rozšíriť váš web.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Potrebujete poradiť s výberom?</h2>
        <p className="text-gray-600 mb-8">
          Rád vám vysvetlím výhody jednotlivých možností a pomôžem vybrať najlepšie riešenie pre váš projekt.
        </p>
        <button className="bg-gray-900 text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition">
          Nezáväzná konzultácia
        </button>
      </div>
    </div>
  );
} 