import React from 'react';
import { fetchPost, fetchPosts } from "@/lib/payload";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import { Card } from "@/components/ui/card";
import { Metadata } from 'next';
import Image from "next/image";

interface LexicalBaseNode {
  type: string;
  children?: LexicalNode[];
}

interface LexicalTextNode extends LexicalBaseNode {
  type: 'text';
  text: string;
  format?: number;
}

interface LexicalHeadingNode extends LexicalBaseNode {
  type: 'heading';
  tag: string;
}

interface LexicalListNode extends LexicalBaseNode {
  type: 'list';
  listType: 'number' | 'bullet';
}

interface LexicalImageNode extends LexicalBaseNode {
  type: 'image';
  src: string;
  altText?: string;
  caption?: string;
}

interface LexicalLinkNode extends LexicalBaseNode {
  type: 'link';
  url: string;
  target?: string;
}

interface LexicalBlockquoteNode extends LexicalBaseNode {
  type: 'quote';
  citation?: string;
}

type LexicalNode = 
  | LexicalTextNode 
  | LexicalHeadingNode 
  | LexicalListNode 
  | LexicalImageNode 
  | LexicalLinkNode 
  | LexicalBlockquoteNode
  | LexicalBaseNode;

function isTextNode(node: LexicalNode): node is LexicalTextNode {
  return node.type === 'text';
}

function isHeadingNode(node: LexicalNode): node is LexicalHeadingNode {
  return node.type === 'heading';
}

function isListNode(node: LexicalNode): node is LexicalListNode {
  return node.type === 'list';
}

function isImageNode(node: LexicalNode): node is LexicalImageNode {
  return node.type === 'image';
}

function isLinkNode(node: LexicalNode): node is LexicalLinkNode {
  return node.type === 'link';
}

function isBlockquoteNode(node: LexicalNode): node is LexicalBlockquoteNode {
  return node.type === 'quote';
}

export async function generateStaticParams() {
  const posts = await fetchPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
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
    title: post.meta?.title || post.title,
    description: post.meta?.description || post.content?.root?.children?.[0]?.text,
    openGraph: {
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.content?.root?.children?.[0]?.text,
      url: `https://andrejsrna.sk/blog/${slug}`,
      images: post.featuredImage
        ? [
            {
              url: `https://admin.andrejsrna.sk/${post.featuredImage.url}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.content?.root?.children?.[0]?.text,
      images: post.featuredImage
        ? [`https://admin.andrejsrna.sk/${post.featuredImage.url}`]
        : undefined,
    },
  };
}

function renderLexicalNode(node: LexicalNode): React.ReactNode {
  if (!node) return null;

  switch (node.type) {
    case 'paragraph':
      return (
        <p>
          {node.children?.map((child, index) => {
            if (isTextNode(child)) {
              const content = child.text;
              if (child.format && (child.format & 1)) {
                return <strong key={index}>{content}</strong>;
              }
              if (child.format && (child.format & 2)) {
                return <em key={index}>{content}</em>;
              }
              return <span key={index}>{content}</span>;
            }
            if (child.type === 'linebreak') return <br key={index} />;
            return <React.Fragment key={index}>{renderLexicalNode(child)}</React.Fragment>;
          })}
        </p>
      );

    case 'heading':
      if (!isHeadingNode(node)) return null;
      const HeadingTag = node.tag as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag>
          {node.children?.map((child, index) => (
            <React.Fragment key={index}>{renderLexicalNode(child)}</React.Fragment>
          ))}
        </HeadingTag>
      );

    case 'list':
      if (!isListNode(node)) return null;
      const ListTag = node.listType === 'number' ? 'ol' : 'ul';
      return (
        <ListTag className="list-disc space-y-2">
          {node.children?.map(item => renderLexicalNode(item))}
        </ListTag>
      );

    case 'listitem':
      // If this list item only contains a single list as a child, return just the list
      if (node.children?.length === 1 && isListNode(node.children[0])) {
        return renderLexicalNode(node.children[0]);
      }

      return (
        <li className="mb-2">
          {node.children?.map((child, index) => {
            if (isListNode(child)) {
              return renderLexicalNode(child);
            }
            if (isTextNode(child)) {
              if (node.children?.length === 2 && isTextNode(node.children[1])) {
                // Handle the case where we have two text nodes (label and content)
                if (index === 0) {
                  return <strong key={index}>{child.text}</strong>;
                }
                return <span key={index}> {child.text}</span>;
              }
              return child.text;
            }
            if (isBlockquoteNode(child)) {
              return (
                <blockquote key={index} className="border-l-4 border-gray-300 pl-4 my-4 italic">
                  {child.children?.map((quoteChild, quoteIndex) => (
                    <React.Fragment key={quoteIndex}>
                      {renderLexicalNode(quoteChild)}
                    </React.Fragment>
                  ))}
                  {child.citation && (
                    <cite className="block text-sm text-gray-600 mt-2 not-italic">
                      — {child.citation}
                    </cite>
                  )}
                </blockquote>
              );
            }
            return renderLexicalNode(child);
          })}
        </li>
      );

    case 'quote':
      if (!isBlockquoteNode(node)) return null;
      return (
        <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
          {node.children?.map((child, index) => (
            <React.Fragment key={index}>{renderLexicalNode(child)}</React.Fragment>
          ))}
          {node.citation && (
            <cite className="block text-sm text-gray-600 mt-2 not-italic">
              — {node.citation}
            </cite>
          )}
        </blockquote>
      );

    case 'text':
      if (!isTextNode(node)) return null;
      const content = node.text;
      if (node.format && (node.format & 1)) {
        return <strong>{content}</strong>;
      }
      if (node.format && (node.format & 2)) {
        return <em>{content}</em>;
      }
      return content;

    case 'image':
      if (!isImageNode(node)) return null;
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video">
            <Image
              src={node.src}
              alt={node.altText || ''}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </div>
          {node.caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-2">
              {node.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'link':
      if (!isLinkNode(node)) return null;
      return (
        <a 
          href={node.url} 
          target={node.target || '_blank'} 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {node.children?.map((child, index) => (
            <React.Fragment key={index}>{renderLexicalNode(child)}</React.Fragment>
          ))}
        </a>
      );

    default:
      return null;
  }
}

export default async function BlogPost(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  const content = post.content?.root?.children?.map((node, index) => {
    const lexicalNode = node as unknown as LexicalNode;
    return <React.Fragment key={index}>{renderLexicalNode(lexicalNode)}</React.Fragment>;
  });

  return (
    <article className="container mx-auto px-4 py-12">
      {/* Hero section */}
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
            <Image
              src={`https://admin.andrejsrna.sk${post.featuredImage.url}`}
              alt={post.title}
              className="object-cover w-full h-full rounded-lg"
              width={1200}
              height={630}
              priority
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <Card className="p-8">
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </Card>
      </div>
    </article>
  );
}
