import { Check } from "lucide-react";

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li
          key={item}
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
        </li>
      ))}
    </ul>
  );
}
