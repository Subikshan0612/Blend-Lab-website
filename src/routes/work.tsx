import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryFilter } from "@/components/work/CategoryFilter";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { CTASection } from "@/components/home/CTASection";
import { projectCategories, projects } from "@/data/projects";

const title = "Work — Blend Lab";
const description =
  "Selected Blend Lab work: custom prints, collectibles, functional parts and product prototypes.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 hero-light" aria-hidden="true" />
        <Container className="relative flex flex-col gap-10">
          <SectionHeading
            eyebrow="Portfolio"
            title="Objects we have made"
            description="Temporary project entries — replace them with real Blend Lab pieces as they are photographed."
          />
          <CategoryFilter categories={projectCategories} active={active} onChange={setActive} />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          {filtered.length ? (
            <ProjectGrid key={active} projects={filtered} layout="uniform" />
          ) : (
            <p className="text-muted-foreground">Nothing in this category yet.</p>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
