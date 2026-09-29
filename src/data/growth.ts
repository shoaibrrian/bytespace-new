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
    src: "/assets/detail/boy.svg",
    left: 10,
    top: 55,
    width: 600,
    height: 540,
  },
  progress: { left: 345, top: 213, value: 55 },
  spring: {
    src: "/assets/detail/spring-lime-1.svg",
    left: 406,
    top: 67,
    width: 215,
    height: 215,
  },
} as const;

export const creatorVisual = {
  stage: { width: 545, height: 560 },
  person: {
    src: "/assets/detail/girl.svg",
    left: 28,
    top: 0,
    width: 535,
    height: 596,
  },
  revenue: { left: 0, top: 8, width: 232 },
  yearly: { left: 0, top: 158, width: 134 },
  spring: {
    src: "/assets/detail/spring-lime-2.svg",
    left: 305,
    top: 114,
    width: 215,
    height: 215,
  },
  students: { left: 283, top: 377 },
} as const;

// ---- Background glows: px on the 1440 x 1460 Figma frame ----
export const growthGlows = {
  designHeight: 1460,
  items: [
    {
      src: "/assets/detail/glow-lime-top.svg",
      left: 60,
      top: 0,
      width: 1000,
      height: 1000,
    },
    {
      src: "/assets/detail/glow-blue-top.svg",
      left: 940,
      top: 0,
      width: 500,
      height: 500,
    },
    {
      src: "/assets/detail/glow-blue-left.svg",
      left: 0,
      top: 183,
      width: 560,
      height: 560,
    },
    {
      src: "/assets/detail/glow-lime-bottom.svg",
      left: 0,
      top: 740,
      width: 560,
      height: 560,
    },
    {
      src: "/assets/detail/glow-blue-bottom.svg",
      left: 840,
      top: 920,
      width: 600,
      height: 600,
    },
  ],
} as const;
