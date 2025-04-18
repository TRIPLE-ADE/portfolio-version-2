import dynamic from "next/dynamic";

// Dynamic imports (lazy loading)
const HeroSection = dynamic(() => import("@/components/hero"));
const AboutSection = dynamic(() => import("@/components/about").then((mod) => mod.AboutSection));
const SkillsSection = dynamic(() => import("@/components/skills"));
const ContactSection = dynamic(() => import("@/components/contact").then((mod) => mod.ContactSection));

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-20 pb-20">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
