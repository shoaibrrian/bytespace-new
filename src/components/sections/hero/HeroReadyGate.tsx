"use client";

import { useEffect, useRef, useState } from "react";

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
    const assets = Array.from(section.querySelectorAll("img"));
    const decoded = assets.map((img) => img.decode().catch(() => undefined));
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
