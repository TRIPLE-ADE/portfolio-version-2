import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.longDescription ?? project.description,
    alternates: { canonical: "/projects/" + project.id },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: project.image ? [{ url: project.image, alt: project.title }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectIndex = projects.findIndex((item) => item.id === id);

  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const articleContent = project.content?.replace(/^\s*#.*\n/, "").trim() ?? "";
  const externalLinks = [
    project.link ? { label: "Open live product", href: project.link, source: false } : null,
    project.store ? { label: "View on Google Play", href: project.store, source: false } : null,
    project.github ? { label: "View source", href: project.github, source: true } : null,
    project.result ? { label: "View official result", href: project.result, source: false } : null,
  ].filter((link): link is { label: string; href: string; source: boolean } => Boolean(link));

  return (
    <article className="pt-32 sm:pt-36">
      <header className="page-shell py-12 sm:py-16">
        <Link
          href="/#projects"
          className="pressable inline-flex items-center gap-2 rounded-lg py-2 text-sm font-bold text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to selected work
        </Link>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="label text-primary">
              Case study 0{projectIndex + 1} · {project.context}
            </p>
            <h1 className="mt-5 text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-extrabold tracking-[-0.065em]">
              {project.title}
            </h1>
          </div>
          <div>
            <p className="text-xl leading-8 text-muted-foreground">{project.longDescription}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {externalLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    "pressable inline-flex min-h-12 items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold " +
                    (index === 0
                      ? "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
                      : "border bg-card hover:border-primary hover:text-primary")
                  }
                >
                  {link.label}
                  {link.source ? (
                    <GithubIcon className="size-4" aria-hidden="true" />
                  ) : (
                    <ExternalLink className="size-4" aria-hidden="true" />
                  )}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ))}
            </div>
            {project.recognition && (
              <p className="mt-5 border-l-2 border-primary pl-4 text-sm font-bold text-primary">
                Recognition: {project.recognition}
              </p>
            )}
          </div>
        </div>
      </header>

      <div className="page-shell">
        <div className="relative aspect-video overflow-hidden rounded-2xl border bg-secondary">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title + " product interface"}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="object-cover"
            />
          ) : (
            <div className="relative flex h-full items-end p-8 sm:p-12">
              <div className="paper-grid absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <p className="label text-primary">{project.status} project</p>
                <p className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                  {project.title}
                </p>
              </div>
            </div>
          )}
        </div>

        <dl className="grid border-x border-b bg-card sm:grid-cols-3">
          <div className="border-b p-6 sm:border-r sm:border-b-0">
            <dt className="label text-muted-foreground">Role</dt>
            <dd className="mt-2 font-extrabold">{project.role}</dd>
          </div>
          <div className="border-b p-6 sm:border-r sm:border-b-0">
            <dt className="label text-muted-foreground">Primary outcome</dt>
            <dd className="mt-2 font-extrabold">
              {project.outcome} · {project.outcomeLabel}
            </dd>
          </div>
          <div className="p-6">
            <dt className="label text-muted-foreground">Core stack</dt>
            <dd className="mt-2 font-extrabold">{project.tags.slice(0, 3).join(", ")}</dd>
          </div>
        </dl>
      </div>

      <div className="page-shell grid gap-12 py-16 lg:grid-cols-[14rem_1fr] lg:py-24">
        <aside>
          <p className="label text-primary">The project file</p>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Problem, approach, constraints, trade-offs, and delivered outcome.
          </p>
        </aside>
        <div className="prose prose-lg max-w-3xl prose-headings:tracking-[-0.035em] prose-headings:text-foreground prose-h2:mt-14 prose-h2:border-t prose-h2:pt-10 prose-a:text-primary prose-a:decoration-primary/40 prose-a:underline-offset-4 prose-strong:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground dark:prose-invert">
          <ReactMarkdown>{articleContent}</ReactMarkdown>
        </div>
      </div>

      <nav className="border-t" aria-label="More case studies">
        <Link
          href={"/projects/" + nextProject.id}
          className="group page-shell flex items-center justify-between gap-8 py-12 sm:py-16"
        >
          <div>
            <p className="label text-muted-foreground">Next case study</p>
            <p className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl">
              {nextProject.title}
            </p>
          </div>
          <span className="pressable grid size-14 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </span>
        </Link>
      </nav>
    </article>
  );
}
