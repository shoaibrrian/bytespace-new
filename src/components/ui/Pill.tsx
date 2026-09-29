"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PillProps = React.ComponentProps<"button"> & {
  active?: boolean;
  layoutId?: string;
};

export function Pill({
  active = false,
  layoutId = "pill-active",
  className,
  children,
  ...props
}: PillProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "relative cursor-pointer rounded-full px-4 py-3 text-label-m transition-colors duration-300",
        active
          ? "font-medium text-neutral-950"
          : "bg-neutral-50 text-neutral-800 hover:bg-neutral-100",
        className,
      )}
      {...props}
    >
      {active && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 rounded-full bg-secondary-400"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      <span className="relative">{children}</span>
    </button>
  );
}
