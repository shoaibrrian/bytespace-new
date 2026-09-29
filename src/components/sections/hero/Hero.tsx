import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { heroContent, heroVisual } from "@/data/hero";
import { dx, dy } from "@/lib/utils";
import { HeroDecor } from "./HeroDecor";
import { HeroSearch } from "./HeroSearch";

export function Hero() {
  const { person, background } = heroVisual;

  return (
    <div className="@container">
      <section className="hero-scale relative isolate overflow-hidden bg-primary-800 bg-grid lg:hero-height">
        <Container className="relative z-10 pt-32 text-center lg:pt-[172px]">
          <h1 className="mx-auto max-w-[935px] text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-white sm:text-6xl lg:text-heading-l">
            {heroContent.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[819px] text-body-l text-neutral-100 lg:mt-8">
            {heroContent.description}
          </p>
          <div className="mt-8 lg:mt-14">
            <HeroSearch placeholder={heroContent.searchPlaceholder} />
          </div>
        </Container>

        {/* Ring + person: stacked on mobile, Figma-positioned and scaled on desktop */}
        <div className="relative z-0 mx-auto mt-12 h-[340px] overflow-hidden sm:h-[420px] lg:absolute lg:inset-0 lg:mt-0 lg:h-auto">
          <Image
            src={background.src}
            alt=""
            aria-hidden
            width={background.width}
            height={background.height}
            className="absolute left-1/2 top-6 h-auto w-[130%] max-w-none -translate-x-1/2 sm:w-[110%] lg:left-(--left) lg:top-(--top) lg:w-(--w) lg:translate-x-0"
            style={
              {
                "--left": dx(background.left),
                "--top": dy(background.top),
                "--w": dx(background.width),
              } as React.CSSProperties
            }
          />
          <Image
            src={person.src}
            alt="Smiling student with headphones holding a laptop"
            width={person.width}
            height={person.height}
            priority
            className="shadow-person absolute left-1/2 top-0 h-auto w-[280px] -translate-x-1/2 object-cover sm:w-[360px] lg:left-(--left) lg:top-(--top) lg:h-(--h) lg:w-(--w) lg:translate-x-0"
            style={
              {
                "--left": dx(person.left),
                "--top": dy(person.top),
                "--w": dx(person.width),
                "--h": dx(person.height),
              } as React.CSSProperties
            }
          />
        </div>

        <HeroDecor />
      </section>
    </div>
  );
}
