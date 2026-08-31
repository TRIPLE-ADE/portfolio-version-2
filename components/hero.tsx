import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download, MapPin } from "lucide-react";

const proofPoints = [
  { value: "100K+", label: "GT e-Token Plus reach · product contributed to" },
  { value: "3rd Place", label: "ICP WCHL25 Nigeria Funnel · Clypr" },
  { value: "100% offline", label: "Private AI Note core workflows" },
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36">
      <div
        className="paper-grid pointer-events-none absolute inset-x-0 top-0 h-176"
        aria-hidden="true"
      />
      <div className="page-shell relative grid min-h-[calc(100svh-9rem)] items-center gap-14 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <div
            className="hero-enter label flex items-center gap-2 text-primary"
            style={{ "--delay": "40ms" } as React.CSSProperties}
          >
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Abdulrasheed Abdulsalam
          </div>

          <h1
            className="hero-enter mt-6 max-w-4xl text-[clamp(3rem,8vw,6.7rem)] leading-[0.94] font-extrabold tracking-[-0.065em]"
            style={{ "--delay": "100ms" } as React.CSSProperties}
          >
            I engineer reliable products for <span className="text-primary">web and mobile.</span>
          </h1>

          <p
            className="hero-enter mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
            style={{ "--delay": "160ms" } as React.CSSProperties}
          >
            Frontend and mobile engineer building user-focused products with React, Next.js, React
            Native, Expo, and TypeScript shaped by real constraints and built to ship.
          </p>

          <div
            className="hero-enter mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-muted-foreground"
            style={{ "--delay": "220ms" } as React.CSSProperties}
          >
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Lagos, Nigeria · UTC+1
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
            <span>Open to global remote opportunities</span>
          </div>

          <div
            className="hero-enter mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ "--delay": "280ms" } as React.CSSProperties}
          >
            <Link
              href="/#projects"
              className="pressable inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-bold text-background hover:bg-primary hover:text-primary-foreground"
            >
              Explore selected work
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href="/Abdulrasheed_Abdulsalam_Software_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pressable inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border bg-card px-6 py-3 text-sm font-bold hover:border-primary hover:text-primary"
            >
              View résumé
              <Download className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <div
            className="hero-enter mt-10 flex items-center gap-5 text-sm font-semibold"
            style={{ "--delay": "340ms" } as React.CSSProperties}
          >
            <a
              className="text-link"
              href="https://github.com/TRIPLE-ADE"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/rasheed-abdulsalam"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a className="text-link" href="mailto:abdulrasheedabdulsalam13603@gmail.com">
              Email
            </a>
          </div>
        </div>

        <div
          className="hero-enter relative mx-auto w-full max-w-lg lg:justify-self-end"
          style={{ "--delay": "180ms" } as React.CSSProperties}
        >
          <div
            className="absolute -inset-4 -rotate-2 rounded-4xl border-2 border-primary/30"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[1.7rem] border bg-card p-3 shadow-[0_32px_80px_-48px_hsl(var(--foreground)/0.7)]">
            <div className="relative aspect-4/5 overflow-hidden rounded-[1.2rem] bg-secondary">
              <Image
                src="/rasheednw.PNG"
                alt="Abdulrasheed Abdulsalam, frontend and mobile engineer"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/30 to-transparent p-6 pt-24 text-white">
                <p className="label text-white/70">Engineering focus</p>
                <p className="mt-2 text-xl font-bold">
                  Reliable fintech, web, and mobile products.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 pt-4 pb-1">
              <span className="label text-muted-foreground">Product engineer</span>
              <Link
                href="/projects/private-ai-note"
                className="pressable rounded-full bg-primary p-3 text-primary-foreground"
                aria-label="Read the Private AI Note case study"
              >
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y bg-card/60">
        <dl className="page-shell grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {proofPoints.map((item) => (
            <div key={item.label} className="flex items-baseline gap-4 px-1 py-6 sm:px-6">
              <dt className="order-2 text-sm font-semibold text-muted-foreground">{item.label}</dt>
              <dd className="text-2xl font-extrabold tracking-tight text-primary">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default HeroSection;
