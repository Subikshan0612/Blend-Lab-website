import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/brand-button";
import { BlendLab3DHeroSlot } from "@/components/3d/BlendLab3DHeroSlot";
import { fadeUp, staggerContainer } from "@/lib/animations";

const headingLines = ["Build.", "Create.", "Blend."];

export function Hero() {
  return (
    <section
      id="main-hero"
      className="relative scroll-mt-16 overflow-hidden pt-24 pb-16 lg:scroll-mt-20 lg:pt-36 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 hero-light" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] grid-field opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-10">
          <motion.div
            variants={staggerContainer(0.09, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8"
          >
            <motion.span variants={fadeUp} className="label-mono flex items-center gap-3">
              <span className="size-1.5 bg-cyan" aria-hidden="true" />
              Digital Fabrication Studio
            </motion.span>

            <h1 className="text-[3.25rem] leading-[0.92] font-semibold sm:text-7xl lg:text-8xl">
              {headingLines.map((line, index) => (
                <motion.span key={line} variants={fadeUp} className="block">
                  {index === 2 ? <span className="text-cyan">{line}</span> : line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Custom 3D printing, product prototyping, small-batch fabrication, and detailed
              finishing — built for ideas that deserve to exist.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <ButtonLink to="/quote" size="lg">
                Start a Project
              </ButtonLink>
              <ButtonLink to="/work" variant="outline" size="lg">
                Explore Our Work
              </ButtonLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mx-auto w-full max-w-[520px]"
          >
            {/* Isolated 3D slot — Spline scene drops in here later. */}
            <BlendLab3DHeroSlot />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
