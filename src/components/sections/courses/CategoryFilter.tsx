"use client";

import { Stagger, StaggerItem } from "@/components/motion/Stagger";
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
    <Stagger
      role="group"
      aria-label="Course categories"
      gap={0.04}
      className={cn(
        "mx-auto flex max-w-[1080px] flex-wrap items-center justify-center gap-x-4 gap-y-5",
        className,
      )}
    >
      {categories.map((category) => (
        <StaggerItem key={category} distance={16}>
          <Pill active={category === active} onClick={() => onChange(category)}>
            {category}
          </Pill>
        </StaggerItem>
      ))}
      <StaggerItem distance={16}>
        <button
          type="button"
          className="cursor-pointer px-2 text-label-m font-medium text-primary-700 transition-colors hover:text-primary-900"
        >
          + More
        </button>
      </StaggerItem>
    </Stagger>
  );
}
