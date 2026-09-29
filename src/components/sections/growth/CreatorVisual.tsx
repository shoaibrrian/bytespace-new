import Image from "next/image";
import { RevenueCard } from "@/components/cards/RevenueCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
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
      <RevenueCard
        title="Total Revenue"
        period="July 1-28"
        amount="$120.29"
        progress={55}
        className="absolute"
        style={{
          left: v.revenue.left,
          top: v.revenue.top,
          width: v.revenue.width,
        }}
      />

      <Image
        src={v.person.src}
        alt="Creator holding a tablet"
        width={v.person.width}
        height={v.person.height}
        className="drop-shadow-person absolute z-10 h-auto max-w-none"
        style={{
          left: v.person.left,
          top: v.person.top,
          width: v.person.width,
        }}
      />

      <RevenueCard
        title="Year to Date"
        period="2023"
        amount="$1,200.38"
        badge="+12$"
        className="absolute z-20"
        style={{
          left: v.yearly.left,
          top: v.yearly.top,
          width: v.yearly.width,
        }}
      />

      <Image
        src={v.spring.src}
        alt=""
        aria-hidden
        width={v.spring.width}
        height={v.spring.height}
        className="absolute z-20 h-auto max-w-none"
        style={{
          left: v.spring.left,
          top: v.spring.top,
          width: v.spring.width,
        }}
      />

      <StudentsCard
        {...heroContent.students}
        className="absolute z-30"
        style={{ left: v.students.left, top: v.students.top }}
      />
    </ScaledStage>
  );
}
