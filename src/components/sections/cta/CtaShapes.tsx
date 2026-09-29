import Image from "next/image";
import { ctaShapes } from "@/data/cta";
import { dx } from "@/lib/utils";

export function CtaShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {ctaShapes.map((shape) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
          className="absolute h-auto max-w-none"
          style={{
            left: dx(shape.left),
            top: dx(shape.top),
            width: dx(shape.width),
          }}
        />
      ))}
    </div>
  );
}
