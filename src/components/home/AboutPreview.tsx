import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/animations";

const pillars = [
  { title: "3D Printing", note: "Layer-level control over how an object is made." },
  { title: "Design", note: "Form, proportion and detail resolved before printing." },
  { title: "Digital Fabrication", note: "Digital files translated into physical parts." },
  { title: "Finishing", note: "Hand work that decides how the final object reads." },
];

export function AboutPreview() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <Container>
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20"
        >
          <div className="flex flex-col gap-6">
            <motion.span variants={fadeUp} className="label-mono flex items-center gap-3">
              <span className="h-px w-8 bg-border-strong" aria-hidden="true" />
              About Blend Lab
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl leading-[1.05] font-semibold sm:text-4xl lg:text-5xl"
            >
              Ideas deserve to exist in the real world.
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-xl leading-relaxed text-muted-foreground">
              Blend Lab combines 3D printing, design, digital fabrication, technology and detailed
              finishing to turn digital concepts into physical objects.
            </motion.p>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="flex flex-col gap-2 bg-background p-6"
              >
                <h3 className="font-display text-base font-semibold">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{pillar.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
