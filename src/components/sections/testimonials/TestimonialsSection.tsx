import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
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
          <Reveal from="left" distance={40}>
            <h2 className="whitespace-pre-line text-3xl font-semibold leading-[1.3] tracking-[-0.01em] text-neutral-950 sm:text-4xl lg:text-heading-section">
              {testimonialsSection.title}
            </h2>
          </Reveal>
          <Reveal from="right" distance={40} delay={0.12}>
            <p className="text-body-l text-neutral-600">
              {testimonialsSection.description}
            </p>
          </Reveal>
        </div>

        <Stagger
          gap={0.14}
          delay={0.1}
          className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10"
        >
          {testimonials.map((testimonial) => (
            <StaggerItem
              key={testimonial.id}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
