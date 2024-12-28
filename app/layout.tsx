import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Andrej Srna - Tvorba web stránok na mieru",
  description:
    "Potrebujete modernú a funkčnú web stránku? Andrej Srna ponúka profesionálnu tvorbu web stránok na mieru pre firmy aj jednotlivcov. Kontaktujte ma ešte dnes!",
  keywords: [
    "Andrej Srna",
    "tvorba web stránok",
    "web na mieru",
    "webdizajn",
    "moderné stránky",
  ],
  openGraph: {
    title: "Andrej Srna - Tvorba web stránok na mieru",
    description:
      "Potrebujete modernú a funkčnú web stránku? Andrej Srna ponúka profesionálnu tvorbu web stránok na mieru pre firmy aj jednotlivcov. Kontaktujte ma ešte dnes!",
    url: "https://www.andrejsrna.sk",
    type: "website",
    images: [
      {
        url: "https://www.andrejsrna.sk/andrej-srna-cover.jpg",
        alt: "Andrej Srna - Tvorba web stránok na mieru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrej Srna - Tvorba web stránok na mieru",
    description:
      "Potrebujete modernú a funkčnú web stránku? Andrej Srna ponúka profesionálnu tvorbu web stránok na mieru pre firmy aj jednotlivcov. Kontaktujte ma ešte dnes!",
    images: ["https://www.andrejsrna.sk/andrej-srna-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
