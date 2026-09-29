export const testimonialsSection = {
  title: "Discover What Our\nCommunity Is Saying",
  description:
    "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/avatar-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "james",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/avatar-2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "alex",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/avatar-3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

// Figma px on the 1440 x 784 frame (same glow files as the growth section)
export const testimonialsGlows = {
  designHeight: 784,
  items: [
    {
      src: "/images/testimonials/glow-lime-top.png",
      left: 395,
      top: 5,
      width: 672,
      height: 672,
    },
    {
      src: "/images/testimonials/glow-lime-top.png",
      left: 1000,
      top: 0,
      width: 1000,
      height: 800,
    },
    {
      src: "/images/testimonials/glow-blue-left.png",
      left: 0,
      top: 250,
      width: 560,
      height: 560,
    },
  ],
} as const;
