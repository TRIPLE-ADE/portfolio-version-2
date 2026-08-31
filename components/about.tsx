import Image from "next/image";

const experience = [
  {
    company: "Guaranty Trust",
    role: "Software Engineer",
    period: "Jun — Aug 2025",
    summary: "Rebuilt mobile banking workflows in React Native and improved API-state performance.",
  },
  {
    company: "To-Go Mobility",
    role: "Frontend / Mobile Engineer",
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
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border bg-secondary">
            <Image
              src="/rasheed.PNG"
              alt="Abdulrasheed Abdulsalam"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover"
            />
          </div>
          <p className="label mt-4 text-muted-foreground">
            Lagos, Nigeria · Collaborating globally
          </p>
        </div>

        <div>
          <p className="label text-primary">About & experience</p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.05em] sm:text-6xl">
            Calm interfaces.
            <br />
            Serious engineering.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              I work across product, design, and engineering to turn ambiguous ideas into focused,
              dependable experiences. My background spans banking, mobility, healthcare, and
              privacy-first AI.
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
