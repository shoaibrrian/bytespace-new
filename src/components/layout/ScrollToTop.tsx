"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;

    let userScrolled = false;
    const markUser = () => {
      userScrolled = true;
    };
    window.addEventListener("wheel", markUser, { passive: true });
    window.addEventListener("touchmove", markUser, { passive: true });
    window.addEventListener("keydown", markUser);

    const toTop = () => {
      if (userScrolled || window.scrollY === 0) return;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    toTop();
    const frame = requestAnimationFrame(toTop);
    const timers = [50, 150, 350, 700].map((ms) =>
      window.setTimeout(toTop, ms),
    );

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      window.removeEventListener("wheel", markUser);
      window.removeEventListener("touchmove", markUser);
      window.removeEventListener("keydown", markUser);
    };
  }, [pathname]);

  return null;
}
