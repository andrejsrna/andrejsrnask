'use client';

import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import { decodeHtmlEntities } from "@/lib/utils";

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
}

export default function BlogPostCard({ post }: { post: Post }) {
  const excerpt = decodeHtmlEntities(
    post.content?.root?.children?.[0]?.text
      ?.replace(/<[^>]*>/g, '')
      ?.replace(/\[.*?\]/g, '')
      ?.trim() || ''
  );

  return (
    <Link href={`/blog/${post.slug}`} className="block min-w-0 w-full">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col h-full min-w-0">
          {post.featuredImage && (
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-grow min-w-0">
            <time className="text-sm text-gray-500 mb-2 block">
              {format(new Date(post.createdAt), "d. MMMM yyyy", { locale: sk })}
            </time>
            <h3 className="text-xl font-semibold mb-2 line-clamp-2 break-words overflow-hidden">
              {decodeHtmlEntities(post.title)}
            </h3>
            <p className="text-gray-600 line-clamp-3 mb-4 flex-grow break-words overflow-hidden">
              {excerpt}
            </p>
            <div className="text-blue-600 font-semibold mt-auto">
              Čítať viac →
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
} 