import { MapPin } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Offline-first resilience",
    description:
      "Local caching, optimistic mutations, and resilient state sync shaped for unstable real-world connectivity.",
  },
  {
    number: "02",
    title: "Sub-100ms perceived speed",
    description:
      "Zero layout shift, proactive prefetching, and fluid 60fps touch interactions on web and mobile.",
  },
  {
    number: "03",
    title: "Predictable system boundaries",
    description:
      "Clean separation of UI from server state, strict TypeScript contracts, and maintainable component APIs.",
  },
  {
    number: "04",
    title: "Accessibility by default",
    description:
      "Tested contrast standards, complete keyboard navigation, and first-class native screen-reader parity.",
  },
];

const experience = [
  // {
  //   company: "PinovX Labs",
  //   role: "Frontend Engineer",
  //   period: "Feb 2026 — Present",
  //   summary:
  //     "Modernising customer-facing and internal fintech platforms, delivering authenticated OTC and onboarding journeys, and strengthening testing, accessibility, and frontend architecture.",
  // },
  {
    company: "ITR Integrated Technologies",
    role: "React Native Engineer",
    period: "Oct 2025 — Present",
    summary:
      "Delivering reusable mobile architecture, onboarding, authentication, document, and API workflows for Jaiz Bank client applications.",
  },
  {
    company: "GTCO",
    role: "Software Engineer Intern",
    period: "Jun — Aug 2025",
    summary:
      "Contributed across two agile product teams, rebuilding GAPS-Lite workflows in React Native and delivering API and MFA functionality for GT e-Token Plus.",
  },
  {
    company: "To-Go Mobility",
    role: "Frontend Engineer",
    period: "May 2024 — Jan 2025",
    summary: "Reduced friction across ride discovery, pricing, and booking journeys.",
  },
  {
    company: "SwitchHive",
    role: "Frontend Engineer",
    period: "Dec 2023 — Apr 2024",
    summary: "Delivered a tested operations dashboard for a crypto-commerce platform.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-block">
      <div className="page-shell grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b pb-5">
              <span className="label flex items-center gap-2 text-primary">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Engineering principles
              </span>
              <span className="label text-muted-foreground">Standards</span>
            </div>

            <p className="mt-5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Built for real constraints, not just happy paths.
            </p>

            <div className="mt-6 space-y-5">
              {principles.map((principle) => (
                <div key={principle.number} className="flex gap-4">
                  <span className="label mt-0.5 text-xs font-mono font-bold text-primary">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{principle.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-5">
              <p className="label text-xs text-muted-foreground">Core runtime stack</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {["React", "Next.js", "React Native", "Expo", "TypeScript"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border bg-secondary/60 px-2.5 py-1 text-xs font-semibold text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="label mt-4 flex items-center gap-1.5 px-1 text-xs text-muted-foreground">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            Lagos, Nigeria (UTC+1) · Collaborating globally
          </p>
        </div>

        <div>
          <p className="label text-primary">About & experience</p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter sm:text-6xl">
            Calm interfaces.
            <br />
            Serious engineering.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              I work across product, design, and engineering to turn ambiguous ideas into focused,
              dependable experiences. My current work spans fintech and banking products alongside
              independent mobile and web development.
            </p>
            <p>
              I care about the details users feel but rarely name: useful defaults, resilient
              offline paths, clear feedback, accessible interaction, and code that another engineer
              can own.
            </p>
          </div>

          <div className="mt-12 border-t">
            {experience.map((item) => (
              <article
                key={item.company}
                className="grid gap-3 border-b py-6 sm:grid-cols-[0.9fr_1.4fr_auto] sm:items-start"
              >
                <div>
                  <h3 className="font-extrabold">{item.company}</h3>
                  <p className="mt-1 text-sm text-primary">{item.role}</p>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{item.summary}</p>
                <time className="label text-muted-foreground">{item.period}</time>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
