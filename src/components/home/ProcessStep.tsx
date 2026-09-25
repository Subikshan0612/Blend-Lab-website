import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { ProcessStepData } from "@/data/services";

export function ProcessStep({ step }: { step: ProcessStepData }) {
  return (
    <motion.li
      variants={fadeUp}
      className="group relative flex gap-6 border-l border-border py-8 pl-6 md:block md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-8"
    >
      <span
        className="absolute -left-[3px] top-10 size-[5px] bg-border-strong transition-colors duration-500 group-hover:bg-cyan md:-top-[3px] md:left-0"
        aria-hidden="true"
      />
      <span className="font-mono text-xs tracking-[0.2em] text-cyan">{step.number}</span>
      <div className="flex flex-col gap-2 md:mt-4 md:pr-8">
        <h3 className="text-xl font-semibold sm:text-2xl">{step.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
      </div>
    </motion.li>
  );
}
