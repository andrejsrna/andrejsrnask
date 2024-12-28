const PAYLOAD_API_URL = 'https://admin.andrejsrna.sk/api';

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  coverImage?: {
    url: string;
  };
  featuredImage?: {
    url: string;
  };
  createdAt: string;
  slug: string;
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

interface PayloadResponse {
  docs: Post[];
}

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${PAYLOAD_API_URL}/posts?depth=1`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data: PayloadResponse = await response.json();
  return data.docs;
}

export async function fetchPost(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}/posts?where[slug][equals]=${slug}&depth=1`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(`Failed to fetch post: ${response.status} ${response.statusText}`);
      return null;
    }

    const data: PayloadResponse = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
} 