import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { revealViewport, staggerContainer } from "@/lib/animations";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
  /** "asymmetric" mixes column spans; "uniform" is a plain responsive grid. */
  layout?: "asymmetric" | "uniform";
  className?: string;
}

export function ProjectGrid({ projects, layout = "asymmetric", className }: ProjectGridProps) {
  if (layout === "asymmetric") {
    const [lead, functional, character, prototype, decorative, batch] = projects;

    if (lead && functional && character && prototype && decorative && batch) {
      return (
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className={cn("grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-6", className)}
        >
          <ProjectCard
            project={lead}
            aspect="landscape"
            className="sm:col-span-2 lg:col-span-4"
          />
          <ProjectCard project={functional} className="self-start lg:col-span-2" />

          <div className="grid items-start gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-3">
            <ProjectCard project={character} aspect="portrait" className="self-start" />

            <div className="grid items-start gap-4 lg:col-span-2 lg:grid-cols-2">
              <ProjectCard project={prototype} className="self-start" />
              <ProjectCard project={decorative} className="self-start" />
              <ProjectCard
                project={batch}
                aspect="landscape"
                className="self-start lg:col-span-2"
              />
            </div>
          </div>
        </motion.div>
      );
    }
  }

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className={cn("grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-6", className)}
    >
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={project.slug}
            project={project}
            className={cn("self-start lg:col-span-2", index === 0 && "sm:col-span-2 lg:col-span-2")}
          />
        );
      })}
    </motion.div>
  );
}
