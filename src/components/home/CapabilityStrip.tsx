import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { capabilities } from "@/data/services";
import { fadeIn, revealViewport, staggerContainer } from "@/lib/animations";

export function CapabilityStrip() {
  return (
    <section aria-label="Capabilities" className="border-y border-border">
      <Container>
        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x"
        >
          {capabilities.map((capability) => (
            <motion.li
              key={capability}
              variants={fadeIn}
              className="label-mono flex h-16 items-center justify-center border-b border-border text-foreground/70 sm:h-20 sm:border-b-0"
            >
              {capability}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
