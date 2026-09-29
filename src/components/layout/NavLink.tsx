"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative text-label-m text-white/80 transition-colors duration-300 hover:text-white",
        "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100",
        isActive && " text-white",
        className,
      )}
      {...props}
    />
  );
}
