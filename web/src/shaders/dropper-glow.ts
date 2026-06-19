// GLSL shader sources for the style dropper iridescent border effect
// Raw WebGL2 — no build plugin needed, sources are plain strings

export const VERTEX_SOURCE = /* glsl */ `#version 300 es
void main() {
  float x = float((gl_VertexID & 1) << 2) - 1.0;
  float y = float((gl_VertexID & 2) << 1) - 1.0;
  gl_Position = vec4(x, y, 0.0, 1.0);
}
`;

// ── Target card: texture-based with chromatic aberration + ripple distortion ──
export const FRAGMENT_TARGET_SOURCE = /* glsl */ `#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2  u_resolution;
uniform float u_borderWidth;
uniform float u_intensity;
uniform vec2  u_mouse;      // actual cursor position
uniform vec2  u_mouseLerp;  // spring-delayed cursor (lags behind u_mouse)
uniform sampler2D u_texture;
uniform float u_hasTexture;

out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  // Flip Y for texture sampling (GL coords are bottom-up, texture is top-down)
  vec2 texUV = vec2(uv.x, 1.0 - uv.y);

  // Pixel-based edge distance
  float edgeX = min(gl_FragCoord.x, u_resolution.x - gl_FragCoord.x);
  float edgeY = min(gl_FragCoord.y, u_resolution.y - gl_FragCoord.y);
  float edgePx = min(edgeX, edgeY);
  float bw = u_borderWidth * u_resolution.y;

  float border = 1.0 - smoothstep(0.0, bw, edgePx);

  float cardDiag = length(u_resolution);

  // === Ripple waves: use LERPED mouse (spring drag) ===
  vec2 lerpPixel = u_mouseLerp * u_resolution;
  vec2 lerpDiff = gl_FragCoord.xy - lerpPixel;
  float lerpDistPx = length(lerpDiff);
  vec2 lerpDir = lerpDiff / (lerpDistPx + 0.001) / u_resolution;

  float wave = sin(lerpDistPx * 0.12 - u_time * 5.0) * 0.55
             + sin(lerpDistPx * 0.22 - u_time * 3.5) * 0.3
             + sin(lerpDistPx * 0.38 + u_time * 2.0) * 0.15;
  float fadePx = smoothstep(cardDiag, 0.0, lerpDistPx);
  float waveStrength = fadePx * 0.008 * u_intensity;
  vec2 displacement = lerpDir * wave * waveStrength * u_resolution;

  // === Proximity / aberration: use ACTUAL mouse (instant response) ===
  vec2 mousePixel = u_mouse * u_resolution;
  vec2 diff = gl_FragCoord.xy - mousePixel;
  float distPx = length(diff);
  vec2 dir = diff / (distPx + 0.001) / u_resolution;
  float proximity = smoothstep(cardDiag * 0.6, 0.0, distPx);

  if (u_hasTexture > 0.5) {
    // === Texture-based rendering: distort + chromatic aberration ===

    // Chromatic aberration — follows cursor instantly, stronger near cursor
    float aberration = proximity * 0.012 * u_intensity;
    vec2 aberDir = dir * u_resolution;
    vec2 rUV = texUV + displacement + aberDir * aberration;
    vec2 gUV = texUV + displacement;
    vec2 bUV = texUV + displacement - aberDir * aberration;

    float r = texture(u_texture, rUV).r;
    float g = texture(u_texture, gUV).g;
    float b = texture(u_texture, bUV).b;
    vec3 texColor = vec3(r, g, b);

    // Color tint — follows cursor, subtle iridescent shift
    float angle = atan(diff.y, diff.x);
    float distNorm = distPx / max(u_resolution.x, u_resolution.y);
    vec3 tint = 0.5 + 0.5 * cos(6.28318 * (distNorm * 3.0 + angle / 6.28318 + u_time * 0.3 + vec3(0.0, 0.33, 0.67)));
    tint = mix(tint, vec3(0.6, 0.3, 1.0), 0.3);

    // Blend: preserve content, tint follows cursor
    float tintAmount = proximity * 0.2 * u_intensity;
    vec3 finalColor = mix(texColor, texColor * 0.8 + tint * 0.25, tintAmount);

    // Subtle brightness lift near cursor
    finalColor += proximity * 0.04 * u_intensity;

    // Iridescent border glow — toned down to not wash out content
    float t = u_time * 0.4;
    vec3 borderColor = 0.5 + 0.5 * cos(6.28318 * (edgePx / bw * 2.0 + t + vec3(0.0, 0.33, 0.67)));
    borderColor = mix(borderColor, vec3(0.6, 0.3, 1.0), 0.3);
    finalColor = mix(finalColor, borderColor, border * 0.6 * u_intensity);

    fragColor = vec4(finalColor, 1.0);
  } else {
    // === Fallback: overlay-only (no texture) — uses lerped mouse for ripple ===
    float ripple = sin(lerpDistPx * 0.12 - u_time * 5.0) * 0.5 + 0.5;
    ripple *= ripple;
    ripple *= smoothstep(cardDiag, 0.0, lerpDistPx);

    float wash = proximity * 0.55 + ripple * 0.35;
    float combined = border * 0.8 + wash;

    if (combined < 0.001) {
      fragColor = vec4(0.0);
      return;
    }

    float angle = atan(diff.y, diff.x);
    float distNorm = distPx / max(u_resolution.x, u_resolution.y);
    vec3 color = 0.5 + 0.5 * cos(6.28318 * (distNorm * 3.0 + angle / 6.28318 + u_time * 0.3 + vec3(0.0, 0.33, 0.67)));
    color = mix(color, vec3(0.6, 0.3, 1.0), 0.3);

    float alpha = combined * u_intensity;
    fragColor = vec4(color * clamp(alpha, 0.0, 0.9), clamp(alpha, 0.0, 0.9));
  }
}
`;
