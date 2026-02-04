import { Suspense } from "react";
import { fetchBlogPosts } from "@/lib/hashnode";
import dynamic from "next/dynamic";
import HeroSection from "@/components/hero";

// Dynamic imports (lazy loading)
const AboutSection = dynamic(() => import("@/components/about").then((mod) => mod.AboutSection));
const SkillsSection = dynamic(() => import("@/components/skills"));
const ContactSection = dynamic(() => import("@/components/contact").then((mod) => mod.ContactSection));
const BlogPreviewSection = dynamic(() => import("@/components/blog"));
const ProjectsSection = dynamic(() => import("@/components/projects"));

export default async function Home() {
  const { posts } = await fetchBlogPosts(6)
  return (
    <div className="flex items-center justify-center flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading Blog...</div>}>
        <BlogPreviewSection posts={posts} />
      </Suspense>
      <ContactSection />
    </div>
  );
}
