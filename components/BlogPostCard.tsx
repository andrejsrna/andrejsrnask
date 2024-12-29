'use client';

import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

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

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        {post.featuredImage && (
          <div className="relative w-full h-48">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <time className="text-sm text-gray-500 mb-2 block">
            {format(new Date(post.createdAt), "d. MMMM yyyy", { locale: sk })}
          </time>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 line-clamp-3">
            {post.content?.root?.children?.[0]?.text}
          </p>
          <div className="mt-4 text-blue-600 font-semibold">
            Čítať viac →
          </div>
        </div>
      </Card>
    </Link>
  );
} 