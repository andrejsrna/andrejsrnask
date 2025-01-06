'use client';

import Link from "next/link";
import BlogPostCard from "./BlogPostCard";
import { ArrowRight } from "lucide-react";
import { fetchPosts } from "@/lib/payload";
import { useEffect, useState } from "react";

interface Post {
  slug: string;
  title: string;
  content: {
    root: {
      children: Array<{
        text?: string;
      }>;
    };
  };
  createdAt: string;
  featuredImage?: {
    url: string;
  };
  meta?: {
    title?: string;
    description?: string;
  };
}

export default function LatestPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
            Najnovšie články
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prečítajte si najnovšie články o tvorbe webov a online marketingu
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-0">
                <div className="h-96 bg-gray-100 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.slice(0, 3).map((post) => (
              <div key={post.slug} className="min-w-0">
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300"
          >
            Všetky články
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
} 