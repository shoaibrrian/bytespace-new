import { cn } from "@/lib/utils";

const variants = {
  neutral: "bg-neutral-50 text-neutral-800",
  glass: "bg-neutral-200/70 text-neutral-700 backdrop-blur-sm",
} as const;

type BadgeProps = React.ComponentProps<"span"> & {
  variant?: keyof typeof variants;
};

export function Badge({
  variant = "neutral",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-body-xs",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
