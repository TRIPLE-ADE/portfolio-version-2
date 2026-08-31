import { Suspense } from "react";
import { AboutSection } from "@/components/about";
import BlogSection from "@/components/blog";
import { ContactSection } from "@/components/contact";
import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";
import { RecognitionSection } from "@/components/recognition";
import SkillsSection from "@/components/skills";

function WritingFallback() {
  return (
    <section
      className="section-block border-t"
      aria-label="Loading articles"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="page-shell">
        <span className="sr-only">Loading articles…</span>
        <div className="h-8 w-40 rounded bg-muted" aria-hidden="true" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-48 rounded-lg bg-muted" aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <RecognitionSection />
      <SkillsSection />
      <AboutSection />
      <Suspense fallback={<WritingFallback />}>
        <BlogSection />
      </Suspense>
      <ContactSection />
    </>
  );
}
