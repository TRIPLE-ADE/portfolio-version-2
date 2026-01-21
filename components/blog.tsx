"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight, BookOpen } from "lucide-react"
import { Card } from "@/components/ui/card"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { formatDate } from "@/lib/utils"
import { BlogPost } from "@/lib/hashnode"

export default function BlogPreviewSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="flex min-h-screen w-full items-center justify-center py-16 px-4 scroll-mt-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="mt-4 text-muted-foreground">Thoughts and insights on software development, design, technology, AI tools and practical engineering tips.</p>
        </motion.div>

        <div className="mt-16">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts found.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group h-full border p-2 md:rounded-2xl md:p-3"
                >
                  <GlowingEffect
                    blur={0}
                    borderWidth={2}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <Link href={`https://tripletech.hashnode.dev/${post.slug}`} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card className="group relative h-full overflow-hidden transition-all hover:border-primary hover:shadow-lg border-0.75 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={post.coverImage || "/placeholder.svg?height=400&width=600"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6 relative">
                        <div className="relative z-10">
                          <div className="mb-4 flex items-center gap-3">
                            <span className="text-primary">
                              <BookOpen size={24} className="transition-transform group-hover:scale-110" />
                            </span>
                            <time className="text-sm text-muted-foreground">{formatDate(post.dateAdded)}</time>
                          </div>
                          <h4 className="text-xl font-medium line-clamp-2 mb-2">{post.title}</h4>
                          <p className="text-muted-foreground line-clamp-2 text-sm">{post.brief}</p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{post.readTime} min read</span>
                            <span className="text-primary font-medium text-sm flex items-center gap-1 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                              Read more
                              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                          </div>
                        </div>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>

                      {/* Corner indicator */}
                      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden transition-opacity opacity-0 group-hover:opacity-100 duration-300">
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground w-16 h-16 flex items-center justify-center rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300">
                          <ArrowUpRight className="h-4 w-4 -rotate-45" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/blog">
            <Button variant="outline" className="group">
              See all posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div> */}
      </div>
    </section>
  )
}
