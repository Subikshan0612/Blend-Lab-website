import type { ComponentProps, ElementType } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends ComponentProps<"div"> {
  as?: ElementType;
  width?: "default" | "wide";
}

export function Container({ as, width = "default", className, ...props }: ContainerProps) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        width === "wide" ? "max-w-[1600px]" : "max-w-[1440px]",
        className,
      )}
      {...props}
    />
  );
}
