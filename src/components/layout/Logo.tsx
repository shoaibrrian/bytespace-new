import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={className}>
      <Image
        src="/images/navbar/logo.svg"
        alt="ByteSpace"
        width={172}
        height={36}
        priority
        className="h-8 w-auto lg:h-9"
      />
    </Link>
  );
}
