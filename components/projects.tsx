"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { GlowingEffect } from "./ui/glowing-effect";
import { Card } from "./ui/card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 w-full max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60"
        >
          Case Studies & Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl"
        >
          A selection of high-impact products and digital solutions where I&apos;ve solved complex
          technical challenges and created meaningful value.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
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
            <Card className="group relative h-full overflow-hidden transition-all hover:border-primary hover:shadow-lg border-0.75 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        asChild
                        size="icon"
                        variant="secondary"
                        className="rounded-full shadow-lg"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button asChild size="icon" className="rounded-full shadow-lg">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title} (opens in new tab)`}
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  aria-label={`View case study for ${project.title}`}
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <Button
                    asChild
                    variant="link"
                    className="p-0 h-auto text-primary font-semibold hover:gap-2 transition-all opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      aria-label={`View full case study for ${project.title}`}
                    >
                      View Full Case Study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
