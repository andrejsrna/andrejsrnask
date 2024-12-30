import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        <main className="mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
