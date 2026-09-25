import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ProgressiveImage } from "@/components/ui/ProgressiveImage";
import type { Material } from "@/data/materials";

export function MaterialCard({ material }: { material: Material }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover="hover"
      className="group relative flex flex-col gap-5 border border-border bg-surface/40 transition-colors duration-500 hover:border-border-strong"
    >
      <motion.div
        variants={{ hover: { scale: 1.04 } }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="aspect-[4/3] w-full overflow-hidden"
      >
        <ProgressiveImage
          src={material.image}
          srcSet={material.imageSrcSet}
          sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(50vw - 2.5rem), calc(25vw - 2rem)"
          alt={material.imageAlt}
          loading="lazy"
          decoding="async"
          width={material.imageWidth}
          height={material.imageHeight}
          className="size-full"
        />
      </motion.div>
      <div className="flex flex-col gap-2 px-6 pb-6">
        <span className="label-mono">{material.kind}</span>
        <h3 className="text-lg font-semibold">{material.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{material.note}</p>
      </div>
    </motion.article>
  );
}
