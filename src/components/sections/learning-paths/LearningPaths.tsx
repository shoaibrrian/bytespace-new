import { CategoryCard } from "@/components/cards/CategoryCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningPaths, learningPathsSection } from "@/data/learning-paths";

export function LearningPaths() {
  return (
    <section id="learning-paths" className="bg-white pb-16 lg:pb-24">
      <Container>
        <SectionHeading
          size="md"
          title={learningPathsSection.title}
          description={learningPathsSection.description}
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-18 lg:grid-cols-6 lg:gap-10">
          {learningPaths.map((path) => (
            <CategoryCard key={path.id} label={path.label} icon={path.icon} />
          ))}
        </div>
      </Container>
    </section>
  );
}
