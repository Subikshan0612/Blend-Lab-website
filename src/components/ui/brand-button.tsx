import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-cyan",
        outline: "border border-border-strong text-foreground hover:border-cyan hover:text-cyan",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-13 px-8",
        sm: "h-9 px-4",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & ButtonVariantProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof Link> & ButtonVariantProps) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & ButtonVariantProps) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
