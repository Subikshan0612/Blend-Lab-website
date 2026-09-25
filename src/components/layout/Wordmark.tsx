import { useEffect, useState, type PointerEvent } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** Canonical official logo asset — referenced everywhere the brand mark appears. */
export const LOGO_SRC = "/assets/blend-lab-logo.png";

const SPRING = { stiffness: 220, damping: 22, mass: 0.6 };
const MAX_TILT = 9; // degrees

/** True only on devices with a real hover-capable fine pointer. */
function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setFine(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setFine(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return fine;
}

function LogoMark({ interactive }: { interactive: boolean }) {
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const tilt = interactive && fine && !reduced;
  const subtle = interactive && fine && reduced;

  const px = useMotionValue(0); // -0.5..0.5
  const py = useMotionValue(0);
  const hover = useMotionValue(0);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);
  const sh = useSpring(hover, SPRING);

  const rotateY = useTransform(sx, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]);
  const scale = useTransform(sh, [0, 1], [1, 1.05]);
  const y = useTransform(sh, [0, 1], [0, -2]);
  const glow = useTransform(sh, [0, 1], [0, 1]);
  const glintX = useTransform(sx, [-0.5, 0.5], ["20%", "80%"]);
  const glintY = useTransform(sy, [-0.5, 0.5], ["20%", "80%"]);
  const glint = useTransform(
    [glintX, glintY] as never,
    ([gx, gy]: string[]) =>
      `radial-gradient(60% 60% at ${gx} ${gy}, color-mix(in oklab, var(--foreground) 22%, transparent), transparent 70%)`,
  );

  const img = (
    <img
      src={LOGO_SRC}
      alt=""
      width={40}
      height={40}
      className="relative size-9 shrink-0 object-contain lg:size-10"
      decoding="async"
      draggable={false}
    />
  );

  if (!tilt) {
    return (
      <span
        className={
          subtle
            ? "relative block transition-[transform,opacity] duration-300 group-hover:scale-[1.03] group-hover:opacity-95"
            : "relative block"
        }
      >
        {img}
      </span>
    );
  }

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <span
      className="relative block [perspective:500px]"
      onPointerEnter={() => hover.set(1)}
      onPointerMove={onMove}
      onPointerLeave={() => {
        hover.set(0);
        px.set(0);
        py.set(0);
      }}
    >
      <motion.span
        className="relative block will-change-transform [transform-style:preserve-3d]"
        style={{ rotateX, rotateY, scale, y }}
      >
        {/* Chromatic halo — cyan/violet hairline offsets, only while hovered */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -inset-1"
          style={{
            opacity: glow,
            boxShadow:
              "-1px 0 0 0 color-mix(in oklab, var(--brand-cyan) 55%, transparent), 1px 0 0 0 color-mix(in oklab, var(--brand-magenta) 45%, transparent), 0 6px 18px -8px color-mix(in oklab, var(--brand-violet) 45%, transparent)",
          }}
        />
        {img}
        {/* Glass glint following the cursor */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{ opacity: glow, backgroundImage: glint }}
        />
      </motion.span>
    </span>
  );
}

export function Wordmark({
  label = "Blend Lab",
  interactive = false,
}: {
  label?: string;
  interactive?: boolean;
}) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Blend Lab home">
      <LogoMark interactive={interactive} />
      <span className="font-display text-[0.95rem] font-semibold tracking-[0.02em]">{label}</span>
    </Link>
  );
}
