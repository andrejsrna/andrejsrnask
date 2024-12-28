import { fetchPosts } from "@/lib/payload";
import Link from "next/link";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import Image from "next/image";

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  coverImage?: {
    url: string;
  };
  createdAt: string;
  slug: string;
}

export const generateStaticParams = async () => {
  return [{}];
}

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => (
          <Link 
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group"
          >
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              {post.coverImage && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.coverImage.url}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    width={800}
                    height={400}
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {format(new Date(post.createdAt), "d. MMMM yyyy", { locale: sk })}
                  </span>
                  <span className="text-orange-600 font-medium group-hover:translate-x-1 transition-transform">
                    Čítať viac →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
} 