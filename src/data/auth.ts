export const signInContent = {
  heading: "Sign in with ease",
  description:
    "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  eyebrow: "Sign In",
  title: "Welcome Back",
  email: { label: "Email", placeholder: "designer@example.com" },
  password: { label: "Password", placeholder: "********" },
  submit: "Sign In",
  switchPrompt: "New user?",
  switchLabel: "Create an account",
  switchHref: "/register",
};

// px, relative to the showcase stage's top-left corner (Figma frame 1440 x 1024)
export const authShowcase = {
  stage: { width: 496, height: 558 },
  backCard: { left: 0, top: 90, width: 373 },
  frontCard: { left: 111, top: 0, width: 373 },
  ring: {
    src: "/images/auth/ring-lime.svg",
    left: 50,
    top: 40,
    width: 102,
    height: 93,
  },
  spring: {
    src: "/images/auth/spring-white.svg",
    left: 381,
    top: 350,
    width: 115,
    height: 122,
  },
  cone: {
    src: "/images/auth/cone-lime.svg",
    left: 0,
    top: 417,
    width: 126,
    height: 140,
  },
  students: { left: 226, top: 435 },
} as const;
