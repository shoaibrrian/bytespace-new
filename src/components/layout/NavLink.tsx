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
        "text-label-m text-white/80 transition-colors duration-300 hover:text-white",
        isActive && "font-medium text-white",
        className,
      )}
      {...props}
    />
  );
}
