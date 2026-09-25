/**
 * BlendLab3DHero
 * ----------------------------------------------------------------------------
 * ISOLATED 3D SLOT. Only `./BlendLab3DHeroSlot.tsx` imports this file, and it
 * lazy-loads it on the client. Renders the authored Spline scene untouched;
 * Spline alone controls the keycap's levitation and idle sway.
 */
import { Component, lazy, Suspense, useState, type ReactNode } from "react";
import { SPLINE_SCENE_URL } from "./spline-config";

const Spline = lazy(() => import("@splinetool/react-spline"));

class SceneBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  override state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  override render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function Status({ text, pulse }: { text: string; pulse?: boolean }) {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <span className={`label-mono ${pulse ? "animate-pulse motion-reduce:animate-none" : ""}`}>{text}</span>
    </div>
  );
}

export default function BlendLab3DHero() {
  const [loaded, setLoaded] = useState(false);

  const frame = (children: ReactNode) => (
    <div
      className="relative aspect-square w-full"
      data-blendlab-3d-slot="true"
      role="img"
      aria-label="Blend Lab 3D logo"
    >
      {children}
    </div>
  );

  if (!SPLINE_SCENE_URL) return frame(<Status text="3D logo — scene not connected" />);

  const scene = (
    <SceneBoundary fallback={<Status text="3D logo unavailable" />}>
      <Suspense fallback={null}>
        <Spline
          scene={SPLINE_SCENE_URL}
          onLoad={() => setLoaded(true)}
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </SceneBoundary>
  );

  return frame(
    <>
      {!loaded ? <Status text="Loading 3D logo…" pulse /> : null}
      <div
        className="absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <div className="absolute inset-0">{scene}</div>
      </div>
    </>,
  );
}
