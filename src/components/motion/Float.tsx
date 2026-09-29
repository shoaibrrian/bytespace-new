"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type FloatProps = HTMLMotionProps<"div"> & {
  amplitude?: number;
  duration?: number;
  delay?: number;
  rotate?: number;
};

/** Endless gentle floating, for decorative shapes and cards. */
export function Float({
  amplitude = 10,
  duration = 5,
  delay = 0,
  rotate = 0,
  ...props
}: FloatProps) {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
        rotate: rotate ? [0, rotate, 0] : 0,
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      {...props}
    />
  );
}
