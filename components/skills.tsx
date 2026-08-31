import { Braces, Gauge, Layers3, Smartphone } from "lucide-react";

const capabilities = [
  {
    icon: Smartphone,
    title: "Mobile product engineering",
    description:
      "Cross-platform applications built around offline reliability, native constraints, and responsive interaction.",
    tools: ["React Native", "Expo", "EAS", "Native modules", "App Stores"],
  },
  {
    icon: Layers3,
    title: "Frontend systems",
    description:
      "Accessible interfaces and component systems that stay maintainable as products and teams grow.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Braces,
    title: "API & data integration",
    description:
      "Reliable server-state, content, authentication, payments, and caching with clear boundaries between UI and services.",
    tools: [
      "React Query",
      "REST APIs",
      "Sanity",
      "Clerk",
      "Stripe",
      "Upstash Redis",
      "Supabase",
      "Appwrite",
    ],
  },
  {
    icon: Gauge,
    title: "Quality & performance",
    description:
      "Measured improvements backed by testing, profiling, caching, and thoughtful delivery workflows.",
    tools: ["Jest", "Playwright", "GitHub Actions", "Web performance"],
  },
];

export function SkillsSection() {
  return (
    <section id="expertise" className="section-block border-y bg-foreground text-background">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="label text-primary">Engineering range</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tighter sm:text-6xl">
              Product thinking,
              <br />
              technical depth.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-background/65 lg:justify-self-end">
            I specialize in frontend and mobile engineering, turning product requirements into
            accessible interfaces and reliable React, Next.js, and React Native systems. My backend
            experience helps me design better integrations and collaborate effectively across the
            stack.
          </p>
        </div>

        <div className="mt-14 grid border-t border-background/20 md:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="border-b border-background/20 py-8 md:px-8 md:odd:border-r md:odd:pl-0"
              >
                <div className="flex items-start justify-between gap-5">
                  <Icon className="size-7 text-primary" strokeWidth={1.7} aria-hidden="true" />
                  <span className="label text-background/35">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-extrabold tracking-tight">{capability.title}</h3>
                <p className="mt-3 max-w-lg leading-7 text-background/60">
                  {capability.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-background/80">
                  {capability.tools.map((tool) => (
                    <li key={tool}>· {tool}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-background/55">
          <span className="font-bold text-background/80">Supporting range:</span> Node.js, PHP,
          Laravel, Linux, and VPS deployment.
        </p>
      </div>
    </section>
  );
}

export default SkillsSection;
