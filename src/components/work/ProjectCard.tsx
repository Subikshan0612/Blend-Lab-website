import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectImageSlot } from "./ProjectImageSlot";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
  /** Taller media frame for hero slots in the asymmetric grid. */
  aspect?: "square" | "portrait" | "landscape";
}

const aspects = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
} as const;

export function ProjectCard({ project, className, aspect = "square" }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover="hover"
      className={cn("group relative flex flex-col border border-border bg-surface/40", className)}
    >
      <div className={cn("relative overflow-hidden", aspects[aspect])}>
        <motion.div
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="size-full"
        >
          <ProjectImageSlot project={project} />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="flex items-start justify-between gap-6 p-6">
        <div className="flex flex-col gap-2">
          <span className="label-mono">{project.category}</span>
          <motion.h3
            variants={{ hover: { x: 4 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl font-semibold sm:text-2xl"
          >
            {project.title}
          </motion.h3>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        </div>
        <motion.span
          variants={{ hover: { x: 3, y: -3 } }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-1 text-muted-foreground transition-colors group-hover:text-cyan"
          aria-hidden="true"
        >
          <ArrowUpRight className="size-5" />
        </motion.span>
      </div>
    </motion.article>
  );
}
