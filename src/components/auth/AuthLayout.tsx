import { Logo } from "@/components/layout/Logo";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

type AuthLayoutProps = {
  heading: string;
  description: string;
  showcase: React.ReactNode;
  children: React.ReactNode;
};

export function AuthLayout({
  heading,
  description,
  showcase,
  children,
}: AuthLayoutProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-primary-800 bg-grid pb-16 lg:pb-[120px]">
      <Container className="pt-6 lg:pt-[33px]">
        <Reveal from="top" distance={16} trigger="load">
          <Logo />
        </Reveal>

        <div className="mt-8 grid gap-10 lg:mt-[53px] lg:grid-cols-[1fr_579px] lg:gap-0">
          <div>
            <Reveal from="left" distance={32} trigger="load">
              <h2 className="font-heading text-2xl font-semibold leading-[1.3] text-white">
                {heading}
              </h2>
              <p className="mt-4 max-w-[460px] text-body-l text-neutral-100">
                {description}
              </p>
            </Reveal>
            <div className="mt-22 hidden lg:block">{showcase}</div>
          </div>

          <Reveal from="right" distance={40} delay={0.15} trigger="load">
            {children}
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
