import { fetchPost, fetchPosts } from "@/lib/payload";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import { Card } from "@/components/ui/card";
import { Metadata } from 'next';

type Params = {
  params: {
    slug: Promise<string> | string;
  };
};

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
        type: string;
        tag?: string;
        text?: string;
        listType?: 'number' | 'bullet';
        children?: Array<{
          text?: string;
          children?: Array<{
            text?: string;
          }>;
        }>;
      }>;
    };
  };
  meta?: {
    title?: string;
    description?: string;
  };
}

export async function generateStaticParams() {
  const posts = await fetchPosts();
  
  return posts.map((post: Post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = await params.slug;
  const post = await fetchPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.meta?.title || post.title,
    description: post.meta?.description || post.content?.root?.children?.[0]?.text,
    openGraph: {
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.content?.root?.children?.[0]?.text,
      url: `https://andrejsrna.sk/blog/${slug}`,
      images: post.featuredImage ? [{
        url: `https://admin.andrejsrna.sk/${post.featuredImage.url}`,
        width: 1200,
        height: 630,
        alt: post.title
      }] : undefined,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.content?.root?.children?.[0]?.text,
      images: post.featuredImage ? [`https://admin.andrejsrna.sk/${post.featuredImage.url}`] : undefined,
    }
  };
}

export default async function BlogPost({ params }: Params) {
  const slug = await params.slug;
  const post = await fetchPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12">
      {/* Hero sekcia */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 mb-8">
          <time dateTime={post.createdAt}>
            {format(new Date(post.createdAt), "d. MMMM yyyy", { locale: sk })}
          </time>
        </div>
        {post.featuredImage && (
          <div className="relative w-full h-[400px] mb-8">
            <img
              src={`https://admin.andrejsrna.sk/${post.featuredImage.url}`}
              alt={post.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Obsah */}
      <div className="max-w-3xl mx-auto">
        <Card className="p-8">
          <div className="prose prose-lg max-w-none">
            {post.content?.root?.children?.map((node: {
              type: string;
              tag?: string;
              text?: string;
              listType?: 'number' | 'bullet';
              children?: Array<{
                text?: string;
                children?: Array<{
                  text?: string;
                }>;
              }>;
            }, i) => {
              if (node.type === 'paragraph') {
                return <p key={i}>{node.children?.[0]?.text}</p>;
              }
              if (node.type === 'heading' && node.tag) {
                const HeadingTag = `h${node.tag.slice(1)}` as keyof JSX.IntrinsicElements;
                return <HeadingTag key={i}>{node.children?.[0]?.text}</HeadingTag>;
              }
              if (node.type === 'list') {
                const ListTag = node.listType === 'number' ? 'ol' : 'ul';
                return (
                  <ListTag key={i}>
                    {node.children?.map((item, j) => (
                      <li key={j}>{item.children?.[0]?.text}</li>
                    ))}
                  </ListTag>
                );
              }
              return null;
            })}
          </div>
        </Card>
      </div>
    </article>
  );
} 