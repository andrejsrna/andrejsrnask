import BlogPostCard from "@/components/BlogPostCard";
import { fetchPosts } from "@/lib/payload";
import { Metadata } from "next";

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
          <p className="text-xl text-gray-600">
            Články o tvorbe webov, online marketingu a podnikaní
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600">
              Zatiaľ nie sú k dispozícii žiadne články.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 