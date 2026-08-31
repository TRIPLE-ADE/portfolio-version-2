import { Suspense } from "react";
import { AboutSection } from "@/components/about";
import BlogSection from "@/components/blog";
import { ContactSection } from "@/components/contact";
import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";
import SkillsSection from "@/components/skills";

function WritingFallback() {
  return (
    <section className="section-block border-t" aria-label="Loading articles">
      <div className="page-shell">
        <div className="h-8 w-40 animate-pulse rounded bg-muted" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-48 animate-pulse rounded-lg bg-muted" />
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
      <SkillsSection />
      <AboutSection />
      <Suspense fallback={<WritingFallback />}>
        <BlogSection />
      </Suspense>
      <ContactSection />
    </>
  );
}
