import type { Transition, Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const baseTransition: Transition = { duration: 0.7, ease: EASE };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: baseTransition },
};

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/** Shared viewport config so reveals never re-trigger or cause layout shifts. */
export const revealViewport = { once: true, amount: 0.25 } as const;
