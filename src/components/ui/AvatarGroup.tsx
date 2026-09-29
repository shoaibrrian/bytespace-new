import Image from "next/image";
import { cn } from "@/lib/utils";

const sizes = {
  sm: { box: "size-8", px: 32 },
  md: { box: "size-9", px: 36 },
} as const;

export function AvatarGroup({
  avatars,
  label,
  size = "md",
}: {
  avatars: readonly string[];
  label?: string;
  size?: keyof typeof sizes;
}) {
  const { box, px } = sizes[size];

  return (
    <div className="flex items-center">
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={px}
          height={px}
          className={cn("-ml-2 rounded-full  object-cover first:ml-0", box)}
        />
      ))}
      {label && (
        <span
          className={cn(
            "-ml-2 flex items-center justify-center rounded-full text-xs bg-secondary-400 text-label-xs font-bold text-neutral-950",
            box,
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
