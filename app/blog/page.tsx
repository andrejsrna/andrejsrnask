import BlogPostCard from "@/components/BlogPostCard";
import { fetchPosts } from "@/lib/payload";
import { Metadata } from "next";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Blog | Andrej Srna',
  description: 'Články o tvorbe webových stránok, online marketingu a podnikaní',
  openGraph: {
    title: 'Blog | Andrej Srna',
    description: 'Články o tvorbe webových stránok, online marketingu a podnikaní',
    url: 'https://andrejsrna.sk/blog',
    images: [
      {
        url: '/andrej-srna-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog | Andrej Srna'
      }
    ],
    siteName: 'Andrej Srna Web Development',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Andrej Srna',
    description: 'Články o tvorbe webových stránok, online marketingu a podnikaní',
    images: ['/andrej-srna-cover.jpg']
  }
};

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Články o tvorbe webov, online marketingu a podnikaní
          </p>

          {/* Social Media Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-8 mb-12 shadow-xl">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    🚀 Chcete viac tipov a trikov?
                  </h2>
                  <p className="text-blue-100 text-lg">
                    Sledujte ma na sociálnych sieťach pre exkluzívny obsah, 
                    praktické tipy a najnovšie trendy v tvorbe webov!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://www.youtube.com/channel/UCtjCCncCi8XQjKiqNk5c_mg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <FaYoutube className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    YouTube
                    <span className="ml-2 text-sm opacity-90">Tips & Tricks</span>
                  </Link>

                  <Link
                    href="https://www.instagram.com/andrej.srna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <FaInstagram className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Instagram
                    <span className="ml-2 text-sm opacity-90">Daily Tips</span>
                  </Link>
                </div>
              </div>

              {/* Additional info */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Nové tipy každý týždeň</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Praktické riešenia</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Najnovšie trendy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600">
              Zatiaľ nie sú k dispozícii žiadne články.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <div key={post.slug} className="min-w-0">
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 