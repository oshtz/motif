import { fixBareHexColors, PREVIEW_IFRAME_SANDBOX } from "./components/html-utils";

export interface RuntimeViewportAudit {
  viewportWidth: number;
  viewportHeight: number;
  clientWidth: number;
  scrollWidth: number;
  scrollHeight: number;
  overflowPixels: number;
  verticalOverflowPixels: number;
  overflowingElementCount: number;
  clippedTextCount: number;
  tinyTextCount: number;
  unlabeledControlCount: number;
  missingAltCount: number;
  duplicateIdCount: number;
  smallTapTargetCount: number;
  imageWithoutDimensionsCount: number;
  layoutShiftProxyCount: number;
  lowContrastCount: number;
  headingCount: number;
  h1Count: number;
  landmarkCount: number;
  totalElements: number;
  bodyTextLength: number;
  jsErrorCount: number;
  visualFingerprint?: string;
  timedOut?: boolean;
}

export interface RuntimeVisualDiff {
  fromViewportWidth: number;
  toViewportWidth: number;
  fingerprintChanged: boolean;
  overflowDelta: number;
  elementCountDelta: number;
}

export interface RuntimeQualityAudit {
  measurements: RuntimeViewportAudit[];
  visualDiffs?: RuntimeVisualDiff[];
  userAgent?: string;
  created_at: number;
}

const AUDIT_VIEWPORTS = [375, 768, 1280];

function fallbackMeasurement(viewportWidth: number, timedOut = false): RuntimeViewportAudit {
  return {
    viewportWidth,
    viewportHeight: 900,
    clientWidth: viewportWidth,
    scrollWidth: viewportWidth,
    scrollHeight: 900,
    overflowPixels: 0,
    verticalOverflowPixels: 0,
    overflowingElementCount: 0,
    clippedTextCount: 0,
    tinyTextCount: 0,
    unlabeledControlCount: 0,
    missingAltCount: 0,
    duplicateIdCount: 0,
    smallTapTargetCount: 0,
    imageWithoutDimensionsCount: 0,
    layoutShiftProxyCount: 0,
    lowContrastCount: 0,
    headingCount: 0,
    h1Count: 0,
    landmarkCount: 0,
    totalElements: 0,
    bodyTextLength: 0,
    jsErrorCount: 0,
    timedOut,
  };
}

