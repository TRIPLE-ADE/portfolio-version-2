import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = index === 0;
  const externalLinks = [
    project.link ? { label: "Live product", href: project.link } : null,
    project.store ? { label: "Google Play", href: project.store } : null,
    project.github ? { label: "Source", href: project.github } : null,
    project.result ? { label: "Official result", href: project.result } : null,
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <article
      className={
        "lift-on-hover group relative overflow-hidden rounded-2xl border bg-card " +
        (isFeatured ? "lg:col-span-2" : "")
      }
    >
      <Link
        href={"/projects/" + project.id}
        className={
          "relative block overflow-hidden bg-secondary " +
          (isFeatured ? "aspect-16/8" : "aspect-16/10")
        }
        aria-label={"Read the " + project.title + " case study"}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes={
              isFeatured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"
            }
            className="project-image object-cover"
          />
        ) : (
          <div className="relative flex h-full items-end overflow-hidden p-6 sm:p-8">
            <div className="paper-grid absolute inset-0" aria-hidden="true" />
            <div className="relative max-w-md">
              <p className="label text-primary">Project system</p>
              <p className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {project.title}
              </p>
            </div>
          </div>
        )}
      </Link>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="label text-muted-foreground">
            0{index + 1} · {project.context}
          </p>
          <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground">
            {project.status}
          </span>
        </div>

        <div className={isFeatured ? "mt-8 grid gap-7 lg:grid-cols-[1fr_0.7fr]" : "mt-7"}>
          <div>
            <Link
              href={"/projects/" + project.id}
              className="group/title inline-flex items-start gap-2"
            >
              <h3 className="text-2xl font-extrabold tracking-[-0.035em] sm:text-3xl">
                {project.title}
              </h3>
              <ArrowUpRight
                className="arrow-nudge mt-1 size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
            </Link>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{project.description}</p>
            {project.recognition && (
              <p className="mt-5 flex items-start gap-2 text-sm font-bold text-primary">
                <Award className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{project.recognition}</span>
              </p>
            )}
          </div>

          <div className={isFeatured ? "lg:border-l lg:pl-7" : "mt-6 border-t pt-5"}>
            <p className="label text-muted-foreground">Contribution</p>
            <p className="mt-2 font-bold">{project.role}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.outcome} · {project.outcomeLabel}
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-end justify-between gap-5 border-t pt-5">
          <ul className="flex flex-wrap gap-2" aria-label={project.title + " technologies"}>
            {project.tags.slice(0, isFeatured ? 5 : 4).map((tag) => (
              <li key={tag} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold">
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {externalLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="pressable inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-bold text-primary"
              >
                {link.label}
                <ExternalLink className="size-4" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-block">
      <div className="page-shell">
        <div className="grid gap-8 border-b pb-10 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="label text-primary">Selected work</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tighter sm:text-6xl">
              Proof over promises.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Products shaped by privacy constraints, sensitive user journeys, and compressed delivery
            timelines. Each case study explains the decisions—not just the technology.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
