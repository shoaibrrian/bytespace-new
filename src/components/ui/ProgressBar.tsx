import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-full rounded-3xl bg-neutral-50", className)}
    >
      <div
        className="h-full rounded-3xl bg-secondary-400"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
