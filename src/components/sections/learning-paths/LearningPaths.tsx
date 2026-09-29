import { CategoryCard } from "@/components/cards/CategoryCard";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningPaths, learningPathsSection } from "@/data/learning-paths";

export function LearningPaths() {
  return (
    <section id="learning-paths" className="bg-white pb-16 lg:pb-24">
      <Container>
        <Reveal>
          <SectionHeading
            size="md"
            title={learningPathsSection.title}
            description={learningPathsSection.description}
            descriptionClassName="max-w-[960px]"
          />
        </Reveal>
        <Stagger
          gap={0.08}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-18 lg:grid-cols-6 lg:gap-10"
        >
          {learningPaths.map((path) => (
            <StaggerItem key={path.id}>
              <CategoryCard label={path.label} icon={path.icon} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
