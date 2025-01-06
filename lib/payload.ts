const WP_API_URL = 'https://admin.andrejsrna.sk/wp-json/wp/v2';

interface WPPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface Post {
  slug: string;
  title: string;
  content: {
    root: {
      children: Array<{
        text?: string;
      }>;
    };
  };
  createdAt: string;
  featuredImage?: {
    url: string;
  };
  meta?: {
    title?: string;
    description?: string;
  };
}

async function fetchFeaturedMedia(mediaId: number): Promise<{ source_url: string; alt_text: string } | null> {
  try {
    const response = await fetch(`${WP_API_URL}/media/${mediaId}`);
    if (!response.ok) return null;
    const media = await response.json();
    return {
      source_url: media.source_url,
      alt_text: media.alt_text || ''
    };
  } catch {
    return null;
  }
}

function convertWPPostToPost(wpPost: WPPost): Post {
  // Create a slug from title if none exists
  const postSlug = wpPost.slug || wpPost.title.rendered
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0];
  const featuredImage = featuredMedia ? {
    url: featuredMedia.source_url
  } : undefined;

  return {
    slug: postSlug,
    title: wpPost.title.rendered,
    content: {
      root: {
        children: [
          {
            text: wpPost.content.rendered
          }
        ]
      }
    },
    createdAt: wpPost.date,
    featuredImage,
    meta: {
      title: wpPost.title.rendered,
      description: wpPost.excerpt.rendered.replace(/<[^>]*>/g, '')
    }
  };
}

export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${WP_API_URL}/posts?_embed=wp:featuredmedia&per_page=10&orderby=date&order=desc`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const wpPosts: WPPost[] = await response.json();
    
    // If posts don't have embedded media, fetch it separately
    const postsWithMedia = await Promise.all(
      wpPosts.map(async (post) => {
        if (!post._embedded?.['wp:featuredmedia']?.[0] && post.featured_media) {
          const media = await fetchFeaturedMedia(post.featured_media);
          if (media) {
            return {
              ...post,
              _embedded: {
                'wp:featuredmedia': [media]
              }
            };
          }
        }
        return post;
      })
    );
    
    return postsWithMedia.map(convertWPPostToPost);
  } catch {
    return [];
  }
}

export async function fetchPost(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=wp:featuredmedia`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }

    const wpPosts: WPPost[] = await response.json();
    if (wpPosts.length === 0) {
      return null;
    }

    return convertWPPostToPost(wpPosts[0]);
  } catch {
    return null;
  }
} 