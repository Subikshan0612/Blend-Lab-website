# Simplify the Blend Lab 3D hero

## Changes
- Keep the existing public Spline scene URL and isolated loading architecture.
- Remove all React-driven hover, cursor, floating, idle-sway, and scroll transforms from the 3D logo.
- Render the Spline canvas directly inside its existing responsive hero slot.
- Preserve loading, failure, accessibility, transparency, and responsive sizing behavior.

## Verification
- Confirm the configured scene URL is unchanged.
- Search the 3D hero for any remaining website-side motion or pointer logic.
- Check the homepage at 1440, 1280, 1024, 820, 768, 480, 390, and 375px for overflow and stable positioning.
- Confirm the preview build and browser console are clean.

## Technical details
Only `BlendLab3DHero.tsx` should need modification. The Spline project remains untouched and supplies all keycap levitation and idle sway.
