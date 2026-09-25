import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { OpeningExperience } from "@/components/home/OpeningExperience";
import { CapabilityStrip } from "@/components/home/CapabilityStrip";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Process } from "@/components/home/Process";
import { Materials } from "@/components/home/Materials";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CTASection } from "@/components/home/CTASection";

const title = "Blend Lab — 3D Printing & Digital Fabrication";
const description =
  "Blend Lab is a digital fabrication studio: custom 3D printing, product prototyping, small-batch production and detailed finishing.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  return (
    <>
      <OpeningExperience />
      <Hero />
      <CapabilityStrip />
      <FeaturedWork />
      <ServicesPreview />
      <Process />
      <Materials />
      <AboutPreview />
      <CTASection />
    </>
  );
}
