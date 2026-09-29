import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
};

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
