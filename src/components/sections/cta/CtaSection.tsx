import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaContent } from "@/data/cta";
import { CtaShapes } from "./CtaShapes";

export function CtaSection() {
  return (
    <div className="@container">
      <section
        id="creators"
        className="design-scale relative isolate flex items-center overflow-hidden bg-primary-800 bg-grid py-16 lg:min-h-[calc(488*var(--u))] lg:py-[calc(88*var(--u))]"
      >
        <CtaShapes />

        <Container className="relative z-10 text-center">
          <h2 className="whitespace-pre-line text-3xl font-semibold leading-[1.3] tracking-[-0.01em] text-white sm:text-4xl lg:text-heading-section">
            {ctaContent.title}
          </h2>
          <p className="mx-auto mt-10 max-w-[960px] text-body-l text-neutral-100">
            {ctaContent.description}
          </p>
          <div className="mt-10">
            <ButtonLink variant="secondary" href={ctaContent.action.href}>
              {ctaContent.action.label}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
