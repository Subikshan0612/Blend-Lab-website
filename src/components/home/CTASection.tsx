import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/brand-button";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 hero-light" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-field opacity-70" aria-hidden="true" />
      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="flex flex-col items-start gap-8"
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-3xl text-balance text-4xl leading-[0.98] font-semibold sm:text-5xl lg:text-6xl"
          >
            Have something in mind?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Tell us what you want to build.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <ButtonLink to="/quote" size="lg">
              Start a Project
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline" size="lg">
              Contact Blend Lab
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
