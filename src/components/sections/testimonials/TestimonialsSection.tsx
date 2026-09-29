import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { GlowLayer } from "@/components/ui/GlowLayer";
import {
  testimonials,
  testimonialsGlows,
  testimonialsSection,
} from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-neutral-50 py-16 lg:pb-14 lg:pt-[75px]"
    >
      <GlowLayer
        glows={testimonialsGlows.items}
        designHeight={testimonialsGlows.designHeight}
      />

      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_582px] lg:items-center lg:gap-0">
          <h2 className="whitespace-pre-line text-3xl font-semibold leading-[1.3] tracking-[-0.01em] text-neutral-950 sm:text-4xl lg:text-heading-section">
            {testimonialsSection.title}
          </h2>
          <p className="text-body-l text-neutral-600">
            {testimonialsSection.description}
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
