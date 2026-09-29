import Image from "next/image";
import { Float } from "@/components/motion/Float";
import { Reveal } from "@/components/motion/Reveal";
import { ctaShapes } from "@/data/cta";
import { dx } from "@/lib/utils";

export function CtaShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {ctaShapes.map((shape, i) => (
        <Reveal
          key={shape.src}
          from="none"
          scaleFrom={0.7}
          delay={i * 0.08}
          duration={0.9}
          className="absolute"
          style={{
            left: dx(shape.left),
            top: dx(shape.top),
            width: dx(shape.width),
          }}
        >
          <Float
            amplitude={8 + (i % 3) * 4}
            duration={4.6 + i * 0.5}
            delay={i * 0.3}
            rotate={i % 2 ? 4 : -4}
          >
            <Image
              src={shape.src}
              alt=""
              width={shape.width}
              height={shape.height}
              className="h-auto w-full max-w-none"
            />
          </Float>
        </Reveal>
      ))}
    </div>
  );
}
