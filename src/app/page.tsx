import { Navbar } from "@/components/layout/Navbar";
import { CoursesSection } from "@/components/sections/courses/CoursesSection";
import { Hero } from "@/components/sections/hero/Hero";
import { LogoStrip } from "@/components/sections/logo-strip/LogoStrip";
import { LearningPaths } from "@/components/sections/learning-paths/LearningPaths";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <CoursesSection />
        <LearningPaths />
      </main>
    </>
  );
}
