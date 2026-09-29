import { cn } from "@/lib/utils";

const titleSizes = {
  lg: "text-3xl sm:text-4xl lg:text-heading-m",
  md: "text-2xl sm:text-3xl lg:text-heading-s",
} as const;

type SectionHeadingProps = {
  title: string; // use "\n" for a line break
  description?: string;
  align?: "center" | "left";
  size?: keyof typeof titleSizes;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      <h2
        className={cn(
          "whitespace-pre-line font-semibold leading-[1.2] tracking-[-0.01em] text-neutral-950",
          titleSizes[size],
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-[900px] text-body-m text-neutral-400 lg:text-body-l">
          {description}
        </p>
      )}
    </div>
  );
}
