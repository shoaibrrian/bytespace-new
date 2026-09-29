"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders the hero <section> and flips data-ready="true" once every image is
 * decoded and fonts are loaded, so the entrance animation never starts on a
 * half-loaded page. A timeout keeps the hero from staying hidden on slow networks.
 */
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
    const images = Array.from(section.querySelectorAll("img"));
    const decoded = images.map((img) => img.decode().catch(() => undefined));
    const timeout = new Promise((resolve) => setTimeout(resolve, 2000));

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
