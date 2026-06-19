export const VIEWPORT_WIDTH = 800;

// Clamp bounds for the thumbnail aspect ratio
const MIN_RATIO = 3 / 4; // 0.75, moderate portrait
const MAX_RATIO = 21 / 9; // ~2.33, ultra-wide

/** Measure the content dimensions inside the iframe body.
 *  Height is capped at 2× the width so scrollable pages don't
 *  produce extremely tall thumbnails. */
export function measureContentSize(doc: Document): {
  width: number;
  height: number;
} {
  const body = doc.body;
  if (!body) return { width: VIEWPORT_WIDTH, height: 600 };

  const children = Array.from(body.children) as HTMLElement[];
  if (children.length === 0) {
    const w = Math.max(body.scrollWidth, body.clientWidth);
    const h = Math.max(body.scrollHeight, body.clientHeight);
    return { width: w, height: Math.min(h, w / MIN_RATIO) };
  }

  let maxRight = 0;
  let maxBottom = 0;

  for (const child of children) {
    const rect = child.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) continue;
    maxRight = Math.max(maxRight, rect.right);
    maxBottom = Math.max(maxBottom, rect.bottom);
  }

  if (maxRight === 0 || maxBottom === 0) {
    const w = Math.max(body.scrollWidth, body.clientWidth);
    const h = Math.max(body.scrollHeight, body.clientHeight);
    return { width: w, height: Math.min(h, w / MIN_RATIO) };
  }

  return { width: maxRight, height: Math.min(maxBottom, maxRight / MIN_RATIO) };
}

/** Return the actual content aspect ratio, clamped to reasonable bounds */
export function pickAspectRatio(w: number, h: number): number {
  const ratio = w / h;
  return Math.max(MIN_RATIO, Math.min(MAX_RATIO, ratio));
}

// ── Mobile-first detection ──────────────────────────────────────────

const MOBILE_WIDTH_THRESHOLD = 540; // content narrower than this = mobile-first

export interface MobileLayout {
  isMobile: boolean;
  contentLeft: number;
  contentTop: number;
  contentWidth: number;
  contentHeight: number;
}

const MOBILE_FALLBACK: MobileLayout = {
  isMobile: false,
  contentLeft: 0,
  contentTop: 0,
  contentWidth: VIEWPORT_WIDTH,
  contentHeight: 600,
};

/**
 * Walk the DOM (up to 4 levels deep) through full-width wrapper elements
 * to find a narrow, tall content container — a strong signal that the
 * design is mobile-first. Returns the content band coordinates so the
 * card can zoom/crop into it.
 */
export function detectMobileLayout(doc: Document): MobileLayout {
  const body = doc.body;
  if (!body) return MOBILE_FALLBACK;

  let el: Element = body;

  for (let depth = 0; depth < 4; depth++) {
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) break;

    // Find the tallest visible child — the main content container
    let tallest: HTMLElement | null = null;
    let tallestHeight = 0;

    for (const child of children) {
      const rect = child.getBoundingClientRect();
      if (rect.height > tallestHeight && rect.width > 20) {
        tallest = child;
        tallestHeight = rect.height;
      }
    }

    if (!tallest) break;

    const rect = tallest.getBoundingClientRect();

    // Narrow + tall = candidate mobile content container
    if (rect.width < MOBILE_WIDTH_THRESHOLD && rect.height > 400) {
      // Guard 1: must be roughly centered (mobile layouts center their content)
      const elCenter = rect.left + rect.width / 2;
      const vpCenter = VIEWPORT_WIDTH / 2;
      const isCentered = Math.abs(elCenter - vpCenter) < VIEWPORT_WIDTH * 0.15;

      // Guard 2: no wide siblings (otherwise it's a component in a desktop layout)
      const hasWideSibling = children.some((c) => {
        if (c === tallest) return false;
        const r = c.getBoundingClientRect();
        return r.width >= MOBILE_WIDTH_THRESHOLD && r.height > 100;
      });

      if (isCentered && !hasWideSibling) {
        return {
          isMobile: true,
          contentLeft: rect.left,
          contentTop: rect.top,
          contentWidth: rect.width,
          contentHeight: rect.height,
        };
      }
      // Failed guards — not a mobile layout at this level
      break;
    }

    // Full-width wrapper — drill deeper
    if (rect.width >= VIEWPORT_WIDTH * 0.85) {
      el = tallest;
      continue;
    }

    // Neither narrow nor full-width — not a typical mobile pattern
    break;
  }

  return MOBILE_FALLBACK;
}
