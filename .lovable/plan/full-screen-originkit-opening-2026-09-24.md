# Full-screen Originkit opening

## What will change
- Add the uploaded Originkit Shadow Play component as a client-only, full-viewport opening section on the home page.
- Show “BLEND. LAB” in the supplied volumetric shadow treatment while preserving Blend Lab’s existing visual identity.
- Keep the current hero unchanged and position it immediately after the opening section, so it appears naturally when the visitor scrolls.
- Keep all other pages and home-page sections unchanged.

## Interaction and accessibility
- Preserve the uploaded pointer-following light interaction on mouse devices.
- Provide a stable default light position on touch devices.
- Respect reduced-motion preferences by rendering a stable frame without continuous pointer interpolation.
- Add a subtle scroll cue without blocking or hijacking normal page scrolling.

## Technical details
- Adapt the supplied browser-only WebGL component to the project’s React and TypeScript conventions.
- Lazy-load it behind the existing client-only boundary pattern so server rendering and the initial document remain reliable.
- Use the existing semantic color system around the effect and prevent horizontal overflow at desktop, tablet, and phone sizes.
- Verify the opening viewport, scroll transition into the existing hero, browser console, and responsive widths.
