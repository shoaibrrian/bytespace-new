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
  className?: string;
  style?: React.CSSProperties;
};

export function StudentsCard({
  title,
  rating,
  reviews,
  count,
  avatars,
  className,
  style,
}: StudentsCardProps) {
  return (
    <FloatingCard
      className={cn("flex flex-col gap-2", className)}
      style={style}
    >
      <div>
        <p className="text-label-m font-medium text-neutral-950">{title}</p>
        <p className="flex items-center gap-1 text-body-xs text-neutral-950">
          {rating}
          <span className="text-neutral-400">{reviews}</span>
          <Star
            className="size-3.5 fill-secondary-500 text-secondary-500"
            aria-hidden
          />
        </p>
      </div>
      <AvatarGroup avatars={avatars} label={count} />
    </FloatingCard>
  );
}
