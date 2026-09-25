import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import "./theme-switch.css";

export type Theme = "dark" | "light";
export const THEME_STORAGE_KEY = "blend-lab-theme";

/** Runs before paint (inlined in <head>) to avoid a flash of the wrong theme. */
export const themeInitScript = `(function(){try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');var t=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(t);}catch(e){}})();`;

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  meta?.setAttribute("content", theme === "light" ? "#f7f6f2" : "#111318");
}

export function ThemeToggle({ className }: { className?: string | undefined }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current: Theme = document.documentElement.classList.contains("light") ? "light" : "dark";
    setTheme(current);
    applyTheme(current);

    // Follow system changes only while the user hasn't chosen explicitly.
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      const next: Theme = e.matches ? "light" : "dark";
      applyTheme(next);
      setTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const next: Theme = theme === "light" ? "dark" : "light";
  const label = `Switch to ${next} mode`;
  const stars = [1, 2, 3, 4, 5];

  return (
    <label title={label} className={cn("bl-theme-switch shrink-0", className)}>
      <input
        className="slider"
        type="checkbox"
        role="switch"
        aria-label="Dark mode"
        checked={theme !== "light"}
        onChange={() => {
          applyTheme(next);
          setTheme(next);
          try {
            localStorage.setItem(THEME_STORAGE_KEY, next);
          } catch {
            /* storage unavailable */
          }
        }}
      />
      <div className="switch" aria-hidden>
        <div className="suns" />
        <div className="moons">
          {stars.map((n) => (
            <div key={n} className={`star star-${n}`} />
          ))}
          <div className="first-moon" />
        </div>
        <div className="sand" />
        <div className="bb8">
          <div className="antennas">
            <div className="antenna short" />
            <div className="antenna long" />
          </div>
          <div className="head">
            <div className="stripe one" />
            <div className="stripe two" />
            <div className="eyes">
              <div className="eye one" />
              <div className="eye two" />
            </div>
            <div className="stripe detail">
              <div className="detail zero" />
              <div className="detail zero" />
              <div className="detail one" />
              <div className="detail two" />
              <div className="detail three" />
              <div className="detail four" />
              <div className="detail five" />
              <div className="detail five" />
            </div>
            <div className="stripe three" />
          </div>
          <div className="ball">
            <div className="lines one" />
            <div className="lines two" />
            <div className="ring one" />
            <div className="ring two" />
            <div className="ring three" />
          </div>
          <div className="shadow" />
        </div>
      </div>
    </label>
  );
}
