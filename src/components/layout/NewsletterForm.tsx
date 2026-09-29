"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type NewsletterFormProps = {
  placeholder: string;
  submitLabel: string;
  className?: string;
};

export function NewsletterForm({
  placeholder,
  submitLabel,
  className,
}: NewsletterFormProps) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()} // TODO: connect to newsletter API
      className={cn("flex items-start gap-3 sm:gap-6", className)}
    >
      <input
        type="email"
        required
        placeholder={placeholder}
        aria-label="Email address"
        className="h-[52px] min-w-0 flex-1 rounded-3xl border border-neutral-300 bg-transparent px-6 text-body-l text-neutral-950 outline-none transition-colors placeholder:text-neutral-800 focus:border-primary-700"
      />
      <Button type="submit" variant="secondary">
        {submitLabel}
      </Button>
    </form>
  );
}
