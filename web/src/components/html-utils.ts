export const STATIC_IFRAME_SANDBOX = "allow-same-origin";
export const INTERACTIVE_IFRAME_SANDBOX = "allow-scripts";
export const PREVIEW_IFRAME_SANDBOX = STATIC_IFRAME_SANDBOX;
export const INSPECT_IFRAME_SANDBOX = STATIC_IFRAME_SANDBOX;

const LEGACY_RUNTIME_PATTERN = /(?:cdn\.tailwindcss\.com|unpkg\.com\/(?:tailwindcss|@tailwindcss)|<script\b[^>]*\bsrc\s*=)/i;

export function requiresInteractivePreview(html: string): boolean {
  return LEGACY_RUNTIME_PATTERN.test(html);
}

export function fixBareHexColors(html: string): string {
  return html.replace(/\.replace\(\s*['"]#['"]\s*,\s*['"]['"]?\s*\)/g, "");
}

export function extractGeneratedBody(rawCode: string): string {
  let html = rawCode.trim();
  const fenceMatch = html.match(/```(?:html)?\s*\n?([\s\S]*?)(?:\n?```|$)/);
  if (fenceMatch) {
    html = fenceMatch[1].trim();
  }
  return fixBareHexColors(html);
}

export function createShellHtml(bodyClass = "bg-transparent", body = ""): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body class="${bodyClass}">${body}</body>
</html>`;
}
