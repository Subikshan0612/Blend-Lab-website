import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";

/**
 * Client-only, lazily loaded wrapper around the isolated 3D hero.
 * Keeps any future WebGL/Spline payload out of the SSR + initial bundle.
 */
const BlendLab3DHero = lazy(() => import("./BlendLab3DHero"));

function SlotFallback() {
  return (
    <div className="relative aspect-square w-full border border-border grid-field" aria-hidden="true">
      <div className="absolute inset-0 hero-light" />
    </div>
  );
}

export function BlendLab3DHeroSlot() {
  return (
    <ClientOnly fallback={<SlotFallback />}>
      <Suspense fallback={<SlotFallback />}>
        <BlendLab3DHero />
      </Suspense>
    </ClientOnly>
  );
}
