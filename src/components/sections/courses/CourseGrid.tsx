import { CourseCard } from "@/components/cards/CourseCard";
import type { Course } from "@/data/courses";

export function CourseGrid({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return (
      <p className="py-16 text-center text-body-l text-neutral-400">
        No courses in this category yet.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
