import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  label = "Progress",
  className,
}: {
  value: number;
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="progressbar"
      aria-label={label}
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
