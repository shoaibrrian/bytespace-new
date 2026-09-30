"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Intrinsic size of each logo file. next/image needs the real aspect ratio,
// otherwise it warns that only one of width/height was modified.
const LOGO_SIZES: Record<string, { width: number; height: number }> = {
  "/assets/navbar/logo.svg": { width: 171, height: 37 },
  "/assets/footer/logo.svg": { width: 171, height: 37 },
  "/assets/navbar/form-logo.svg": { width: 29, height: 32 },
};

const DEFAULT_SRC = "/assets/navbar/logo.svg";

type LogoProps = {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
};

export function Logo({
  className,
  src = DEFAULT_SRC,
  width,
  height,
}: LogoProps) {
  const pathname = usePathname();
  const size = LOGO_SIZES[src] ?? LOGO_SIZES[DEFAULT_SRC];

  return (
    <Link
      href="/"
      scroll={false}
      onClick={() => {
        if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="ByteSpace home"
      className={cn("block w-fit shrink-0", className)}
    >
      <Image
        src={src}
        alt="ByteSpace"
        width={width ?? size.width}
        height={height ?? size.height}
        priority
        className="block h-8 w-auto lg:h-9"
      />
    </Link>
  );
}
