import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { ProgressiveImage } from "@/components/ui/ProgressiveImage";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover="hover"
      className="group relative flex flex-col gap-5 border-t border-border py-9 transition-colors duration-500 hover:border-cyan md:flex-row md:items-start md:gap-12"
    >
      <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-cyan md:w-16">
        {service.number}
      </span>

      <div className="order-first aspect-[16/10] w-full shrink-0 overflow-hidden bg-surface md:order-none md:aspect-[4/3] md:w-44 lg:w-52">
        <motion.div
          variants={{ hover: { scale: 1.035 } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="size-full"
        >
          <ProgressiveImage
            src={service.image}
            srcSet={service.imageSrcSet}
            sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1023px) 176px, 208px"
            alt={service.imageAlt}
            loading="lazy"
            decoding="async"
            width={service.imageWidth}
            height={service.imageHeight}
            className="size-full"
          />
        </motion.div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <motion.h3
          variants={{ hover: { x: 6 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-semibold sm:text-3xl"
        >
          {service.title}
        </motion.h3>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {service.description}
        </p>
      </div>

      <ul className="flex flex-col gap-2 md:w-52 lg:w-60">
        {service.points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-1 bg-border-strong" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>

      <motion.span
        variants={{ hover: { x: 6 } }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-muted-foreground transition-colors group-hover:text-cyan"
        aria-hidden="true"
      >
        <ArrowRight className="size-5" />
      </motion.span>
    </motion.article>
  );
}
