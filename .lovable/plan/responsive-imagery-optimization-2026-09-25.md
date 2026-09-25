# Responsive imagery optimization

## Goal
Improve the existing work and services photography without changing the visual design.

## Changes
- Create smaller WebP variants for every existing work and service image, while keeping the original files as fallbacks.
- Add width-based `srcset` values so phones, tablets, and desktops download an appropriately sized image.
- Keep native lazy loading and asynchronous decoding for below-the-fold images.
- Retain explicit intrinsic width and height values to reserve space before each image loads and prevent layout shifts.
- Refine each `sizes` hint to match the actual work-grid and service-row widths at responsive breakpoints.

## Verification
- Confirm every image loads without errors and selects a responsive candidate.
- Check work and services at desktop, tablet, and phone widths for stable layout and no horizontal overflow.
- Confirm the production preview builds cleanly.
