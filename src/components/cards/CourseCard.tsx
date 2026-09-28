import Image from "next/image";
import { Star } from "lucide-react";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { courseAvatars, type Course } from "@/data/courses";

function LevelIcon() {
  return (
    <span aria-hidden className="flex h-3 items-end gap-px">
      <i className="h-1.5 w-[3px] bg-neutral-500" />
      <i className="h-2 w-[3px] bg-neutral-500" />
      <i className="h-3 w-[3px] bg-neutral-500" />
    </span>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-49 overflow-hidden rounded-2xl">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
          <Badge variant="glass">{course.lessons}</Badge>
          <Badge variant="glass">{course.duration}</Badge>
          <Badge variant="glass">{course.comments}</Badge>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="min-w-0 truncate font-heading text-label-xl font-semibold text-neutral-950">
            {course.title}
          </h3>
          <p className="flex shrink-0 items-center gap-1 text-label-m text-neutral-500">
            {course.rating}
            <Star
              className="size-4 fill-neutral-300 text-neutral-300"
              aria-hidden
            />
          </p>
        </div>
        <p className="text-body-xs text-neutral-400">
          by <span className="text-primary-700">{course.author}</span>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Badge>
          <LevelIcon />
          {course.level}
        </Badge>
        <AvatarGroup
          size="sm"
          avatars={courseAvatars.images}
          label={courseAvatars.count}
        />
      </div>

      <p className="flex items-baseline gap-0.5">
        <span className="font-heading text-label-xl font-semibold text-primary-700">
          ${course.price}
        </span>
        <span className="text-body-xs text-neutral-500">
          {course.priceNote}
        </span>
      </p>
    </Card>
  );
}
