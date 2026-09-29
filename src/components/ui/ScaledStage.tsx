import { cn } from "@/lib/utils";

type ScaledStageProps = {
  width: number;
  height: number;
  className?: string;
  children: React.ReactNode;
};

/** Fixed-size design canvas (Figma px). Shrinks on phones, 1:1 from sm up. */
export function ScaledStage({
  width,
  height,
  className,
  children,
}: ScaledStageProps) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[calc(var(--h)*0.56)] w-[calc(var(--w)*0.56)] sm:h-(--h) sm:w-(--w)",
        className,
      )}
      style={
        { "--w": `${width}px`, "--h": `${height}px` } as React.CSSProperties
      }
    >
      <div className="absolute left-0 top-0 h-(--h) w-(--w) origin-top-left scale-[0.56] sm:scale-100">
        {children}
      </div>
    </div>
  );
}
