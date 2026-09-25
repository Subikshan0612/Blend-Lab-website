import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "./ProcessStep";
import { processSteps } from "@/data/services";
import { revealViewport, staggerContainer } from "@/lib/animations";

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="How it works" title="Four stages, start to finish" />

        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-0 md:grid-cols-4"
        >
          {processSteps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
