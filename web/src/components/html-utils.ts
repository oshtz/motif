export const PREVIEW_IFRAME_SANDBOX = "allow-scripts";
export const INSPECT_IFRAME_SANDBOX = "allow-same-origin";

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
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="${bodyClass}">${body}</body>
</html>`;
}
