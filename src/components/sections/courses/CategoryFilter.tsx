"use client";

import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

type CategoryFilterProps<T extends string> = {
  categories: readonly T[];
  active: T;
  onChange: (category: T) => void;
  className?: string;
};

export function CategoryFilter<T extends string>({
  categories,
  active,
  onChange,
  className,
}: CategoryFilterProps<T>) {
  return (
    <div
      role="group"
      aria-label="Course categories"
      className={cn(
        "mx-auto flex max-w-[1080px] flex-wrap items-center justify-center gap-x-4 gap-y-5",
        className,
      )}
    >
      {categories.map((category) => (
        <Pill
          key={category}
          active={category === active}
          onClick={() => onChange(category)}
        >
          {category}
        </Pill>
      ))}
      <button
        type="button"
        className="cursor-pointer px-2 text-label-m font-medium text-primary-700 transition-colors hover:text-primary-900"
      >
        + More
      </button>
    </div>
  );
}
