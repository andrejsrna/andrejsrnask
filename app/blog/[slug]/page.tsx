import React from 'react';
import { fetchPost, fetchPosts } from "@/lib/payload";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import { Card } from "@/components/ui/card";
import { Metadata } from 'next';
import Image from "next/image";
import { decodeHtmlEntities } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await fetchPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>
  }
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  if (!slug) {
    return {
      title: 'Post Not Found',
    };
  }

  const post = await fetchPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: decodeHtmlEntities(post.meta?.title || post.title),
    description: post.meta?.description ? decodeHtmlEntities(post.meta.description) : undefined,
    openGraph: {
      title: decodeHtmlEntities(post.meta?.title || post.title),
      description: post.meta?.description ? decodeHtmlEntities(post.meta.description) : undefined,
      url: `https://andrejsrna.sk/blog/${slug}`,
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage.url,
              width: 1200,
              height: 630,
              alt: decodeHtmlEntities(post.title),
            },
          ]
        : undefined,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: decodeHtmlEntities(post.meta?.title || post.title),
      description: post.meta?.description ? decodeHtmlEntities(post.meta.description) : undefined,
      images: post.featuredImage
        ? [post.featuredImage.url]
        : undefined,
    },
  };
}

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    notFound();
  }

  // WordPress content comes as HTML, so we'll render it directly
  const content = post.content?.root?.children?.[0]?.text || '';

  return (
    <article className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 break-words">
          {decodeHtmlEntities(post.title)}
        </h1>
        <div className="flex items-center text-gray-600 mb-8">
          <time dateTime={post.createdAt}>
            {format(new Date(post.createdAt), "d. MMMM yyyy", { locale: sk })}
          </time>
        </div>
        {post.featuredImage && (
          <div className="relative aspect-[16/9] w-full mb-8">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              className="rounded-lg object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="w-full max-w-none md:max-w-3xl mx-auto px-0 md:px-4">
        <Card className="p-4 md:p-8">
          <div 
            className="prose prose-lg max-w-none prose-img:rounded-lg prose-img:mx-auto prose-pre:max-w-full prose-pre:overflow-x-auto prose-pre:p-0 prose-code:text-sm prose-headings:break-words"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Card>
      </div>
    </article>
  );
};

export default BlogPost;
