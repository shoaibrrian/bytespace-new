import { cn } from "@/lib/utils";

type FeatureRowProps = {
  text: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
};

export function FeatureRow({ text, visual, reverse = false }: FeatureRowProps) {
  return (
    <div className="grid items-center gap-10 xl:grid-cols-2">
      <div className={cn(reverse && "xl:order-2")}>{text}</div>
      <div
        className={cn(
          reverse ? "xl:order-1 xl:justify-self-start" : "xl:justify-self-end",
        )}
      >
        {visual}
      </div>
    </div>
  );
}
