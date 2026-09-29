export const pathSection = {
  title: "Your Path to Professional\nGrowth Starts Here!",
  description:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  stats: [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ],
};

export const creatorSection = {
  title: "Create & Manage\nCourses Easily.",
  brand: "ByteSpace",
  description:
    "supports individuals or entities in the creation, publication, and administration of educational courses.",
  features: [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ],
};

// ---- Visual positions: px, relative to each stage's top-left corner ----
export const pathVisual = {
  stage: { width: 580, height: 570 },
  course: { left: 0, top: 0, width: 373 },
  person: {
    src: "/images/detail/boy.svg",
    left: 67,
    top: 50,
    width: 510,
    height: 502,
  },
  progress: { left: 345, top: 213, value: 55 },
  spring: {
    src: "/images/detail/spring-lime-1.svg",
    left: 452,
    top: 90,
    width: 125,
    height: 165,
  },
} as const;

export const creatorVisual = {
  stage: { width: 545, height: 560 },
  person: {
    src: "/images/detail/girl.svg",
    left: 64,
    top: 0,
    width: 363,
    height: 560,
  },
  revenue: { left: 0, top: 8, width: 232 },
  yearly: { left: 0, top: 158, width: 134 },
  spring: {
    src: "/images/detail/spring-lime-2.svg",
    left: 339,
    top: 113,
    width: 140,
    height: 152,
  },
  students: { left: 283, top: 377 },
} as const;

// ---- Background glows: px on the 1440 x 1460 Figma frame ----
export const growthGlows = {
  designHeight: 1460,
  items: [
    {
      src: "/images/detail/glow-lime-top.png",
      left: 60,
      top: -180,
      width: 620,
      height: 620,
    },
    {
      src: "/images/detail/glow-blue-top.png",
      left: 1150,
      top: -100,
      width: 500,
      height: 500,
    },
    {
      src: "/images/detail/glow-blue-left.png",
      left: -250,
      top: 560,
      width: 560,
      height: 560,
    },
    {
      src: "/images/detail/glow-lime-bottom.png",
      left: -260,
      top: 1100,
      width: 560,
      height: 560,
    },
    {
      src: "/images/detail/glow-blue-bottom.png",
      left: 1000,
      top: 1100,
      width: 600,
      height: 600,
    },
  ],
} as const;
