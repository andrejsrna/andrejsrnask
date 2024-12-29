'use client';

import Link from "next/link";
import BlogPostCard from "./BlogPostCard";
import { use } from 'react';

interface Post {
  slug: string;
  title: string;
  createdAt: string;
  featuredImage?: {
    url: string;
  };
  content?: {
    root?: {
      children?: Array<{
        text?: string;
      }>;
    };
  };
}

async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://admin.andrejsrna.sk/api/posts?depth=1', {
    next: { revalidate: 3600 }, // revalidate every hour
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  }

  const data = await response.json();
  return data.docs || [];
}

const postsPromise = getPosts();

export default function LatestPosts() {
  const posts = use(postsPromise);

  if (posts.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Najnovšie články
            </h2>
            <p className="text-gray-600">
              Zatiaľ nie sú k dispozícii žiadne články.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Najnovšie články
          </h2>
          <p className="text-xl text-gray-600">
            Prečítajte si moje najnovšie články o tvorbe webov a online marketingu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.slice(0, 3).map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Všetky články
          </Link>
        </div>
      </div>
    </section>
  );
} 