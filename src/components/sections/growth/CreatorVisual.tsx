import Image from "next/image";
import { RevenueCard } from "@/components/cards/RevenueCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { Float } from "@/components/motion/Float";
import { Reveal } from "@/components/motion/Reveal";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { creatorVisual as v } from "@/data/growth";
import { heroContent } from "@/data/hero";

export function CreatorVisual() {
  return (
    <ScaledStage
      width={v.stage.width}
      height={v.stage.height}
      className="xl:mx-0"
    >
      <Reveal
        from="left"
        distance={40}
        className="absolute"
        style={{
          left: v.revenue.left,
          top: v.revenue.top,
          width: v.revenue.width,
        }}
      >
        <RevenueCard
          title="Total Revenue"
          period="July 1-28"
          amount="$120.29"
          progress={55}
        />
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
          alt="Creator holding a tablet"
          width={v.person.width}
          height={v.person.height}
          className="drop-shadow-person h-auto w-full max-w-none"
        />
      </Reveal>

      <Reveal
        from="left"
        distance={40}
        delay={0.3}
        className="absolute z-20"
        style={{
          left: v.yearly.left,
          top: v.yearly.top,
          width: v.yearly.width,
        }}
      >
        <RevenueCard
          title="Year to Date"
          period="2023"
          amount="$1,200.38"
          badge="+12$"
        />
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
        <Float amplitude={10} duration={5} rotate={-5}>
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
        scaleFrom={0.9}
        delay={0.65}
        className="absolute z-30"
        style={{ left: v.students.left, top: v.students.top }}
      >
        <Float amplitude={6} duration={5.6}>
          <StudentsCard {...heroContent.students} />
        </Float>
      </Reveal>
    </ScaledStage>
  );
}
