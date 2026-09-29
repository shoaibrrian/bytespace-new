import { Star } from "lucide-react";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { cn } from "@/lib/utils";

type StudentsCardProps = {
  title: string;
  rating: string;
  reviews: string;
  count: string;
  avatars: readonly string[];
  tone?: "light" | "accent";
  className?: string;
  style?: React.CSSProperties;
};

export function StudentsCard({
  title,
  rating,
  reviews,
  count,
  avatars,
  tone = "light",
  className,
  style,
}: StudentsCardProps) {
  const accent = tone === "accent";

  return (
    <FloatingCard
      className={cn(
        "flex flex-col gap-2",
        accent &&
          "bg-secondary-400 [--avatar-badge-bg:var(--color-neutral-950)] [--avatar-badge-text:white] [--avatar-ring:var(--color-secondary-400)]",
        className,
      )}
      style={style}
    >
      <div>
        <p className="text-label-m font-medium text-neutral-950">{title}</p>
        <p className="flex items-center gap-1 text-body-xs text-neutral-950">
          {rating}
          <span className={accent ? "text-neutral-600" : "text-neutral-400"}>
            {reviews}
          </span>
          <Star
            className={cn(
              "size-3.5",
              accent
                ? "fill-primary-700 text-primary-700"
                : "fill-secondary-500 text-secondary-500",
            )}
            aria-hidden
          />
        </p>
      </div>
      <AvatarGroup avatars={avatars} label={count} />
    </FloatingCard>
  );
}
