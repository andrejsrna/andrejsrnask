const PAYLOAD_API_URL = 'https://admin.andrejsrna.sk/api';

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  coverImage?: string;
  createdAt: string;
  slug: string;
  content?: {
    root?: {
      children?: Array<any>;
    };
  };
  featured_image?: {
    url: string;
  };
}

export async function fetchPosts() {
  const response = await fetch(`${PAYLOAD_API_URL}/posts?depth=1`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await response.json();
  return data.docs.map((post: any) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    createdAt: post.createdAt,
    slug: post.slug
  }));
}

export async function fetchPost(slug: string) {
  try {
    const url = `${PAYLOAD_API_URL}/posts?where[slug][equals]=${slug}&depth=1`;
    console.log('Fetching post from:', url);

    const response = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.error(`Failed to fetch post: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      return null;
    }

    const data = await response.json();
    // Payload returns an array of docs, we want the first match
    return data.docs?.[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
} 