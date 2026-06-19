import { useRef, useEffect, useCallback } from "react";
import {
  VERTEX_SOURCE,
  FRAGMENT_TARGET_SOURCE,
} from "../shaders/dropper-glow";
import { dropperMouse, dropperHoveredEl } from "../shaders/dropper-shared";

/**
 * Precompile shaders on an offscreen canvas so the GPU has them cached.
 * Called once at module load via requestIdleCallback — zero impact on startup.
 */
let _warmedUp = false;
function warmupShaders() {
  if (_warmedUp) return;
  _warmedUp = true;

  const c = document.createElement("canvas");
  c.width = 1;
  c.height = 1;
  const gl = c.getContext("webgl2", { powerPreference: "low-power" });
  if (!gl) return;

  // Compile target program so the GPU driver caches it
  for (const fragSrc of [FRAGMENT_TARGET_SOURCE]) {
    const v = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(v, VERTEX_SOURCE);
    gl.compileShader(v);
    const f = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(f, fragSrc);
    gl.compileShader(f);
    const p = gl.createProgram()!;
    gl.attachShader(p, v);
    gl.attachShader(p, f);
    gl.linkProgram(p);
    gl.deleteProgram(p);
    gl.deleteShader(v);
    gl.deleteShader(f);
  }

  gl.getExtension("WEBGL_lose_context")?.loseContext();
}

// Fire warmup during idle time — won't block rendering or interaction
if (typeof window !== "undefined" && "requestIdleCallback" in window) {
  requestIdleCallback(() => warmupShaders());
} else if (typeof window !== "undefined") {
  setTimeout(warmupShaders, 2000);
}

interface Props {
  active: boolean;
  rect?: { x: number; y: number; w: number; h: number } | null;
  /** Pre-captured card content as a canvas for texture-based rendering */
  textureCanvas?: HTMLCanvasElement | null;
}

function compileShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string
): WebGLShader | null {
  if (gl.isContextLost()) return null;
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    if (log) console.warn("Shader compile error:", log);
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(
  gl: WebGL2RenderingContext,
  vertSrc: string,
  fragSrc: string
): WebGLProgram | null {
  const vert = compileShader(gl, gl.VERTEX_SHADER, vertSrc);
  const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc);
  if (!vert || !frag) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program);
    if (log) console.warn("Program link error:", log);
    gl.deleteProgram(program);
    return null;
  }

  gl.deleteShader(vert);
  gl.deleteShader(frag);
  return program;
}

