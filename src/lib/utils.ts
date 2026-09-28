import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const HERO_ANCHOR_Y = 514;

// Figma px (1440 frame) -> value that scales with the hero width
export const dx = (px: number) => `calc(${px} * var(--u))`;
export const dy = (px: number) =>
  `calc(${HERO_ANCHOR_Y}px + ${px - HERO_ANCHOR_Y} * var(--u))`;
