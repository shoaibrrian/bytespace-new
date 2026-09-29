import type { CSSProperties } from "react";

// Shared motion tokens: one easing curve and one viewport rule for the whole site
export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewport = { once: true, margin: "-80px" } as const;

type EnterOptions = {
  delay?: number;
  rise?: number;
  duration?: number;
  scale?: number;
};

/** CSS variables for the `.hero-enter` animation */
export function enter({
  delay = 0,
  rise = 32,
  duration = 0.8,
  scale = 1,
}: EnterOptions = {}): CSSProperties {
  return {
    "--delay": `${delay}s`,
    "--rise": `${rise}px`,
    "--dur": `${duration}s`,
    "--from-scale": scale,
  } as CSSProperties;
}

type FloatingOptions = {
  delay?: number;
  amplitude?: number;
  duration?: number;
  rotate?: number;
};

/** CSS variables for the `.hero-float` animation */
export function floating({
  delay = 0,
  amplitude = 10,
  duration = 5,
  rotate = 0,
}: FloatingOptions = {}): CSSProperties {
  return {
    "--float-delay": `${delay}s`,
    "--float-y": `${amplitude}px`,
    "--float-dur": `${duration}s`,
    "--float-r": `${rotate}deg`,
  } as CSSProperties;
}
