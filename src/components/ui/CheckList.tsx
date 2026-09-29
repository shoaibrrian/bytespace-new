import { Check } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <Stagger as="ul" gap={0.12} className="flex flex-col gap-4">
      {items.map((item) => (
        <StaggerItem
          as="li"
          key={item}
          distance={16}
          className="flex items-center gap-[11px] text-body-l text-neutral-950"
        >
          <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-primary-700">
            <Check
              className="size-3.5 text-white"
              strokeWidth={3}
              aria-hidden
            />
          </span>
          {item}
        </StaggerItem>
      ))}
    </Stagger>
  );
}
