import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { courses } from "@/data/courses";
import { heroContent } from "@/data/hero";
import { pathVisual as v } from "@/data/growth";

export function PathVisual() {
  return (
    <ScaledStage width={v.stage.width} height={v.stage.height}>
      <div
        className="absolute"
        style={{
          left: v.course.left,
          top: v.course.top,
          width: v.course.width,
        }}
      >
        <CourseCard course={courses[0]} />
      </div>

      <Image
        src={v.person.src}
        alt="Student learning with a laptop"
        width={v.person.width}
        height={v.person.height}
        className="drop-shadow-person absolute z-10 h-auto max-w-none"
        style={{
          left: v.person.left,
          top: v.person.top,
          width: v.person.width,
        }}
      />

      <ProgressCard
        label={heroContent.progress.label}
        value={v.progress.value}
        className="absolute z-20"
        style={{ left: v.progress.left, top: v.progress.top }}
      />

      <Image
        src={v.spring.src}
        alt=""
        aria-hidden
        width={v.spring.width}
        height={v.spring.height}
        className="absolute z-30 h-auto max-w-none"
        style={{
          left: v.spring.left,
          top: v.spring.top,
          width: v.spring.width,
        }}
      />
    </ScaledStage>
  );
}
