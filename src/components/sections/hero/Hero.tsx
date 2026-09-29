import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { heroContent, heroVisual } from "@/data/hero";
import { uw, ux, uy } from "@/lib/utils";
import { HeroDecor } from "./HeroDecor";
import { HeroSearch } from "./HeroSearch";

export function Hero() {
  const { person, background } = heroVisual;

  return (
    <div className="@container">
      <section className="hero-scale relative isolate overflow-hidden bg-primary-800 bg-grid lg:hero-height">
        <Container className="relative z-30 pt-32 text-center lg:pt-[172px]">
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

        {/* Visual stage: in flow below lg, covers the whole hero at lg */}
        <div className="pointer-events-none relative mt-8 h-[calc(510*var(--u))] [--y0:0px] lg:absolute lg:inset-0 lg:mt-0 lg:h-auto lg:[--y0:514px]">
          <Image
            src={background.src}
            alt=""
            aria-hidden
            width={background.width}
            height={background.height}
            className="absolute z-0 h-auto max-w-none"
            style={{
              left: ux(background.left),
              top: uy(background.top),
              width: uw(background.width),
            }}
          />
          <Image
            src={person.src}
            alt="Smiling student with headphones holding a laptop"
            width={person.width}
            height={person.height}
            priority
            className="absolute z-10 h-auto max-w-none"
            style={{
              left: ux(person.left),
              top: uy(person.top),
              width: uw(person.width),
              clipPath: "inset(20px 0 0 0)",
            }}
          />
          <HeroDecor />
        </div>
      </section>
    </div>
  );
}
