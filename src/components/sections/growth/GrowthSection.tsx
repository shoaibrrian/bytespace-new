import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { GlowLayer } from "@/components/ui/GlowLayer";
import { StatItem } from "@/components/ui/StatItem";
import { creatorSection, growthGlows, pathSection } from "@/data/growth";
import { CreatorVisual } from "./CreatorVisual";
import { FeatureCopy } from "./FeatureCopy";
import { FeatureRow } from "./FeatureRow";
import { PathVisual } from "./PathVisual";

export function GrowthSection() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-50 py-16 lg:py-[120px]">
      <GlowLayer
        glows={growthGlows.items}
        designHeight={growthGlows.designHeight}
      />

      <Container className="flex flex-col gap-16 lg:gap-[90px]">
        <FeatureRow
          text={
            <FeatureCopy title={pathSection.title}>
              <p className="mt-10 max-w-[500px] text-body-l text-neutral-600">
                {pathSection.description}
              </p>
              <div className="mt-10 flex gap-10 lg:gap-14">
                {pathSection.stats.map((stat) => (
                  <StatItem key={stat.label} {...stat} />
                ))}
              </div>
            </FeatureCopy>
          }
          visual={<PathVisual />}
        />

        <FeatureRow
          reverse
          text={
            <FeatureCopy title={creatorSection.title}>
              <p className="mt-10 max-w-[560px] text-body-l text-neutral-600">
                <strong className="font-bold text-neutral-950">
                  {creatorSection.brand}
                </strong>{" "}
                {creatorSection.description}
              </p>
              <div className="mt-10">
                <CheckList items={creatorSection.features} />
              </div>
            </FeatureCopy>
          }
          visual={<CreatorVisual />}
        />
      </Container>
    </section>
  );
}
