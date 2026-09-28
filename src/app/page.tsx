import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/hero/Hero";
import { LogoStrip } from "@/components/sections/logo-strip/LogoStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
      </main>
    </>
  );
}
