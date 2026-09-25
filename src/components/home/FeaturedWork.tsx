import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/brand-button";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Work"
            description="Objects, prototypes and ideas brought into the physical world."
          />
          <ButtonLink to="/work" variant="outline">
            All Work
          </ButtonLink>
        </div>
        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}
