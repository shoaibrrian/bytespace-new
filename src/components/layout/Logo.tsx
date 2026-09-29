import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  src?: string;
};

export function Logo({
  className,
  src = "/images/navbar/logo.png",
}: LogoProps) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={className}>
      <Image
        src={src}
        alt="ByteSpace"
        width={172}
        height={36}
        priority
        className="h-8 w-auto lg:h-9"
      />
    </Link>
  );
}
