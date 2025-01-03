import BlogPostCard from "@/components/BlogPostCard";

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

async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://admin.andrejsrna.sk/api/posts?depth=1', {
    next: { revalidate: 3600 }, // revalidate every hour
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  }

  const data = await response.json();
  return data.docs || [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Blog
            </h1>
            <p className="text-gray-600">
              Zatiaľ nie sú k dispozícii žiadne články.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Články o tvorbe webov, online marketingu a podnikaní
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
} 