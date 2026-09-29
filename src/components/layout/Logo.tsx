import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
};

// width/height must match the SVG's real aspect ratio (see its viewBox)
export function Logo({
  className,
  src = "/images/navbar/logo.svg",
  width = 172,
  height = 36,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      // block + w-fit: the clickable area is exactly the logo, never the empty space around it
      className={cn("block w-fit shrink-0", className)}
    >
      <Image
        src={src}
        alt="ByteSpace"
        width={width}
        height={height}
        priority
        className="block h-8 w-auto lg:h-9"
      />
    </Link>
  );
}
