import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils";

type RevenueCardProps = {
  title: string;
  period: string;
  amount: string;
  progress?: number;
  badge?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function RevenueCard({
  title,
  period,
  amount,
  progress,
  badge,
  className,
  style,
}: RevenueCardProps) {
  return (
    <div
      className={cn("rounded-xl bg-primary-700 p-4 text-white", className)}
      style={style}
    >
      <p className="text-label-m font-medium">{title}</p>
      <p className="text-[10px] leading-[1.2] text-white/80">{period}</p>
      <p className="mt-2 text-2xl font-bold leading-[1.2]">{amount}</p>
      {progress !== undefined && (
        <ProgressBar value={progress} label={title} className="mt-2" />
      )}
      {badge && (
        <span className="mt-2 inline-block rounded-full bg-secondary-400 px-2 py-0.5 text-[10px] font-medium text-neutral-950">
          {badge}
        </span>
      )}
    </div>
  );
}
