import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/brand-button";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";
import { revealViewport, staggerContainer } from "@/lib/animations";

export function ServicesPreview({ showCta = true }: { showCta?: boolean }) {
  return (
    <section id="services" className="border-t border-border bg-surface/30 py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Services"
          title="What the studio does"
          description="Focused capabilities for turning a file, a sketch or a rough idea into a finished physical object."
        />

        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="flex flex-col border-b border-border"
        >
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </motion.div>

        {showCta ? (
          <div>
            <ButtonLink to="/services" variant="outline">
              Service Detail
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
