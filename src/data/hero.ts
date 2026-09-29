export const heroContent = {
  title: "Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  searchPlaceholder: "Course, topic, creator",

  progress: { label: "Learning Progress", value: 55 },
  category: {
    title: "UI/UX Design",
    courses: "200 Courses",
    students: "1000+ Students",
  },
  students: {
    title: "Happy Students",
    rating: "4.5",
    reviews: "(240)",
    count: "2K+",
    avatars: [
      "/images/hero/avatars/avatar-1.png",
      "/images/hero/avatars/avatar-2.png",
      "/images/hero/avatars/avatar-3.png",
      "/images/hero/avatars/avatar-4.png",
      "/images/hero/avatars/avatar-5.png",
      "/images/hero/avatars/avatar-6.png",
    ],
  },
};

// Figma px on the 1440px design frame (left/top/width/height of each PNG box)
export const heroShapes = [
  {
    src: "/images/hero/spring-lime.svg",
    left: -3.58,
    top: 221,
    width: 286.79,
    height: 286.79,
  },
  {
    src: "/images/hero/spring-white-small.svg",
    left: 183,
    top: 477,
    width: 175,
    height: 175,
  },
  {
    src: "/images/hero/ring-white.svg",
    left: 18,
    top: 682,
    width: 342,
    height: 342,
  },
  {
    src: "/images/hero/triangle-white.svg",
    left: 1106,
    top: 464,
    width: 188,
    height: 188,
  },
  {
    src: "/images/hero/cylinder-lime.svg",
    left: 1275,
    top: 255,
    width: 165,
    height: 165,
  },
  {
    src: "/images/hero/spring-white-large.svg",
    left: 1127,
    top: 672,
    width: 330,
    height: 330,
  },
] as const;

// Figma px on the 1440px design frame
export const heroVisual = {
  person: {
    src: "/images/hero/person.svg",
    left: 400,
    top: 525,
    width: 700,
    height: 521,
  },
  background: {
    src: "/images/hero/hero-img-bg.svg",
    left: 145,
    top: 601,
    width: 1100,
    height: 1100,
  },
} as const;
