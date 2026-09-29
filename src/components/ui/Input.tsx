import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-[52px] w-full rounded-2xl border border-neutral-200 bg-neutral-50/40 px-6 text-body-l text-neutral-950 outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-neutral-400 focus:border-primary-700 focus:ring-4 focus:ring-primary-700/10",
        className,
      )}
      {...props}
    />
  );
}
