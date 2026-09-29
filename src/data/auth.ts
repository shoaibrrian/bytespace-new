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
    src: "/assets/auth/ring-lime.svg",
    left: 50,
    top: 30,
    width: 146,
    height: 146,
  },
  spring: {
    src: "/assets/auth/spring-white.svg",
    left: 340,
    top: 320,
    width: 175,
    height: 175,
  },
  cone: {
    src: "/assets/auth/cone-lime.svg",
    left: -20,
    top: 390,
    width: 188,
    height: 188,
  },
  students: { left: 226, top: 435 },
} as const;
