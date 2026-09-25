# Fast image loading states

## Goal
Make image-heavy sections render immediately and clearly while optimized images finish loading.

## Changes
- Add one reusable image component with an aspect-preserving placeholder, subtle loading shimmer, fade-in, and graceful error state.
- Use it for every work, service, and material/finish image while preserving existing responsive `srcset`, `sizes`, lazy loading, and explicit dimensions.
- Keep the small navigation/footer logo eager because delaying it would make the first view feel slower.
- Preserve the current card layout and hover behavior.

## Verification
- Confirm loading placeholders disappear after successful image loads.
- Confirm all responsive image candidates still load at desktop, tablet, and phone widths.
- Check for broken images, horizontal overflow, console errors, and a clean preview build.
