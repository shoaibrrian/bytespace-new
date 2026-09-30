"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-spy. Returns:
 * - "home" above the first tracked section
 * - the id of the last tracked section whose top has passed the trigger line
 * - null once the last tracked section is fully scrolled past
 */
export function useActiveSection(ids: readonly string[], triggerAt = 0.35) {
  const [active, setActive] = useState<string | null>("home");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const line = window.innerHeight * triggerAt;
      let current: string | null = "home";

      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= line) {
          const isLast = i === ids.length - 1;
          current = isLast && bottom <= line ? null : ids[i];
        }
      }

      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, triggerAt]);

  return active;
}
