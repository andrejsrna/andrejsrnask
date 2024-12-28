const PAYLOAD_API_URL = 'https://admin.andrejsrna.sk/api';

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
    slug: post.id
  }));
}

export async function fetchPost(id: string) {
  const response = await fetch(`${PAYLOAD_API_URL}/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const post = await response.json();
  return {
    ...post,
    slug: post.id
  };
} 