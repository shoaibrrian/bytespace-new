"use client";

import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { authLinks, navLinks } from "@/data/navigation";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <nav
          aria-label="Main"
          className="flex h-20 items-center justify-between lg:grid lg:h-30 lg:grid-cols-[1fr_auto_1fr]"
        >
          <Logo />

          {/* Desktop: center links */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
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
              className="text-white transition-opacity hover:opacity-80"
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
        {open && (
          <div className="flex flex-col gap-4 rounded-2xl bg-primary-950/95 p-6 backdrop-blur lg:hidden">
            {[...navLinks, ...authLinks].map((link) => (
              <NavLink key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
