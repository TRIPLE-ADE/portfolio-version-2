import { Award, GitPullRequest, Users } from "lucide-react";

const groups = [
  {
    icon: Award,
    title: "Recognition",
    items: [
      {
        name: "ICP WCHL25 Nigeria Funnel",
        detail: "Third Place with Clypr at the national round.",
      },
      {
        name: "Squad Hackathon 2.0",
        detail: "Smart School Finance Hub advanced to the ten-team presentation stage.",
      },
      {
        name: "Workforce Integrity Engine",
        detail: "Advanced through the technical rounds to the top-20 team stage.",
      },
      {
        name: "HNG X",
        detail:
          "Progressed among the final 500 participants from an initial cohort of about 22,000.",
      },
    ],
  },
  {
    icon: Users,
    title: "Community",
    items: [
      {
        name: "GDG on Campus FUT Minna",
        detail: "Bootcamp Lead and Co-organiser, 2024–2025.",
      },
      {
        name: "Build with AI 2025",
        detail: "Bootcamp Lead and Co-organiser.",
      },
      {
        name: "DevFest Minna 2025",
        detail: "Volunteer software developer and primary frontend contributor.",
      },
      {
        name: "VS Code Dev Days Minna",
        detail: "Event facilitator.",
      },
    ],
  },
  {
    icon: GitPullRequest,
    title: "Open source",
    items: [
      {
        name: "Dottie",
        detail: "Contributed frontend improvements to a public product codebase.",
      },
      {
        name: "CopilotKit",
        detail: "Developed a financial-adviser demo and supporting contribution.",
      },
      {
        name: "Tublian",
        detail:
          "Built a resume-generation prototype adopted as a foundation for an upstream feature.",
      },
      {
        name: "DX DevRel Guides",
        detail: "Collaborated on developer-facing guidance and learning resources.",
      },
    ],
  },
];

export function RecognitionSection() {
  return (
    <section className="section-block border-t bg-card/55" aria-labelledby="recognition-title">
      <div className="page-shell">
        <div className="grid gap-7 border-b pb-9 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="label text-primary">Beyond product delivery</p>
            <h2
              id="recognition-title"
              className="mt-4 text-4xl font-extrabold tracking-tighter sm:text-6xl"
            >
              Recognition and contribution.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Selected outcomes from team competitions, developer communities, and public technical
            collaboration.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border bg-border lg:grid-cols-3">
          {groups.map((group) => {
            const Icon = group.icon;

            return (
              <article key={group.title} className="bg-background p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Icon className="size-6 text-primary" strokeWidth={1.8} aria-hidden="true" />
                  <h3 className="text-xl font-extrabold tracking-tight">{group.title}</h3>
                </div>
                <ul className="mt-7 space-y-6">
                  {group.items.map((item) => (
                    <li key={item.name} className="border-t pt-5 first:border-t-0 first:pt-0">
                      <p className="font-bold">{item.name}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
