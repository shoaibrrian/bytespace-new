"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

export function CountUp({
  value,
  duration = 1.6,
}: {
  value: string;
  duration?: number;
}) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const hasNumber = Boolean(match);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !hasNumber || reduce) return;
    const controls = animate(0, target, {
      duration,
      ease,
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, hasNumber, target, duration, reduce]);

  if (!hasNumber) return <>{value}</>;

  return (
    <span ref={ref} className="relative inline-block">
      <span className="invisible">{value}</span>
      <span className="absolute inset-0" aria-hidden>
        {reduce ? target : current}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
