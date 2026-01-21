"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage() {
    const params = useParams();
    const router = useRouter();
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                    <Button onClick={() => router.push("/")}>Back to Home</Button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-12"
            >
                <Link href="/#projects">
                    <Button variant="ghost" className="gap-2 -ml-4 text-muted-foreground hover:text-primary">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Button>
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative aspect-square md:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        {project.title}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
                        &quot;{project.longDescription}&quot;
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Button className="gap-2 shadow-lg rounded-full px-8">
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </Button>
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="gap-2 rounded-full px-8 shadow-sm">
                                    <Github className="w-4 h-4" />
                                    Source Code
                                </Button>
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-invert prose-primary max-w-none 
                prose-headings:font-bold prose-headings:tracking-tight 
                prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-8 prose-h2:border-b prose-h2:pb-4 prose-h2:border-white/10
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground
                prose-li:text-lg prose-li:text-muted-foreground prose-li:my-2
                prose-strong:text-foreground prose-strong:font-semibold
                prose-hr:border-white/10 prose-hr:my-8"
            >
                <ReactMarkdown>{project.content}</ReactMarkdown>
            </motion.div>
        </main>
    );
}