function injectAuditScript(html: string, token: string): string {
  const script = `<script>
(() => {
  const token = ${JSON.stringify(token)};
  const errors = [];
  let sent = false;
  window.onerror = (message) => {
    errors.push(String(message || "runtime error"));
    return true;
  };
  window.onunhandledrejection = (event) => {
    errors.push(String(event.reason || "unhandled rejection"));
    event.preventDefault();
  };
  window.addEventListener("error", (event) => {
    errors.push(String(event.message || "runtime error"));
    event.preventDefault();
  }, true);
  window.addEventListener("unhandledrejection", (event) => {
    errors.push(String(event.reason || "unhandled rejection"));
    event.preventDefault();
  }, true);
  function number(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  function parseColor(value) {
    const match = String(value || "").match(/rgba?\\(([^)]+)\\)/i);
    if (!match) return null;
    const parts = match[1].split(",").map((part) => Number(part.trim()));
    return {
      r: number(parts[0]),
      g: number(parts[1]),
      b: number(parts[2]),
      a: parts.length > 3 ? number(parts[3], 1) : 1,
    };
  }
  function channel(value) {
    const normalized = value / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  }
  function contrast(a, b) {
    const l1 = 0.2126 * channel(a.r) + 0.7152 * channel(a.g) + 0.0722 * channel(a.b);
    const l2 = 0.2126 * channel(b.r) + 0.7152 * channel(b.g) + 0.0722 * channel(b.b);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }
  function backgroundFor(element) {
    let node = element;
    while (node && node.nodeType === 1) {
      const color = parseColor(getComputedStyle(node).backgroundColor);
      if (color && color.a > 0.05) return color;
      node = node.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  function hasDirectText(element) {
    return Array.from(element.childNodes).some((node) =>
      node.nodeType === Node.TEXT_NODE && String(node.textContent || "").trim().length > 0
    );
  }
  function textFor(element) {
    return String(element.innerText || element.textContent || "").trim();
  }
  function hashString(value) {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) {
      hash ^= value.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16);
  }
  function isVisible(element) {
    const style = getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }
  function hasLabel(element) {
    const tag = element.tagName.toLowerCase();
    if (tag === "input" && element.type === "hidden") return true;
    if (element.getAttribute("aria-label") || element.getAttribute("aria-labelledby") || element.getAttribute("title")) return true;
    return textFor(element).length > 0;
  }
  function isInteractive(element) {
    const tag = element.tagName.toLowerCase();
    return tag === "button" || tag === "a" || tag === "input" || tag === "select" || tag === "textarea" || element.getAttribute("role") === "button" || element.getAttribute("tabindex") !== null;
  }
  function measure() {
    const root = document.documentElement;
    const body = document.body || root;
    const elements = Array.from(body.querySelectorAll("*"));
    const visible = elements.filter(isVisible);
    let overflowingElementCount = 0;
    let clippedTextCount = 0;
    let tinyTextCount = 0;
    let lowContrastCount = 0;
    let checkedContrast = 0;
    let smallTapTargetCount = 0;
    let imageWithoutDimensionsCount = 0;
    let layoutShiftProxyCount = 0;
    const ids = new Map();
    const fingerprintParts = [];
    for (const element of visible) {
      const rect = element.getBoundingClientRect();
      if (rect.left < -2 || rect.right > window.innerWidth + 2) overflowingElementCount++;
      if (textFor(element) && element.scrollWidth > element.clientWidth + 2) clippedTextCount++;
      const style = getComputedStyle(element);
      if (element.id) ids.set(element.id, (ids.get(element.id) || 0) + 1);
      if (isInteractive(element) && (rect.width < 32 || rect.height < 32)) smallTapTargetCount++;
      if (element.tagName.toLowerCase() === "img" && (!element.getAttribute("width") || !element.getAttribute("height"))) imageWithoutDimensionsCount++;
      if ((style.animationName && style.animationName !== "none") || (style.transitionDuration && style.transitionDuration !== "0s")) layoutShiftProxyCount++;
      if (fingerprintParts.length < 220) {
        fingerprintParts.push([
          element.tagName,
          Math.round(rect.left / 8),
          Math.round(rect.top / 8),
          Math.round(rect.width / 8),
          Math.round(rect.height / 8),
          String(element.className || "").slice(0, 40),
          textFor(element).slice(0, 24),
        ].join(":"));
      }
      if (!hasDirectText(element)) continue;
      const fontSize = number(style.fontSize.replace("px", ""));
      if (fontSize > 0 && fontSize < 11) tinyTextCount++;
      if (checkedContrast < 160) {
        const fg = parseColor(style.color);
        const bg = backgroundFor(element);
        const weight = number(style.fontWeight, 400);
        const largeText = fontSize >= 24 || (fontSize >= 18 && weight >= 600);
        const target = largeText ? 3 : 4.5;
        if (fg && contrast(fg, bg) < target) lowContrastCount++;
        checkedContrast++;
      }
    }
    const clientWidth = root.clientWidth || window.innerWidth;
    const scrollWidth = Math.max(root.scrollWidth, body.scrollWidth, clientWidth);
    const scrollHeight = Math.max(root.scrollHeight, body.scrollHeight, window.innerHeight);
    const duplicateIdCount = Array.from(ids.values()).filter((count) => count > 1).length;
    return {
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      clientWidth,
      scrollWidth,
      scrollHeight,
      overflowPixels: Math.max(0, scrollWidth - clientWidth),
      verticalOverflowPixels: Math.max(0, scrollHeight - window.innerHeight),
      overflowingElementCount,
      clippedTextCount,
      tinyTextCount,
      unlabeledControlCount: Array.from(body.querySelectorAll("button,a,input,select,textarea")).filter((element) => !hasLabel(element)).length,
      missingAltCount: body.querySelectorAll("img:not([alt])").length,
      duplicateIdCount,
      smallTapTargetCount,
      imageWithoutDimensionsCount,
      layoutShiftProxyCount,
      lowContrastCount,
      headingCount: body.querySelectorAll("h1,h2,h3,h4,h5,h6").length,
      h1Count: body.querySelectorAll("h1").length,
      landmarkCount: body.querySelectorAll("main,nav,aside,header,footer,section,article,[role='main'],[role='navigation'],[role='banner'],[role='contentinfo']").length,
      totalElements: elements.length,
      bodyTextLength: textFor(body).length,
      jsErrorCount: errors.length,
      visualFingerprint: hashString(fingerprintParts.join("|")),
    };
  }
  function post() {
    if (sent) return;
    sent = true;
    parent.postMessage({ type: "motif:quality-audit", token, measurement: measure() }, "*");
  }
  window.addEventListener("load", () => setTimeout(post, 700));
  if (document.readyState === "complete") setTimeout(post, 700);
  setTimeout(post, 2300);
})();
</script>`;

  if (/<head[^>]*>/i.test(html)) {
    return html.replace(/<head([^>]*)>/i, `<head$1>${script}`);
  }
  return `${script}${html}`;
}

