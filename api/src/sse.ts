import type { Request, Response as ExpressResponse } from "express";

export const GENERATION_TIMEOUT_MS = 120_000;
export const PROVIDER_TIMEOUT_MS = 15_000;
export const MAX_GENERATION_OUTPUT_BYTES = 2 * 1024 * 1024;

type StreamMetadata = Record<string, unknown>;

export function requestAbortSignal(
  req: Request,
  res: ExpressResponse,
  timeoutMs = GENERATION_TIMEOUT_MS,
): AbortSignal {
  const disconnected = new AbortController();
  req.once("aborted", () => disconnected.abort(new Error("Client disconnected")));
  res.once("close", () => {
    if (!res.writableEnded) disconnected.abort(new Error("Client disconnected"));
  });
  return AbortSignal.any([disconnected.signal, AbortSignal.timeout(timeoutMs)]);
}

export function sseEvent(res: ExpressResponse, event: string, data: unknown): void {
  if (!res.writableEnded) {
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
  }
}

const completed = new WeakSet<ExpressResponse>();

export function finishSse(res: ExpressResponse): void {
  if (completed.has(res)) return;
  completed.add(res);
  if (!res.writableEnded) {
    res.write("data: [DONE]\n\n");
    res.end();
  }
}

export async function pumpOpenAIStream(
  response: globalThis.Response,
  options: {
    signal?: AbortSignal;
    maxBytes?: number;
    onChunk?: (chunk: string) => void;
  } = {},
): Promise<{ output: string; metadata: StreamMetadata }> {
  if (!response.ok) {
    throw new Error(`LLM API error: ${response.status} - ${await response.text()}`);
  }
  if (!response.body) throw new Error("No stream body");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  const maxBytes = options.maxBytes ?? MAX_GENERATION_OUTPUT_BYTES;
  let output = "";
  let bytes = 0;
  let buffer = "";
  let metadata: StreamMetadata = {};

  const abort = () => void reader.cancel(options.signal?.reason);
  options.signal?.addEventListener("abort", abort, { once: true });

  const consume = (line: string) => {
    if (!line.startsWith("data:")) return;
    const data = line.slice(5).trim();
    if (!data || data === "[DONE]") return;
    try {
      const payload = JSON.parse(data) as {
        choices?: Array<{ delta?: { content?: string } }>;
        usage?: StreamMetadata;
        provider?: string;
        model?: string;
      };
      const chunk = payload.choices?.[0]?.delta?.content;
      if (chunk) {
        bytes += Buffer.byteLength(chunk);
        if (bytes > maxBytes) throw new Error(`Generation output exceeds ${maxBytes} bytes`);
        output += chunk;
        options.onChunk?.(chunk);
      }
      if (payload.usage) metadata = { ...metadata, usage: payload.usage };
      if (payload.provider) metadata.provider = payload.provider;
      if (payload.model) metadata.model = payload.model;
    } catch (error) {
      if (error instanceof Error && error.message.startsWith("Generation output exceeds")) throw error;
    }
  };

  try {
    while (true) {
      if (options.signal?.aborted) throw options.signal.reason;
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() ?? "";
      for (const line of lines) consume(line);
    }
    buffer += decoder.decode();
    for (const line of buffer.split(/\r?\n/)) consume(line);
    return { output, metadata };
  } finally {
    options.signal?.removeEventListener("abort", abort);
    reader.releaseLock();
  }
}

export class Semaphore {
  private active = 0;
  private readonly waiting: Array<() => void> = [];

  constructor(private readonly limit: number) {}

  async run<T>(operation: () => Promise<T>): Promise<T> {
    if (this.active >= this.limit) await new Promise<void>((resolve) => this.waiting.push(resolve));
    this.active += 1;
    try {
      return await operation();
    } finally {
      this.active -= 1;
      this.waiting.shift()?.();
    }
  }
}

const generationSemaphore = new Semaphore(Number(process.env.MOTIF_MAX_CONCURRENCY || 4));

export function pumpGenerationStream(
  response: globalThis.Response,
  options: Parameters<typeof pumpOpenAIStream>[1],
) {
  return generationSemaphore.run(() => pumpOpenAIStream(response, options));
}
