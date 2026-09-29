import Image from "next/image";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { heroContent, heroShapes } from "@/data/hero";
import { enter, floating } from "@/lib/motion";
import { cn, HERO_ANCHOR_Y, uw, ux, uy } from "@/lib/utils";

// Cards show from tablet up, at 75% size until lg
const cardWrap = "hero-enter absolute z-20 hidden md:block";
const cardScale = "origin-top-left md:scale-75 lg:scale-100";

export function HeroDecor() {
  const { category, progress, students } = heroContent;

  return (
    <>
      {heroShapes.map((shape, i) => {
        // Shapes beside the heading would overlap the text on small screens
        const besideHeading = shape.top + shape.height / 2 < HERO_ANCHOR_Y;
        const delay = 0.6 + i * 0.08;

        return (
          <div
            key={shape.src}
            className={cn(
              "hero-enter absolute z-20",
              besideHeading && "hidden lg:block",
            )}
            style={{
              ...enter({ delay, rise: 0, scale: 0.8 }),
              left: ux(shape.left),
              top: uy(shape.top),
              width: uw(shape.width),
            }}
          >
            <div
              className="hero-float"
              style={floating({
                delay: delay + 0.9,
                amplitude: 10 + (i % 3) * 4,
                duration: 4.5 + i * 0.6,
                rotate: i % 2 ? 4 : -4,
              })}
            >
              <Image
                src={shape.src}
                alt=""
                aria-hidden
                width={shape.width}
                height={shape.height}
                loading="eager"
                className="h-auto w-full max-w-none"
              />
            </div>
          </div>
        );
      })}

      <div
        className={cardWrap}
        style={{
          ...enter({ delay: 1, rise: 24, scale: 0.92 }),
          left: ux(404),
          top: uy(639),
        }}
      >
        <div
          className="hero-float"
          style={floating({ delay: 1.9, amplitude: 6, duration: 5.2 })}
        >
          <FloatingCard className={cn("whitespace-nowrap", cardScale)}>
            <p className="text-label-m font-medium text-neutral-950">
              {category.title}
            </p>
            <p className="flex items-center gap-2 text-body-xs text-neutral-400">
              <span>{category.courses}</span>
              <span className="text-[10px] leading-[1.5]">•</span>
              <span>{category.students}</span>
            </p>
          </FloatingCard>
        </div>
      </div>

      <div
        className={cardWrap}
        style={{
          ...enter({ delay: 1.15, rise: 24, scale: 0.92 }),
          left: ux(842),
          top: uy(651),
        }}
      >
        <div
          className="hero-float"
          style={floating({ delay: 2.3, amplitude: 7, duration: 5.8 })}
        >
          <ProgressCard
            label={progress.label}
            value={progress.value}
            className={cardScale}
          />
        </div>
      </div>

      <div
        className={cardWrap}
        style={{
          ...enter({ delay: 1.3, rise: 24, scale: 0.92 }),
          left: ux(328),
          top: uy(837),
        }}
      >
        <div
          className="hero-float"
          style={floating({ delay: 2.7, amplitude: 6, duration: 5.5 })}
        >
          <StudentsCard {...students} className={cardScale} />
        </div>
      </div>
    </>
  );
}
