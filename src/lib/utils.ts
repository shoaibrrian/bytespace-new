import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const HERO_ANCHOR_Y = 514;

// Full-width scaling (used by CTA shapes): Figma px -> value that scales with the container
export const dx = (px: number) => `calc(${px} * var(--u))`;
export const dy = (px: number) =>
  `calc(${HERO_ANCHOR_Y}px + ${px - HERO_ANCHOR_Y} * var(--u))`;

// Hero stage: x is measured from the frame center, y from --y0
export const ux = (px: number) => `calc(50% + ${px - 720} * var(--u))`;
export const uy = (px: number) =>
  `calc(var(--y0) + ${px - HERO_ANCHOR_Y} * var(--u))`;
export const uw = (px: number) => `calc(${px} * var(--u))`;
