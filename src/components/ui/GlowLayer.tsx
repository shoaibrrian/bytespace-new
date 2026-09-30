import Image from "next/image";

type Glow = {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

type GlowLayerProps = {
  glows: readonly Glow[];
  designHeight: number;
  designWidth?: number;
};

export function GlowLayer({
  glows,
  designHeight,
  designWidth = 1440,
}: GlowLayerProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {glows.map((glow, index) => (
        <Image
          key={`${glow.src}-${index}`}
          src={glow.src}
          alt=""
          width={glow.width}
          height={glow.height}
          className="absolute h-auto max-w-none"
          style={{
            left: `${(glow.left / designWidth) * 100}%`,
            top: `${(glow.top / designHeight) * 100}%`,
            width: `${(glow.width / designWidth) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
