"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { authLinks, navLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

const trackedSections = ["courses", "creators"] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const scrolled = useScrolled();
  // The bar gets a background once the page scrolls, or while the mobile menu is open
  const solid = scrolled || open;

  const pathname = usePathname();
  const activeSection = useActiveSection(trackedSections);
  const isActive = (id: string) => pathname === "/" && activeSection === id;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b",
        // transform and opacity are driven by Framer Motion, so they are left out here
        "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        solid
          ? "border-white/10 bg-primary-800/80 shadow-[0_8px_30px_rgb(0_0_0/0.12)] backdrop-blur-lg"
          : "border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav
          aria-label="Main"
          className={cn(
            "flex items-center justify-between transition-[height] duration-300 lg:grid lg:grid-cols-[1fr_auto_1fr]",
            scrolled ? "h-16 lg:h-20" : "h-20 lg:h-30",
          )}
        >
          <Logo />

          {/* Desktop: center links */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                href={link.href}
                active={isActive(link.id)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop: auth + cart */}
          <div className="hidden items-center justify-end gap-6 lg:flex">
            {authLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              aria-label="Cart"
              className="text-white transition-transform duration-300 hover:scale-110"
            >
              <ShoppingBag className="size-5" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-white lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease }}
              className="mb-4 flex flex-col items-start gap-4 rounded-2xl bg-primary-950/95 p-6 backdrop-blur lg:hidden"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  href={link.href}
                  active={isActive(link.id)}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
              {authLinks.map((link) => (
                <NavLink key={link.label} href={link.href} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
