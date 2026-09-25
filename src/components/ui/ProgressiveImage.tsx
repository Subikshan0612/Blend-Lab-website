import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad" | "onError"> {
  imageClassName?: string;
}

export function ProgressiveImage({
  alt,
  className,
  imageClassName,
  ...props
}: ProgressiveImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image?.complete) return;
    setStatus(image.naturalWidth > 0 ? "loaded" : "error");
  }, [props.src, props.srcSet]);

  return (
    <span className={cn("relative block overflow-hidden bg-surface", className)}>
      {status === "loading" ? (
        <span
          className="absolute inset-0 animate-pulse bg-muted/60 motion-reduce:animate-none"
          aria-hidden="true"
        />
      ) : null}

      {status === "error" ? (
        <span className="absolute inset-0 grid place-items-center bg-surface px-4 text-center font-mono text-[0.65rem] uppercase text-muted-foreground">
          Image unavailable
        </span>
      ) : null}

      <img
        ref={imageRef}
        {...props}
        alt={alt}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={cn(
          "size-full object-cover transition-opacity duration-500 motion-reduce:transition-none",
          status === "loaded" ? "opacity-100" : "opacity-0",
          imageClassName,
        )}
      />
    </span>
  );
}