import Image from "next/image";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { heroContent, heroShapes } from "@/data/hero";
import { cn, HERO_ANCHOR_Y, uw, ux, uy } from "@/lib/utils";

// Cards show from tablet up, at 75% size until lg
const cardBase =
  "absolute z-20 hidden origin-top-left md:scale-75 lg:scale-100";

export function HeroDecor() {
  const { category, progress, students } = heroContent;

  return (
    <>
      {heroShapes.map((shape) => {
        // Shapes beside the heading would overlap the text on small screens
        const besideHeading = shape.top + shape.height / 2 < HERO_ANCHOR_Y;

        return (
          <Image
            key={shape.src}
            src={shape.src}
            alt=""
            aria-hidden
            width={shape.width}
            height={shape.height}
            className={cn(
              "absolute z-20 h-auto max-w-none",
              besideHeading && "hidden lg:block",
            )}
            style={{
              left: ux(shape.left),
              top: uy(shape.top),
              width: uw(shape.width),
            }}
          />
        );
      })}

      <FloatingCard
        className={cn(cardBase, "whitespace-nowrap md:block")}
        style={{ left: ux(404), top: uy(639) }}
      >
        <p className="text-label-m font-medium text-neutral-950">
          {category.title}
        </p>
        <p className="flex items-center gap-2 text-body-xs text-neutral-400">
          <span>{category.courses}</span>
          <span className="text-[10px] leading-[1.5]">•</span>
          <span>{category.students}</span>
        </p>
      </FloatingCard>

      <ProgressCard
        label={progress.label}
        value={progress.value}
        className={cn(cardBase, "md:flex")}
        style={{ left: ux(842), top: uy(651) }}
      />

      <StudentsCard
        {...students}
        className={cn(cardBase, "md:flex")}
        style={{ left: ux(328), top: uy(837) }}
      />
    </>
  );
}
