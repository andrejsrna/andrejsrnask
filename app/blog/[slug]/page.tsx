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
            className="prose prose-lg max-w-none 
              prose-img:rounded-lg prose-img:mx-auto 
              prose-pre:max-w-full prose-pre:overflow-x-auto prose-pre:p-0 
              prose-code:text-sm prose-headings:break-words
              prose-iframe:rounded-lg prose-iframe:shadow-lg
              prose-iframe:mx-auto prose-iframe:my-8
              prose-iframe:max-w-full prose-iframe:w-full
              prose-iframe:aspect-video
              prose-embed:rounded-lg prose-embed:shadow-lg
              prose-embed:mx-auto prose-embed:my-8
              prose-embed:max-w-full prose-embed:w-full
              prose-embed:aspect-video
              prose-figure:my-8 prose-figure:mx-auto
              prose-figure:max-w-full prose-figure:w-full
              prose-figure:rounded-lg prose-figure:shadow-lg
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500
              prose-blockquote:pl-6 prose-blockquote:bg-blue-50
              prose-blockquote:py-4 prose-blockquote:rounded-r-lg
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-blue-600 prose-a:no-underline
              prose-a:border-b prose-a:border-blue-300
              prose-a:hover:border-blue-600 prose-a:transition-colors
              prose-ul:list-disc prose-ul:pl-6
              prose-ol:list-decimal prose-ol:pl-6
              prose-li:my-1
              prose-h2:text-2xl prose-h2:font-bold prose-h2:text-gray-900
              prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
              prose-h3:text-xl prose-h3:font-semibold prose-h3:text-gray-900
              prose-h4:text-lg prose-h4:font-medium prose-h4:text-gray-900
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-table:border-collapse prose-table:w-full
              prose-table:my-6 prose-table:rounded-lg prose-table:overflow-hidden
              prose-table:shadow-sm
              prose-th:bg-gray-50 prose-th:text-gray-900 prose-th:font-semibold
              prose-th:p-3 prose-th:border prose-th:border-gray-200
              prose-td:p-3 prose-td:border prose-td:border-gray-200
              prose-td:text-gray-700
              [&_iframe]:rounded-lg [&_iframe]:shadow-lg
              [&_iframe]:mx-auto [&_iframe]:my-8
              [&_iframe]:max-w-full [&_iframe]:w-full
              [&_iframe]:aspect-video
              [&_.wp-block-embed]:rounded-lg [&_.wp-block-embed]:shadow-lg
              [&_.wp-block-embed]:mx-auto [&_.wp-block-embed]:my-8
              [&_.wp-block-embed]:max-w-full [&_.wp-block-embed]:w-full
              [&_.wp-block-embed]:aspect-video
              [&_.wp-block-embed_iframe]:rounded-lg [&_.wp-block-embed_iframe]:shadow-lg
              [&_.wp-block-embed_iframe]:mx-auto [&_.wp-block-embed_iframe]:my-8
              [&_.wp-block-embed_iframe]:max-w-full [&_.wp-block-embed_iframe]:w-full
              [&_.wp-block-embed_iframe]:aspect-video
              [&_.wp-block-video]:rounded-lg [&_.wp-block-video]:shadow-lg
              [&_.wp-block-video]:mx-auto [&_.wp-block-video]:my-8
              [&_.wp-block-video]:max-w-full [&_.wp-block-video]:w-full
              [&_.wp-block-video]:aspect-video
              [&_.wp-block-youtube]:rounded-lg [&_.wp-block-youtube]:shadow-lg
              [&_.wp-block-youtube]:mx-auto [&_.wp-block-youtube]:my-8
              [&_.wp-block-youtube]:max-w-full [&_.wp-block-youtube]:w-full
              [&_.wp-block-youtube]:aspect-video
              [&_.wp-block-youtube_iframe]:rounded-lg [&_.wp-block-youtube_iframe]:shadow-lg
              [&_.wp-block-youtube_iframe]:mx-auto [&_.wp-block-youtube_iframe]:my-8
              [&_.wp-block-youtube_iframe]:max-w-full [&_.wp-block-youtube_iframe]:w-full
              [&_.wp-block-youtube_iframe]:aspect-video
              [&_.wp-block-embed__wrapper]:rounded-lg [&_.wp-block-embed__wrapper]:shadow-lg
              [&_.wp-block-embed__wrapper]:mx-auto [&_.wp-block-embed__wrapper]:my-8
              [&_.wp-block-embed__wrapper]:max-w-full [&_.wp-block-embed__wrapper]:w-full
              [&_.wp-block-embed__wrapper]:aspect-video
              [&_.wp-block-embed__wrapper_iframe]:rounded-lg [&_.wp-block-embed__wrapper_iframe]:shadow-lg
              [&_.wp-block-embed__wrapper_iframe]:mx-auto [&_.wp-block-embed__wrapper_iframe]:my-8
              [&_.wp-block-embed__wrapper_iframe]:max-w-full [&_.wp-block-embed__wrapper_iframe]:w-full
              [&_.wp-block-embed__wrapper_iframe]:aspect-video"
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
              </div>
            </div>
          </Card>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
