import { cn } from "@/lib/utils";

export function FloatingCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-4 shadow-lg shadow-black/5",
        className,
      )}
      {...props}
    />
  );
}
