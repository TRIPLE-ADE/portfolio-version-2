import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/projects";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Project Archive",
  description:
    "Selected product, frontend, mobile, fintech, AI, and hackathon work by Abdulrasheed Abdulsalam.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Project Archive — Abdulrasheed Abdulsalam",
    description: "Selected product, frontend, mobile, fintech, AI, and hackathon case studies.",
    url: "/projects",
    type: "website",
    images: [{ url: "/projects/private-ai-note.webp", alt: "Abdulrasheed's project archive" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Archive — Abdulrasheed Abdulsalam",
    description: "Selected product, frontend, mobile, fintech, AI, and hackathon case studies.",
    images: ["/projects/private-ai-note.webp"],
  },
};

export default function ProjectArchivePage() {
  return (
    <section className="page-shell pt-36 pb-20 sm:pt-40 sm:pb-28">
      <Link
        href="/#projects"
        className="pressable inline-flex items-center gap-2 rounded-lg py-2 text-sm font-bold text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to selected work
      </Link>

      <div className="mt-12 grid gap-8 border-b pb-10 lg:grid-cols-[0.75fr_1fr] lg:items-end">
        <div>
          <p className="label text-primary">Project archive</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tighter sm:text-7xl">
            All project work.
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
          Production releases, independent builds, capstones, and competition prototypes—with each
          project clearly labelled by maturity and contribution.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} compact />
        ))}
      </div>
    </section>
  );
}