export default function ShaderOverlay({ active, rect, textureCanvas }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<{
    gl: WebGL2RenderingContext;
    program: WebGLProgram;
    uniforms: Record<string, WebGLUniformLocation | null>;
    vao: WebGLVertexArrayObject | null;
    texture: WebGLTexture | null;
    hasTexture: boolean;
  } | null>(null);
  const rafRef = useRef<number>(0);
  const intensityRef = useRef(0);
  const startTimeRef = useRef(0);
  const contextLostRef = useRef(false);
  const lastTextureRef = useRef<HTMLCanvasElement | null>(null);
  const pendingTextureRef = useRef<HTMLCanvasElement | null>(null);

  const prevActiveRef = useRef(false);
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Mouse position is read directly from the shared ref (dropperMouse)
  // — no React state, no re-renders on mouse move

  // Spring-delayed mouse position for drag effect
  const mouseLerpRef = useRef({ x: 0.5, y: 0.5 });

  // Snap lerp to actual position when entering a new card (no stale drift)
  useEffect(() => {
    if (active && !prevActiveRef.current) {
      mouseLerpRef.current = { x: dropperMouse.x, y: dropperMouse.y };
    }
    prevActiveRef.current = active;
  }, [active]);

  const reducedMotionRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      reducedMotionRef.current = query.matches;
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const initGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl || gl.isContextLost()) return false;

    const program = createProgram(gl, VERTEX_SOURCE, FRAGMENT_TARGET_SOURCE);
    if (!program) return false;

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    const uniforms: Record<string, WebGLUniformLocation | null> = {
      u_time: gl.getUniformLocation(program, "u_time"),
      u_resolution: gl.getUniformLocation(program, "u_resolution"),
      u_borderWidth: gl.getUniformLocation(program, "u_borderWidth"),
      u_intensity: gl.getUniformLocation(program, "u_intensity"),
      u_mouse: gl.getUniformLocation(program, "u_mouse"),
      u_mouseLerp: gl.getUniformLocation(program, "u_mouseLerp"),
      u_texture: gl.getUniformLocation(program, "u_texture"),
      u_hasTexture: gl.getUniformLocation(program, "u_hasTexture"),
    };

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Create a texture object (content uploaded later)
    const texture = gl.createTexture();

    glRef.current = { gl, program, uniforms, vao, texture, hasTexture: false };
    startTimeRef.current = performance.now();
    return true;
  }, []);

  // Upload a captured image as a WebGL texture
  const uploadTexture = useCallback((source: HTMLCanvasElement) => {
    const ctx = glRef.current;
    if (!ctx) return;
    const { gl, texture } = ctx;

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    ctx.hasTexture = true;
  }, []);

  // Upload pre-captured texture when it changes (instant — no capture on hover)
  useEffect(() => {
    if (textureCanvas && textureCanvas !== lastTextureRef.current) {
      lastTextureRef.current = textureCanvas;
      if (glRef.current) {
        uploadTexture(textureCanvas);
        pendingTextureRef.current = null;
      } else {
        pendingTextureRef.current = textureCanvas;
      }
    } else if (!textureCanvas && lastTextureRef.current) {
      lastTextureRef.current = null;
      pendingTextureRef.current = null;
      // Don't clear hasTexture — old texture stays on GPU during fade-out
    }
  }, [textureCanvas, uploadTexture]);

  // Stable render loop
  const render = useCallback(function renderFrame() {
    const ctx = glRef.current;
    if (!ctx || contextLostRef.current) return;
    const { gl, program, uniforms } = ctx;

    // Upload any pending texture that couldn't be uploaded when GL wasn't ready
    if (pendingTextureRef.current && ctx.texture) {
      gl.bindTexture(gl.TEXTURE_2D, ctx.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, pendingTextureRef.current);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      ctx.hasTexture = true;
      pendingTextureRef.current = null;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Track hovered card position each frame (handles scroll automatically)
    if (dropperHoveredEl) {
      const r = dropperHoveredEl.getBoundingClientRect();
      canvas.style.left = r.left + "px";
      canvas.style.top = r.top + "px";
      canvas.style.width = r.width + "px";
      canvas.style.height = r.height + "px";
    }

    const dpr = Math.min(window.devicePixelRatio, 2);
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    const pw = Math.round(cssW * dpr);
    const ph = Math.round(cssH * dpr);
    if (canvas.width !== pw || canvas.height !== ph) {
      canvas.width = pw;
      canvas.height = ph;
    }

    if (pw === 0 || ph === 0) {
      rafRef.current = requestAnimationFrame(renderFrame);
      return;
    }

    const targetIntensity = activeRef.current ? 1 : 0;
    intensityRef.current += (targetIntensity - intensityRef.current) * 0.1;
    if (intensityRef.current < 0.001 && !activeRef.current) {
      intensityRef.current = 0;
    }

    const time = (performance.now() - startTimeRef.current) / 1000;

    gl.viewport(0, 0, pw, ph);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    if (intensityRef.current > 0.001) {
      gl.useProgram(program);
      gl.uniform1f(uniforms.u_time, reducedMotionRef.current ? 0 : time);
      gl.uniform2f(uniforms.u_resolution, pw, ph);
      gl.uniform1f(uniforms.u_borderWidth, 0.045);
      gl.uniform1f(uniforms.u_intensity, intensityRef.current);

      if (uniforms.u_mouse) {
        gl.uniform2f(uniforms.u_mouse, dropperMouse.x, dropperMouse.y);

        // Spring lerp — ripple center drags behind the actual cursor
        const lerpSpeed = 0.08;
        mouseLerpRef.current.x += (dropperMouse.x - mouseLerpRef.current.x) * lerpSpeed;
        mouseLerpRef.current.y += (dropperMouse.y - mouseLerpRef.current.y) * lerpSpeed;
      }
      if (uniforms.u_mouseLerp) {
        gl.uniform2f(uniforms.u_mouseLerp, mouseLerpRef.current.x, mouseLerpRef.current.y);
      }

      if (uniforms.u_hasTexture) {
        gl.uniform1f(uniforms.u_hasTexture, ctx.hasTexture ? 1.0 : 0.0);
      }

      if (uniforms.u_texture && ctx.hasTexture && ctx.texture) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, ctx.texture);
        gl.uniform1i(uniforms.u_texture, 0);
      }

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    if (!reducedMotionRef.current) {
      rafRef.current = requestAnimationFrame(renderFrame);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      contextLostRef.current = true;
      cancelAnimationFrame(rafRef.current);
    };

    const handleContextRestored = () => {
      contextLostRef.current = false;
      if (initGL()) {
        rafRef.current = requestAnimationFrame(render);
      }
    };

    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", handleContextRestored);

    if (initGL()) {
      rafRef.current = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);

      const ctx = glRef.current;
      if (ctx) {
        ctx.gl.deleteProgram(ctx.program);
        if (ctx.vao) ctx.gl.deleteVertexArray(ctx.vao);
        if (ctx.texture) ctx.gl.deleteTexture(ctx.texture);
        glRef.current = null;
      }
    };
  }, [initGL, render]);

  // Keep last known rect so the canvas stays in place during fade-out
  const lastRectRef = useRef(rect);
  if (rect) lastRectRef.current = rect;
  const displayRect = rect ?? lastRectRef.current;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        left: displayRect?.x ?? -9999,
        top: displayRect?.y ?? -9999,
        width: displayRect?.w ?? 100,
        height: displayRect?.h ?? 100,
        pointerEvents: "none",
        zIndex: 40,
        borderRadius: 8,
        opacity: active ? 1 : 0,
        transition: "opacity 150ms ease-out",
      }}
    />
  );
}
