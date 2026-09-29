import { Navbar } from "@/components/layout/Navbar";
import { CoursesSection } from "@/components/sections/courses/CoursesSection";
import { CtaSection } from "@/components/sections/cta/CtaSection";
import { GrowthSection } from "@/components/sections/growth/GrowthSection";
import { Hero } from "@/components/sections/hero/Hero";
import { LearningPaths } from "@/components/sections/learning-paths/LearningPaths";
import { LogoStrip } from "@/components/sections/logo-strip/LogoStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <CoursesSection />
        <LearningPaths />
        <GrowthSection />
        <CtaSection />
      </main>
    </>
  );
}
