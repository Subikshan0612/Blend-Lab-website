# Smooth Opening-to-Hero Transition and Light Theme

## What will change
- Keep the compact Originkit opening as the first full screen, then blend it into the original hero with a restrained overlap/fade at the section boundary so scrolling feels continuous rather than like two stacked pages.
- Preserve normal scrolling, the existing hero layout, and reduced-motion accessibility.
- Make the opening canvas read the active site theme instead of permanently rendering black: dark mode keeps the current black treatment; light mode uses the site's warm light background, dark lettering, and a deeper cyan/blue volumetric treatment with suitable contrast.
- Ensure theme changes update the rendered canvas immediately, including after the visitor switches themes while the page is open.

## Verification
- Check the transition and light/dark switching at desktop, tablet, and phone widths.
- Confirm no horizontal overflow, broken canvas state, or preview errors.
- Confirm reduced-motion mode avoids the decorative reveal motion.
