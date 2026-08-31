import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { fetchBlogPosts } from "@/lib/hashnode";
import { formatDate } from "@/lib/utils";

export default async function BlogSection() {
  const { posts } = await fetchBlogPosts(3);

  return (
    <section id="writing" className="section-block border-t bg-card/55">
      <div className="page-shell">
        <div className="flex flex-col gap-6 border-b pb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label text-primary">Writing</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tighter sm:text-6xl">
              Notes from the work.
            </h2>
          </div>
          <a
            href="https://tripletech.hashnode.dev"
            target="_blank"
            rel="noreferrer"
            className="text-link inline-flex items-center gap-2 self-start font-bold sm:self-auto"
          >
            Browse all articles
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        {posts.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.map((post, index) => (
              <a
                key={post.id}
                href={"https://tripletech.hashnode.dev/" + post.slug}
                target="_blank"
                rel="noreferrer"
                className="lift-on-hover group flex min-h-96 flex-col overflow-hidden rounded-2xl border bg-card"
              >
                <div className="relative aspect-video overflow-hidden border-b bg-secondary">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="article-image object-cover"
                    />
                  ) : (
                    <div className="paper-grid absolute inset-0 bg-primary/8" aria-hidden="true" />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="label text-muted-foreground">Article 0{index + 1}</span>
                    <ArrowUpRight className="arrow-nudge size-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold tracking-tight">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {post.brief}
                  </p>
                  <time
                    className="label mt-auto pt-8 text-muted-foreground"
                    dateTime={post.dateAdded}
                  >
                    {formatDate(post.dateAdded)}
                  </time>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border bg-card p-8 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-extrabold">The feed is taking a break.</h3>
              <p className="mt-2 text-muted-foreground">
                The full writing archive is still available directly on Hashnode.
              </p>
            </div>
            <a
              href="https://tripletech.hashnode.dev"
              target="_blank"
              rel="noreferrer"
              className="pressable mt-6 inline-flex rounded-xl bg-foreground px-5 py-3 text-sm font-bold text-background sm:mt-0"
            >
              Open the archive
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
