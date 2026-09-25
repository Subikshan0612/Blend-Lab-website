import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MaterialCard } from "./MaterialCard";
import { materials } from "@/data/materials";
import { revealViewport, staggerContainer } from "@/lib/animations";

export function Materials() {
  return (
    <section id="materials" className="border-t border-border bg-surface/30 py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Surfaces"
          title="Materials & Finishes"
          description="A visual exploration of what a print can become once it leaves the plate."
        />
        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {materials.map((material) => (
            <MaterialCard key={material.name} material={material} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
