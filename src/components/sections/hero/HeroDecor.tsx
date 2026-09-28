import Image from "next/image";
import { Star } from "lucide-react";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { heroContent, heroShapes } from "@/data/hero";
import { dx, dy } from "@/lib/utils";

export function HeroDecor() {
  const { category, progress, students } = heroContent;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
      {heroShapes.map((shape) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt=""
          aria-hidden
          width={shape.width}
          height={shape.height}
          className="absolute h-auto max-w-none"
          style={{
            left: dx(shape.left),
            top: dy(shape.top),
            width: dx(shape.width),
          }}
        />
      ))}

      {/* Category card */}
      <FloatingCard
        className="absolute whitespace-nowrap"
        style={{ left: dx(404), top: dy(639) }}
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

      {/* Learning progress card */}
      <FloatingCard
        className="absolute flex w-[232px] flex-col gap-2"
        style={{ left: dx(842), top: dy(651) }}
      >
        <p className="text-label-s font-medium text-neutral-950">
          {progress.label}
        </p>
        <p className="font-heading text-heading-m font-semibold text-neutral-950">
          {progress.value}%
        </p>
        <ProgressBar value={progress.value} />
      </FloatingCard>

      {/* Happy students card */}
      <FloatingCard
        className="absolute flex flex-col gap-2"
        style={{ left: dx(328), top: dy(837) }}
      >
        <div>
          <p className="text-label-m font-medium text-neutral-950">
            {students.title}
          </p>
          <p className="flex items-center gap-1 text-body-xs text-neutral-950">
            {students.rating}
            <span className="text-neutral-400">{students.reviews}</span>
            <Star
              className="size-3.5 fill-secondary-500 text-secondary-500"
              aria-hidden
            />
          </p>
        </div>
        <AvatarGroup avatars={students.avatars} label={students.count} />
      </FloatingCard>
    </div>
  );
}
