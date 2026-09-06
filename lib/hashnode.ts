import { cache } from "react";

const HASHNODE_USERNAME = "tripletech";
const RSS_FEED_URL = "https://" + HASHNODE_USERNAME + ".hashnode.dev/rss.xml";

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

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function getXmlValue(xml: string, tag: string) {
  const match = xml.match(new RegExp("<" + tag + "(?:\\s[^>]*)?>([\\s\\S]*?)</" + tag + ">"));
  return match ? decodeXml(match[1]).trim() : "";
}

export const fetchBlogPosts = cache(async (limit: number = 20) => {
  try {
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });

    if (!response.ok) throw new Error("Hashnode RSS request failed");

    const xml = await response.text();
    if (!xml.includes("<rss") && !xml.includes("<feed")) {
      throw new Error("Hashnode returned an unexpected response");
    }

    const posts: BlogPost[] = [];
    const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);

    for (const match of itemMatches) {
      const itemXml = match[1];
      const title = getXmlValue(itemXml, "title");
      const link = getXmlValue(itemXml, "link");
      const slug = link.split("/").filter(Boolean).pop() ?? "";
      const rawDescription = getXmlValue(itemXml, "description");
      const brief = rawDescription
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 180);
      const parsedDate = getXmlValue(itemXml, "pubDate");
      const dateAdded = Number.isNaN(Date.parse(parsedDate))
        ? new Date(0).toISOString()
        : parsedDate;
      const coverImage =
        itemXml.match(/<enclosure\s+url="([^"]+)"/)?.[1] ??
        itemXml.match(/<media:content\s+url="([^"]+)"/)?.[1];

      if (title && slug) {
        posts.push({
          id: slug,
          title,
          brief,
          slug,
          dateAdded,
          coverImage,
          readTime: Math.max(2, Math.ceil(rawDescription.split(/\s+/).length / 220)),
          responseCount: 0,
        });
      }
    }

    return {
      posts: posts.slice(0, limit),
      pageInfo: { hasNextPage: posts.length > limit, endCursor: null },
      totalPosts: posts.length,
    };
  } catch {
    return {
      posts: [] as BlogPost[],
      pageInfo: { hasNextPage: false, endCursor: null },
      totalPosts: 0,
    };
  }
});

export const fetchBlogPost = cache(async (slug: string) => {
  const { posts } = await fetchBlogPosts(50);
  const post = posts.find((item) => item.slug === slug);
  if (!post) throw new Error("Post not found");
  return post;
});
