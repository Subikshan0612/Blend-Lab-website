import { lazy, Suspense, useEffect, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";

const VolumetricText = lazy(() => import("./VolumetricText"));

function OpeningFallback() {
  return (
    <div className="grid size-full place-items-center bg-background" aria-hidden="true">
      <span className="font-display text-[clamp(1.9rem,4.5vw,4rem)] font-bold text-foreground">
        BLEND. LAB
      </span>
    </div>
  );
}

export function OpeningExperience() {
  const [isLight, setIsLight] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsLight(root.classList.contains("light"));
    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative z-10 h-svh min-h-[34rem] overflow-hidden bg-background"
      aria-label="Blend Lab introduction"
    >
      {isLight === null ? (
        <OpeningFallback />
      ) : (
        <ClientOnly fallback={<OpeningFallback />}>
          <Suspense fallback={<OpeningFallback />}>
            <VolumetricText
              text="BLEND. LAB"
              font={{
                fontFamily: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
                fontWeight: 800,
                fontSize: "44px",
                lineHeight: 1,
                letterSpacing: "0em",
              }}
              textColor={isLight ? "#202127" : "#ffffff"}
              backgroundColor={isLight ? "#f7f6f2" : "#000000"}
              shadowColor={isLight ? "#f7f6f2" : "#000000"}
              fitToWidth={false}
              fitPadding={0}
              lightX={50}
              lightY={30}
              followEase={100}
              lightSize={60}
              lightFalloff={60}
              shadowStrength={100}
              rainbow={isLight ? 175 : 250}
              dither={1}
              samples={64}
              quality={100}
            />
          </Suspense>
        </ClientOnly>
      )}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-28 bg-gradient-to-b from-transparent to-background sm:h-36"
        aria-hidden="true"
      />

      <a
        href="#main-hero"
        aria-label="Scroll to the main introduction"
        className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:bottom-8"
      >
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.22em]">Scroll</span>
        <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0" />
      </a>
    </section>
  );
}
