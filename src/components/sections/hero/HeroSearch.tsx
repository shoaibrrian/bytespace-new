"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSearch({ placeholder }: { placeholder: string }) {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()} // TODO: connect to courses search
      className="mx-auto flex w-full max-w-[581px] flex-col items-start gap-4 sm:flex-row"
    >
      <label className="flex w-full items-center gap-2 rounded-3xl bg-white px-6 py-3 transition-shadow duration-300 focus-within:shadow-[0_0_0_4px_rgb(212_251_32/0.4)] sm:flex-1">
        <Search className="size-5 shrink-0 text-neutral-500" aria-hidden />
        <input
          type="search"
          placeholder={placeholder}
          aria-label="Search courses"
          className="w-full bg-transparent text-body-l text-neutral-950 outline-none placeholder:text-neutral-400"
        />
      </label>
      <Button type="submit" variant="secondary" className="w-full sm:w-auto">
        Search
      </Button>
    </form>
  );
}
