export const coursesSection = {
  title: "Discover Your Passion,\nBuild Your Skills",
  description:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
};

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

export type CourseCategory = (typeof courseCategories)[number];

export type Course = {
  id: string;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: number;
  priceNote: string;
  thumbnail: string;
  lessons: string;
  duration: string;
  comments: string;
  categories: CourseCategory[];
};

export const courseAvatars = {
  images: [
    "/images/skill-card/sc-avatars/sca1.png",
    "/images/skill-card/sc-avatars/sca2.png",
    "/images/skill-card/sc-avatars/sca3.png",
    "/images/skill-card/sc-avatars/sca4.png",
  ],
  count: "26+",
};

const meta = {
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
};
const base = {
  author: "purepearl studio",
  rating: 4.5,
  level: "Beginner",
  price: 25,
  priceNote: "/lifetime",
  ...meta,
};

export const courses: Course[] = [
  {
    ...base,
    id: "learn-figma",
    title: "Learn Figma from Basic",
    thumbnail: "/images/skill-card/sc1.jpg",
    categories: ["Featured", "UI/UX Design", "Graphic Design"],
  },
  {
    ...base,
    id: "digital-asset",
    title: "Build Digital Asset",
    thumbnail: "/images/skill-card/sc2.jpg",
    categories: ["Featured", "Graphic Design", "Digital Illustration"],
  },
  {
    ...base,
    id: "big-data",
    title: "the Power of Big Data",
    thumbnail: "/images/skill-card/sc3.jpg",
    categories: ["Featured", "Data Science"],
  },
  {
    ...base,
    id: "productivity",
    title: "Balancing Productivity and Life",
    thumbnail: "/images/skill-card/sc4.jpg",
    categories: ["Featured", "Productivity"],
  },
  {
    ...base,
    id: "money-management",
    title: "Mastering Money Management",
    thumbnail: "/images/skill-card/sc5.jpg",
    categories: ["Featured", "Freelance & Entrepreneurship"],
  },
  {
    ...base,
    id: "startup-success",
    title: "From Idea to Startup Success",
    thumbnail: "/images/skill-card/sc6.jpg",
    categories: ["Featured", "Marketing", "Freelance & Entrepreneurship"],
  },
];
