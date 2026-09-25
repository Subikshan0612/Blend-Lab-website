import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Process } from "@/components/home/Process";
import { Materials } from "@/components/home/Materials";
import { CTASection } from "@/components/home/CTASection";

const title = "Services — Blend Lab";
const description =
  "Custom 3D printing, product prototyping, small batch production, finishing and painting, and custom model fabrication.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 hero-light" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Services"
            title="From file to finished object"
            description="Five capabilities covering printing, iteration, repeat runs and the hand work that follows."
          />
        </Container>
      </section>

      <ServicesPreview showCta={false} />
      <Process />
      <Materials />
      <CTASection />
    </>
  );
}
