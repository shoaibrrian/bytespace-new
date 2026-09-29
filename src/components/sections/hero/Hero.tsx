import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { heroContent, heroVisual } from "@/data/hero";
import { enter } from "@/lib/motion";
import { uw, ux, uy } from "@/lib/utils";
import { HeroDecor } from "./HeroDecor";
import { HeroReadyGate } from "./HeroReadyGate";
import { HeroSearch } from "./HeroSearch";

export function Hero() {
  const { person, background } = heroVisual;

  return (
    <div className="@container">
      <HeroReadyGate className="hero-scale relative isolate overflow-hidden bg-primary-800 bg-grid lg:hero-height">
        <Container className="relative z-30 pt-32 text-center lg:pt-[172px]">
          <div className="hero-enter" style={enter({ delay: 0.1 })}>
            <h1 className="mx-auto max-w-[935px] text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-white sm:text-6xl lg:text-heading-l">
              {heroContent.title}
            </h1>
          </div>
          <div
            className="hero-enter mt-6 lg:mt-8"
            style={enter({ delay: 0.25 })}
          >
            <p className="mx-auto max-w-[819px] text-body-l text-neutral-100">
              {heroContent.description}
            </p>
          </div>
          <div
            className="hero-enter mt-8 lg:mt-14"
            style={enter({ delay: 0.4 })}
          >
            <HeroSearch placeholder={heroContent.searchPlaceholder} />
          </div>
        </Container>

        {/* Visual stage: in flow below lg, covers the whole hero at lg */}
        <div className="pointer-events-none relative mt-8 h-[calc(510*var(--u))] [--y0:0px] lg:absolute lg:inset-0 lg:mt-0 lg:h-auto lg:[--y0:514px]">
          <div
            className="hero-enter absolute z-0"
            style={{
              ...enter({ delay: 0.2, rise: 80, duration: 1.1 }),
              left: ux(background.left),
              top: uy(background.top),
              width: uw(background.width),
            }}
          >
            <Image
              src={background.src}
              alt=""
              aria-hidden
              width={background.width}
              height={background.height}
              loading="eager"
              className="h-auto w-full max-w-none"
            />
          </div>

          <div
            className="hero-enter absolute z-10"
            style={{
              ...enter({ delay: 0.5, rise: 60, duration: 1 }),
              left: ux(person.left),
              top: uy(person.top),
              width: uw(person.width),
            }}
          >
            <Image
              src={person.src}
              alt="Smiling student with headphones holding a laptop"
              width={person.width}
              height={person.height}
              priority
              className="h-auto w-full max-w-none"
            />
          </div>

          <HeroDecor />
        </div>
      </HeroReadyGate>
    </div>
  );
}
