import { motion } from "framer-motion";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <motion.span variants={fadeUp} className="label-mono flex items-center gap-3">
          <span className="h-px w-8 bg-border-strong" aria-hidden="true" />
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        variants={fadeUp}
        className="text-balance text-3xl leading-[1.05] font-semibold sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p variants={fadeUp} className="max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
