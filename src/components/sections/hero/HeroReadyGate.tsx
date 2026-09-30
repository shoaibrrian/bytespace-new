"use client";

import { useEffect, useRef, useState } from "react";

const MAX_WAIT_MS = 1200;

export function HeroReadyGate({
  children,
  ...props
}: React.ComponentProps<"section">) {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    let cancelled = false;
    // Wait only for images that are on screen. Hidden ones (display: none) and ones
    // below the fold are not loaded yet and must not delay the entrance animation.
    const assets = Array.from(section.querySelectorAll("img")).filter((img) => {
      const rect = img.getBoundingClientRect();
      return rect.width > 0 && rect.top < window.innerHeight;
    });
    const decoded = assets.map((img) => img.decode().catch(() => undefined));
    const timeout = new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS));

    Promise.race([
      Promise.all([...decoded, document.fonts.ready]),
      timeout,
    ]).then(() => {
      if (!cancelled) requestAnimationFrame(() => setReady(true));
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section ref={ref} data-ready={ready} {...props}>
      {children}
    </section>
  );
}
