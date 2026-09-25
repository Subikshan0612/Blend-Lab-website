import { cn } from "@/lib/utils";
import { ProgressiveImage } from "@/components/ui/ProgressiveImage";
import type { Project } from "@/data/projects";

/**
 * Image slot for a project. When `project.image` is set it renders a real
 * responsive image; until then it renders a designed placeholder so the layout
 * reads as finished. Replace by adding `image` in src/data/projects.ts.
 */
export function ProjectImageSlot({ project, className }: { project: Project; className?: string }) {
  if (project.image) {
    const sizes =
      project.span === "wide"
        ? "(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 4rem), 820px"
        : "(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(50vw - 2.5rem), 410px";

    return (
      <ProgressiveImage
        src={project.image}
        srcSet={project.imageSrcSet}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
        width={project.imageWidth}
        height={project.imageHeight}
        sizes={sizes}
        className="size-full"
        imageClassName={cn("object-cover", className)}
      />
    );
  }

  return null;
}
