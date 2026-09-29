import { FloatingCard } from "@/components/ui/FloatingCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils";

type ProgressCardProps = {
  label: string;
  value: number;
  className?: string;
  style?: React.CSSProperties;
};

export function ProgressCard({
  label,
  value,
  className,
  style,
}: ProgressCardProps) {
  return (
    <FloatingCard
      className={cn("flex w-[232px] flex-col gap-2", className)}
      style={style}
    >
      <p className="text-label-s font-medium text-neutral-950">{label}</p>
      <p className="font-heading text-heading-m font-semibold text-neutral-950">
        {value}%
      </p>
      <ProgressBar value={value} />
    </FloatingCard>
  );
}
