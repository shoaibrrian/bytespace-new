import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { Float } from "@/components/motion/Float";
import { Reveal } from "@/components/motion/Reveal";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { courses } from "@/data/courses";
import { pathVisual as v } from "@/data/growth";
import { heroContent } from "@/data/hero";

export function PathVisual() {
  return (
    <ScaledStage width={v.stage.width} height={v.stage.height}>
      <Reveal
        className="absolute"
        style={{
          left: v.course.left,
          top: v.course.top,
          width: v.course.width,
        }}
      >
        <CourseCard course={courses[0]} />
      </Reveal>

      <Reveal
        distance={48}
        delay={0.15}
        duration={0.9}
        className="absolute z-10"
        style={{
          left: v.person.left,
          top: v.person.top,
          width: v.person.width,
        }}
      >
        <Image
          src={v.person.src}
          alt="Student learning with a laptop"
          width={v.person.width}
          height={v.person.height}
          className="drop-shadow-person h-auto w-full max-w-none"
        />
      </Reveal>

      <Reveal
        from="none"
        scaleFrom={0.9}
        delay={0.45}
        className="absolute z-20"
        style={{ left: v.progress.left, top: v.progress.top }}
      >
        <Float amplitude={6} duration={5.4}>
          <ProgressCard
            label={heroContent.progress.label}
            value={v.progress.value}
          />
        </Float>
      </Reveal>

      <Reveal
        from="none"
        scaleFrom={0.6}
        delay={0.6}
        className="absolute z-30"
        style={{
          left: v.spring.left,
          top: v.spring.top,
          width: v.spring.width,
        }}
      >
        <Float amplitude={10} duration={4.8} rotate={5}>
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
    </ScaledStage>
  );
}
