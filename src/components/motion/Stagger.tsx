"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { ease, viewport } from "@/lib/motion";

type StaggerProps = HTMLMotionProps<"div"> & {
  as?: "div" | "ul" | "ol";
  /** Delay between children (seconds) */
  gap?: number;
  delay?: number;
};

/** Parent: children wrapped in <StaggerItem> animate one after another. */
export function Stagger({
  as = "div",
  gap = 0.1,
  delay = 0,
  ...props
}: StaggerProps) {
  const Component = motion[as] as typeof motion.div;
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  };

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...props}
    />
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  as?: "div" | "li";
  distance?: number;
};

export function StaggerItem({
  as = "div",
  distance = 28,
  ...props
}: StaggerItemProps) {
  const Component = motion[as] as typeof motion.div;
  const variants: Variants = {
    hidden: { opacity: 0, y: distance },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  };

  return <Component variants={variants} {...props} />;
}
