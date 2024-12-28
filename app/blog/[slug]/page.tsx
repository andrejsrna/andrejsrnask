import { fetchPost, fetchPosts } from "@/lib/payload";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import { Card } from "@/components/ui/card";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

// Upravená funkcia generateStaticParams
export async function generateStaticParams() {
  const posts = await fetchPosts();
  
  return posts.map((post) => ({
    slug: post.id.toString() // Konvertujeme ID na string pre istotu
  }));
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  // Pre debug - pozrieme sa na štruktúru content
  console.log('Post content:', post.content);

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
        {post.coverImage && (
          <div className="relative w-full h-[400px] mb-8">
            <img
              src={post.coverImage.url}
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
            {post.content?.root?.children?.map((node, i) => {
              if (node.type === 'paragraph') {
                return <p key={i}>{node.children?.[0]?.text}</p>;
              }
              if (node.type === 'heading') {
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