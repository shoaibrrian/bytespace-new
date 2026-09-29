import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary-700 text-white hover:bg-primary-800",
  secondary: "bg-secondary-400 text-neutral-950 hover:bg-secondary-300",
  outline: "border border-neutral-200 text-neutral-950 hover:bg-neutral-50",
} as const;

type Variant = keyof typeof variants;

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-3xl px-6 py-3 text-label-l font-medium transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50";

export function buttonStyles(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonProps = React.ComponentProps<"button"> & { variant?: Variant };

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return <button className={buttonStyles(variant, className)} {...props} />;
}

type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  variant?: Variant;
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonStyles(variant, className)} {...props} />;
}
