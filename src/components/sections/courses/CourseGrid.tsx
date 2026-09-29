"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { CourseCard } from "@/components/cards/CourseCard";
import type { Course } from "@/data/courses";
import { ease, viewport } from "@/lib/motion";

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

type CourseGridProps = { courses: Course[]; category: string };

export function CourseGrid({ courses, category }: CourseGridProps) {
  return (
    <AnimatePresence mode="wait">
      {courses.length === 0 ? (
        <motion.p
          key={`${category}-empty`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease }}
          className="py-16 text-center text-body-l text-neutral-400"
        >
          No courses in this category yet.
        </motion.p>
      ) : (
        <motion.div
          key={category}
          variants={grid}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={viewport}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={item} className="grid">
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
