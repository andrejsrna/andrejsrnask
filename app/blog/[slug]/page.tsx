import React from 'react';
import { fetchPost, fetchPosts } from "@/lib/payload";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import { Card } from "@/components/ui/card";
import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
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

        {/* Call to Action */}
        <div className="mt-12">
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 border-0">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative p-8 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Potrebujete pomoc s vaším projektom?
              </h3>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Ak vás tento článok inšpiroval alebo máte otázky ohľadom vášho webu, 
                neváhajte ma kontaktovať. Rád prediskutujem vaše potreby a pomôžem nájsť najlepšie riešenie.
              </p>
              
                             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <Link
                   href="/#contact"
                   className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                 >
                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                   </svg>
                   Začať diskusiu
                 </Link>
                 
                 <Link
                   href="/tvorba-web-stranok-cennik"
                   className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
                 >
                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                   Pozrieť cenník
                 </Link>
               </div>
              
              <div className="mt-6 flex justify-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Bezplatná konzultácia</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Rýchla odpoveď</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
