"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ease, viewport } from "@/lib/motion";

type Direction = "bottom" | "top" | "left" | "right" | "none";

type RevealProps = HTMLMotionProps<"div"> & {
  from?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  scaleFrom?: number;
  trigger?: "view" | "load";
};

function offset(from: Direction, distance: number) {
  switch (from) {
    case "bottom":
      return { y: distance };
    case "top":
      return { y: -distance };
    case "left":
      return { x: -distance };
    case "right":
      return { x: distance };
    default:
      return {};
  }
}

export function Reveal({
  from = "bottom",
  distance = 32,
  delay = 0,
  duration = 0.7,
  scaleFrom = 1,
  trigger = "view",
  ...props
}: RevealProps) {
  const hidden = { opacity: 0, scale: scaleFrom, ...offset(from, distance) };
  const visible = { opacity: 1, scale: 1, x: 0, y: 0 };
  const transition = { duration, delay, ease };

  if (trigger === "load") {
    return (
      <motion.div
        initial={hidden}
        animate={visible}
        transition={transition}
        {...props}
      />
    );
  }

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={viewport}
      transition={transition}
      {...props}
    />
  );
}
