import { cache } from "react";

const HASHNODE_USERNAME = "tripletech";
const RSS_FEED_URL = `https://${HASHNODE_USERNAME}.hashnode.dev/rss.xml`;

export type BlogPost = {
  id: string;
  slug: string;
  coverImage?: string;
  title: string;
  dateAdded: string;
  brief: string;
  readTime: number;
  responseCount: number;
  content?: string;
  contentMarkdown?: string;
};

/**
 * Fetch blog posts from Hashnode via RSS feed (since GraphQL API is now restricted to Pro tier)
 */
export const fetchBlogPosts = cache(async (limit: number = 20) => {
  try {
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed with status ${response.status}`);
    }

    const xml = await response.text();
    const posts: BlogPost[] = [];
    const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);

    for (const match of itemMatches) {
      const itemXml = match[1];
      const title =
        itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
        itemXml.match(/<title>(.*?)<\/title>/)?.[1] ||
        "";
      const link = itemXml.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const slug = link.split("/").filter(Boolean).pop() || "";
      const rawDescription =
        itemXml.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] ||
        itemXml.match(/<description>(.*?)<\/description>/)?.[1] ||
        "";
      const brief = rawDescription
        .replace(/<[^>]*>/g, "")
        .trim()
        .slice(0, 160);
      const pubDate = itemXml.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      const coverImage =
        itemXml.match(/<enclosure\s+url="([^"]+)"/)?.[1] ||
        itemXml.match(/<media:content\s+url="([^"]+)"/)?.[1] ||
        null;

      if (title && slug) {
        posts.push({
          id: slug,
          title,
          brief,
          slug,
          dateAdded: pubDate,
          coverImage: coverImage || undefined,
          readTime: 5,
          responseCount: 0,
        });
      }
    }

    const sliced = posts.slice(0, limit);

    return {
      posts: sliced,
      pageInfo: { hasNextPage: posts.length > limit, endCursor: null },
      totalPosts: posts.length,
    };
  } catch (error) {
    console.error("Error fetching blog posts via RSS:", error);
    return {
      posts: [],
      pageInfo: { hasNextPage: false, endCursor: null },
      totalPosts: 0,
    };
  }
});

/**
 * Fetch a single blog post by slug from RSS feed
 */
export const fetchBlogPost = cache(async (slug: string) => {
  try {
    const { posts } = await fetchBlogPosts(50);
    const post = posts.find((p) => p.slug === slug);
    if (!post) {
      throw new Error(`Post not found: ${slug}`);
    }
    return post;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
});
