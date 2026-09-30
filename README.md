# ByteSpace

A responsive, production-ready **landing page** for ByteSpace, an online course marketplace, plus **Sign In** and **Register** pages. Built pixel-faithfully from a Figma design with Next.js, TypeScript and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-App_Router-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-animations-0055FF?logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

**Live demo:** <https://bytespace-doin.vercel.app>

---

## Table of contents

- [Pages and features](#pages-and-features)
- [Tech stack](#tech-stack)
- [Design system](#design-system)
- [Project structure](#project-structure)
- [Component library](#component-library)
- [Engineering decisions](#engineering-decisions)
- [Accessibility](#accessibility)
- [Getting started](#getting-started)
- [Git workflow](#git-workflow)
- [Known limitations and next steps](#known-limitations-and-next-steps)
- [Author](#author)

## Pages and features

| Route       | Page             | Highlights                                                               |
| ----------- | ---------------- | ------------------------------------------------------------------------ |
| `/`         | Landing page     | 10 sections, scroll animations, animated category filter, count-up stats |
| `/sign-in`  | Sign In (bonus)  | Split layout, labelled form, social sign-in buttons                      |
| `/register` | Register (bonus) | Built on the same auth layout components as Sign In                      |

**Landing page sections:** Navbar, Hero, partner logo strip, Courses (with category filter), Learning Paths, Growth / Create & Manage Courses, Creator call-to-action, Testimonials, Footer with newsletter form.

**Notable behaviour**

- Navbar links use **scroll-spy**: the active link follows the section in view.
- The course filter uses a **shared-layout pill**: the active highlight slides between categories while the cards animate out and in.
- Stats **count up** when scrolled into view, without shifting the layout.
- The hero entrance is driven by **CSS keyframes** that start only after the hero images are decoded, so it stays smooth on first load.
- Every page change starts at the top of the page; hash links such as `/#courses` keep working.

## Tech stack

| Area      | Choice                                                    |
| --------- | --------------------------------------------------------- |
| Framework | Next.js 16 (App Router)                                   |
| Language  | TypeScript                                                |
| Styling   | Tailwind CSS v4, design tokens in `globals.css`           |
| Animation | Framer Motion, CSS keyframes for the hero entrance        |
| Fonts     | Poppins (`next/font/google`), Satoshi (`next/font/local`) |
| Images    | `next/image`                                              |
| Icons     | `lucide-react`, inline SVG for brand icons                |
| Utilities | `clsx`, `tailwind-merge`                                  |
| Hosting   | Vercel                                                    |

## Design system

All values come from the Figma style guide and are defined **once** in [`src/app/globals.css`](src/app/globals.css) through Tailwind's `@theme`. Components use token classes such as `bg-primary-700` or `text-body-l`, so a design change is a one-line edit.

- **Colors:** `neutral`, `primary` (blue) and `secondary` (lime), each with an 11-step scale (50 to 950)
- **Typography:** Poppins for headings, Satoshi for body text; body, label and heading scales with matching line-height and letter-spacing
- **Layout:** 1200px content container, spacing and radii from the design
- **Motion:** one shared easing curve and viewport rule in `src/lib/motion.ts`

```css
@theme {
  --color-primary-700: #0043ff;
  --color-secondary-400: #d4fb20;
  --text-body-l: 1.125rem;
  --text-body-l--line-height: 1.6;
  --container-page: 1200px;
}
```

## Project structure

```text
src/
├── app/
│   ├── layout.tsx            # fonts, providers, scroll handling
│   ├── page.tsx              # landing page composition
│   ├── globals.css           # design tokens and base styles
│   ├── sign-in/page.tsx
│   └── register/page.tsx
├── components/
│   ├── ui/                   # primitives: Button, Card, Badge, Pill, Input, ...
│   ├── cards/                # CourseCard, CategoryCard, TestimonialCard, ...
│   ├── layout/               # Navbar, Footer, Logo, NavLink, NewsletterForm
│   ├── sections/             # one folder per landing page section
│   │   ├── hero/  logo-strip/  courses/  learning-paths/
│   │   └── growth/  cta/  testimonials/
│   ├── auth/                 # AuthLayout, AuthCard, AuthShowcase, forms
│   ├── motion/               # Reveal, Stagger, Float, CountUp
│   └── icons/
├── data/                     # all copy, links and image paths
├── hooks/                    # useActiveSection (scroll-spy)
├── lib/                      # cn(), motion tokens, scaling helpers
└── fonts/
public/assets/                # assets grouped by section
```

## Component library

| Group  | Components                                                                                                                                                                                              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UI     | `Button`, `ButtonLink`, `Card`, `Badge`, `Pill`, `Container`, `SectionHeading`, `Input`, `FormField`, `FloatingCard`, `ProgressBar`, `AvatarGroup`, `StatItem`, `CheckList`, `ScaledStage`, `GlowLayer` |
| Cards  | `CourseCard`, `CategoryCard`, `TestimonialCard`, `RevenueCard`, `ProgressCard`, `StudentsCard`                                                                                                          |
| Motion | `Reveal`, `Stagger` / `StaggerItem`, `Float`, `CountUp`, `MotionProvider`                                                                                                                               |
| Auth   | `AuthLayout`, `AuthCard`, `AuthShowcase`, `SocialAuth`                                                                                                                                                  |

Components are reused across pages. For example, the Sign In and Register pages reuse `CourseCard` and `StudentsCard` from the landing page, and `AvatarGroup` is themed through CSS variables instead of being duplicated.

## Engineering decisions

- **Data-driven content.** Copy, links and image paths live in `src/data/*`, so components contain markup and behaviour only.
- **Tokens over magic numbers.** No hex codes or one-off font sizes inside components.
- **Proportional hero.** The hero visual is positioned in Figma pixels and scaled with the viewport through a single CSS variable, so it matches the design at 1440px and scales cleanly up and down.
- **Layout-safe animation.** Only `opacity` and `transform` are animated, which avoids layout shift and keeps animations on the compositor.
- **Reduced motion.** `prefers-reduced-motion` is respected globally through `MotionConfig` and a CSS media query.
- **Small, single-purpose components.** Sections are composed from cards and primitives rather than written as one large file each.
- **Performance basics.** `next/image` everywhere, priority loading for the hero image, self-hosted fonts through `next/font`, SVG for logos.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Visible `<label>` on every form field, linked with `useId`; correct `type` and `autoComplete` values
- `aria-current` on the active nav link, `aria-pressed` on category pills, `aria-label` on icon-only buttons
- Decorative images use empty `alt` text; content images have descriptive `alt`
- Keyboard-friendly focus states on inputs and interactive elements

## Getting started

**Prerequisites:** Node.js 20 or newer.

```bash
git clone https://github.com/shoaibrrian/bytespace-new.git
cd bytespace-new
npm install
npm run dev
```

Open <http://localhost:3000>.

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Git workflow

`main` is production and is deployed to Vercel. Work is integrated through `develop`, and every feature is built on its own branch and merged with a pull request.

```text
main         ← release PR (develop → main), auto-deployed
 └─ develop
      ├─ feature/landing-page
      ├─ feature/sign-in
      └─ feature/register
```

Commits follow the Conventional Commits style (`feat:`, `fix:`, `perf:`, `chore:`, `docs:`). The closed pull requests document the history of each feature.

## Known limitations and next steps

- Sign In, Register and the newsletter form validate in the browser but do not submit anywhere yet; wiring them to an auth and newsletter backend was outside the scope of this task.
- Course search, the "+ More" categories and some footer links are visual placeholders.
- Course data is static (`src/data/courses.ts`); the next step would be to load it from an API.
- Adding unit tests for the reusable components and a Playwright smoke test for the key flows.

## Credits

- Design: ByteSpace Figma file provided for the assessment
- Fonts: [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts) and [Satoshi](https://www.fontshare.com/fonts/satoshi) (Indian Type Foundry, Fontshare)
- Icons: [Lucide](https://lucide.dev)

## Author

**Shoaib Rahman Rian**
[GitHub](https://github.com/shoaibrrian) · [LinkedIn](https://linkedin.com/in/shoaibrahmanrian)
