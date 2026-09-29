import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type FeatureRowProps = {
  text: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
};

export function FeatureRow({ text, visual, reverse = false }: FeatureRowProps) {
  return (
    <div className="grid items-center gap-10 xl:grid-cols-2">
      <Reveal
        from={reverse ? "right" : "left"}
        distance={48}
        className={cn(reverse && "xl:order-2")}
      >
        {text}
      </Reveal>
      <Reveal
        from={reverse ? "left" : "right"}
        distance={48}
        delay={0.15}
        className={cn(
          reverse ? "xl:order-1 xl:justify-self-start" : "xl:justify-self-end",
        )}
      >
        {visual}
      </Reveal>
    </div>
  );
}
