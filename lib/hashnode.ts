// Hashnode API utilities

// The GraphQL endpoint for Hashnode API v2
const HASHNODE_API = "https://gql.hashnode.com";

// Your Hashnode username
const HASHNODE_USERNAME = "tripletech";

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
 * Fetch all blog posts from Hashnode
 */

/* Fetch blog posts from Hashnode
 * @param limit Optional number of posts to fetch (default: 20)
 */
export async function fetchBlogPosts(limit: number = 20, after = null) {
  const query = `
    query GetUserArticles($host: String!, $first: Int!, $after: String) {
      publication(host: $host) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              brief
              slug
              publishedAt
              coverImage {
                url
              }
              readTimeInMinutes
              reactionCount
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
          totalDocuments
        }
      }
    }
  `;

  try {
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          host: `${HASHNODE_USERNAME}.hashnode.dev`,
          first: limit,
          after: after,
        },
      }),
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const { data } = await response.json();

    if (
      !data ||
      !data.publication ||
      !data.publication.posts ||
      !data.publication.posts.edges
    ) {
      console.error("Unexpected API response structure:", data);
      return {
        posts: [],
        pageInfo: { hasNextPage: false, endCursor: null },
        totalPosts: 0,
      };
    }

    // Define the type for edges
    type Edge = {
      node: {
        id: string;
        title: string;
        brief: string;
        slug: string;
        publishedAt: string;
        coverImage?: { url: string | null };
        readTimeInMinutes?: number;
        reactionCount?: number;
      };
    };

    // Map the data to our expected format
    const posts = data.publication.posts.edges.map(({ node }: Edge) => ({
      id: node.id,
      title: node.title,
      brief: node.brief,
      slug: node.slug,
      dateAdded: node.publishedAt,
      coverImage: node.coverImage?.url || null,
      readTime: node.readTimeInMinutes || 5,
      responseCount: node.reactionCount || 0,
    }));

    return {
      posts,
      pageInfo: data.publication.posts.pageInfo,
      totalPosts: data.publication.posts.totalDocuments || 0,
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      posts: [],
      pageInfo: { hasNextPage: false, endCursor: null },
      totalPosts: 0,
    };
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function fetchBlogPost(slug: string) {
  console.log("Fetching blog post with slug:", slug);
  // Updated query for Hashnode API v2
  const query = `
    query GetPostBySlug($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id
          title
          content {
            html
            markdown
          }
          brief
          slug
          publishedAt
          coverImage {
            url
          }
          readTimeInMinutes
          reactionCount
        }
      }
    }
  `;

  try {
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          host: `${HASHNODE_USERNAME}.hashnode.dev`,
          slug,
        },
      }),
      next: { revalidate: 3600 }, // Revalidate every hour
    });


    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const { data } = await response.json();

    // Check if we have the expected data structure
    if (!data || !data.publication || !data.publication.post) {
      console.error(
        "Unexpected API response structure or post not found:",
        data
      );
      throw new Error("Post not found");
    }

    const post = data.publication.post;

    return {
      id: post.id,
      title: post.title,
      content: post.content?.markdown || "",
      brief: post.brief,
      slug: post.slug,
      dateAdded: post.publishedAt,
      coverImage: post.coverImage?.url || null,
      readTime: post.readTimeInMinutes || 5,
      responseCount: post.reactionCount || 0,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}
