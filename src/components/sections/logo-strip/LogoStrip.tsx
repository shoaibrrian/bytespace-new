import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { partnerLogos } from "@/data/logos";

export function LogoStrip() {
  return (
    <section aria-label="Our partners" className="bg-neutral-50 py-12 lg:py-20">
      <Container>
        <Stagger
          as="ul"
          gap={0.1}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-x-[72px]"
        >
          {partnerLogos.map((logo, index) => (
            <StaggerItem as="li" key={logo.src}>
              <Image
                src={logo.src}
                alt={`${logo.alt} ${index + 1}`}
                width={169}
                height={42}
                className="h-auto w-[120px] transition-transform duration-300 hover:scale-105 sm:w-[140px] lg:w-[169px]"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
