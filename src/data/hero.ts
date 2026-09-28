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
    src: "/images/hero/spring-lime.png",
    left: -3.58,
    top: 227,
    width: 386.79,
    height: 386.79,
  },
  {
    src: "/images/hero/spring-white-small.png",
    left: 215,
    top: 505,
    width: 115,
    height: 115,
  },
  {
    src: "/images/hero/ring-white.png",
    left: 67,
    top: 740,
    width: 238,
    height: 238,
  },
  {
    src: "/images/hero/triangle-white.png",
    left: 1130,
    top: 485,
    width: 128,
    height: 128,
  },
  {
    src: "/images/hero/cylinder-lime.png",
    left: 1275,
    top: 255,
    width: 165,
    height: 165,
  },
  {
    src: "/images/hero/spring-white-large.png",
    left: 1197,
    top: 710,
    width: 193,
    height: 193,
  },
] as const;

// Figma px on the 1440px design frame
export const heroVisual = {
  person: {
    src: "/images/hero/person.png",
    left: 431,
    top: 512,
    width: 578,
    height: 541,
  },
  background: {
    src: "/images/hero/hero-img-bg.png",
    left: 145,
    top: 582,
    width: 1149,
    height: 442,
  },
} as const;