function measureViewport(html: string, viewportWidth: number): Promise<RuntimeViewportAudit> {
  return new Promise((resolve) => {
    const token = crypto.randomUUID();
    const iframe = document.createElement("iframe");
    let resolved = false;

    const cleanup = () => {
      window.removeEventListener("message", handleMessage);
      iframe.remove();
    };

    const finish = (measurement: RuntimeViewportAudit) => {
      if (resolved) return;
      resolved = true;
      cleanup();
      resolve(measurement);
    };

    const timer = window.setTimeout(() => {
      finish(fallbackMeasurement(viewportWidth, true));
    }, 3200);

    const handleMessage = (event: MessageEvent) => {
      if (event.source !== iframe.contentWindow) return;
      const data = event.data as {
        type?: string;
        token?: string;
        measurement?: RuntimeViewportAudit;
      };
      if (data?.type !== "motif:quality-audit" || data.token !== token || !data.measurement) {
        return;
      }
      window.clearTimeout(timer);
      finish({
        ...fallbackMeasurement(viewportWidth),
        ...data.measurement,
        viewportWidth,
      });
    };

    window.addEventListener("message", handleMessage);
    iframe.sandbox.value = PREVIEW_IFRAME_SANDBOX;
    iframe.title = "Runtime quality audit";
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.position = "fixed";
    iframe.style.left = "-10000px";
    iframe.style.top = "0";
    iframe.style.width = `${viewportWidth}px`;
    iframe.style.height = "900px";
    iframe.style.border = "0";
    iframe.style.pointerEvents = "none";
    iframe.srcdoc = injectAuditScript(fixBareHexColors(html), token);
    document.body.appendChild(iframe);
  });
}

function buildVisualDiffs(measurements: RuntimeViewportAudit[]): RuntimeVisualDiff[] {
  if (measurements.length < 2) return [];
  const baseline = measurements[0];
  return measurements.slice(1).map((measurement) => ({
    fromViewportWidth: baseline.viewportWidth,
    toViewportWidth: measurement.viewportWidth,
    fingerprintChanged: Boolean(
      baseline.visualFingerprint &&
      measurement.visualFingerprint &&
      baseline.visualFingerprint !== measurement.visualFingerprint
    ),
    overflowDelta: measurement.overflowPixels - baseline.overflowPixels,
    elementCountDelta: measurement.totalElements - baseline.totalElements,
  }));
}

export async function measureRuntimeQuality(html: string): Promise<RuntimeQualityAudit | undefined> {
  if (typeof document === "undefined" || !document.body) return undefined;
  const measurements: RuntimeViewportAudit[] = [];
  for (const width of AUDIT_VIEWPORTS) {
    measurements.push(await measureViewport(html, width));
  }
  return {
    measurements,
    visualDiffs: buildVisualDiffs(measurements),
    userAgent: navigator.userAgent,
    created_at: Date.now(),
  };
}
