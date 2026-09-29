import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { Float } from "@/components/motion/Float";
import { Reveal } from "@/components/motion/Reveal";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { authShowcase as v } from "@/data/auth";
import { courses } from "@/data/courses";
import { heroContent } from "@/data/hero";

// Login variant of CourseCard: lime star, dark avatar badge (theme via CSS variables)
const accentCard =
  "[--avatar-badge-bg:var(--color-neutral-950)] [--avatar-badge-text:white] [&_.lucide-star]:fill-secondary-400 [&_.lucide-star]:text-secondary-400";

export function AuthShowcase() {
  return (
    <ScaledStage width={v.stage.width} height={v.stage.height} className="mx-0">
      <Reveal
        from="left"
        distance={40}
        className={`absolute ${accentCard}`}
        style={{
          left: v.backCard.left,
          top: v.backCard.top,
          width: v.backCard.width,
        }}
      >
        <CourseCard course={courses[1]} />
      </Reveal>

      <Reveal
        distance={40}
        delay={0.15}
        className={`absolute z-10 ${accentCard}`}
        style={{
          left: v.frontCard.left,
          top: v.frontCard.top,
          width: v.frontCard.width,
        }}
      >
        <CourseCard course={courses[2]} />
      </Reveal>

      <Reveal
        from="none"
        scaleFrom={0.6}
        delay={0.4}
        className="absolute z-20"
        style={{ left: v.ring.left, top: v.ring.top, width: v.ring.width }}
      >
        <Float amplitude={8} duration={5} rotate={-6}>
          <Image
            src={v.ring.src}
            alt=""
            aria-hidden
            width={v.ring.width}
            height={v.ring.height}
            className="h-auto w-full max-w-none"
          />
        </Float>
      </Reveal>

      <Reveal
        from="none"
        scaleFrom={0.6}
        delay={0.5}
        className="absolute z-20"
        style={{
          left: v.spring.left,
          top: v.spring.top,
          width: v.spring.width,
        }}
      >
        <Float amplitude={10} duration={5.6} rotate={5}>
          <Image
            src={v.spring.src}
            alt=""
            aria-hidden
            width={v.spring.width}
            height={v.spring.height}
            className="h-auto w-full max-w-none"
          />
        </Float>
      </Reveal>

      <Reveal
        from="none"
        scaleFrom={0.6}
        delay={0.6}
        className="absolute z-20"
        style={{ left: v.cone.left, top: v.cone.top, width: v.cone.width }}
      >
        <Float amplitude={8} duration={4.8} rotate={-4}>
          <Image
            src={v.cone.src}
            alt=""
            aria-hidden
            width={v.cone.width}
            height={v.cone.height}
            className="h-auto w-full max-w-none"
          />
        </Float>
      </Reveal>

      <Reveal
        from="none"
        scaleFrom={0.9}
        delay={0.7}
        className="absolute z-20"
        style={{ left: v.students.left, top: v.students.top }}
      >
        <Float amplitude={6} duration={5.4}>
          <StudentsCard {...heroContent.students} tone="accent" />
        </Float>
      </Reveal>
    </ScaledStage>
  );
}
