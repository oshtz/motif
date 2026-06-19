/**
 * Shared mutable state for the dropper shader overlay.
 * Written to directly from mouse/card handlers, read from the RAF render loop.
 * Bypasses React/Zustand entirely — zero re-renders on mouse move.
 */
export const dropperMouse = {
  x: 0.5,
  y: 0.5,
};

/**
 * The currently hovered card element. The render loop reads its
 * getBoundingClientRect() each frame so the overlay tracks scroll automatically.
 */
export let dropperHoveredEl: HTMLElement | null = null;
export function setDropperHoveredEl(el: HTMLElement | null) {
  dropperHoveredEl = el;
}

/**
 * Pre-cached card textures keyed by generation ID.
 * Each card captures its iframe content ~1s after load.
 * Ready before dropper mode is ever activated.
 */
export const textureCache = new Map<string, HTMLCanvasElement>();
