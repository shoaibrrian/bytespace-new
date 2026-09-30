"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = React.ComponentProps<typeof Link> & {
  active?: boolean;
};

export function NavLink({ href, active, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = active ?? href === pathname;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative text-label-m text-white/80 transition-colors duration-300 hover:text-white",
        "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100",
        isActive && "text-white after:scale-x-100",
        className,
      )}
      {...props}
    />
  );
}
