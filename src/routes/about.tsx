import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Process } from "@/components/home/Process";
import { CTASection } from "@/components/home/CTASection";

const title = "About — Blend Lab";
const description =
  "Blend Lab combines 3D printing, design, digital fabrication and detailed finishing to turn digital concepts into physical objects.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 hero-light" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Studio"
            title="A fabrication studio built around detail"
            description="Small, focused and technical — Blend Lab exists to move ideas out of files and into your hands."
          />
        </Container>
      </section>

      <AboutPreview />
      <Process />
      <CTASection />
    </>
  );
}
