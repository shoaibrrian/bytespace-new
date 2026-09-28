import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string; // use "\n" for a line break
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
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
      <h2 className="whitespace-pre-line text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-neutral-950 sm:text-4xl lg:text-heading-m">
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
