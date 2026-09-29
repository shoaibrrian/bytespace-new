"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  courseCategories,
  courses,
  coursesSection,
  type CourseCategory,
} from "@/data/courses";
import { CategoryFilter } from "./CategoryFilter";
import { CourseGrid } from "./CourseGrid";

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>(
    courseCategories[0],
  );

  const visibleCourses = courses.filter((course) =>
    course.categories.includes(activeCategory),
  );

  return (
    <section id="courses" className="bg-white py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            title={coursesSection.title}
            description={coursesSection.description}
          />
        </Reveal>
        <CategoryFilter
          categories={courseCategories}
          active={activeCategory}
          onChange={setActiveCategory}
          className="mt-10"
        />
        <div className="mt-12 lg:mt-19">
          <CourseGrid courses={visibleCourses} category={activeCategory} />
        </div>
      </Container>
    </section>
  );
}
