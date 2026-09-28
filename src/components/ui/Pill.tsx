import { cn } from "@/lib/utils";

type PillProps = React.ComponentProps<"button"> & { active?: boolean };

export function Pill({ active = false, className, ...props }: PillProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "cursor-pointer rounded-full px-4 py-3 text-label-m transition-colors duration-300",
        active
          ? "bg-secondary-400 font-medium text-neutral-950"
          : "bg-neutral-50 text-neutral-800 hover:bg-neutral-100",
        className,
      )}
      {...props}
    />
  );
}
