import assert from "node:assert/strict";
import test from "node:test";
import { pumpOpenAIStream } from "../src/sse.js";
import {
  decodedDataUrlBytes,
  validateGenerationInput,
} from "../src/validation.js";
import { explicitProviderConfig } from "../src/provider.js";
import { settingsEntriesFromBody } from "../src/settings.js";

function streamResponse(parts: string[]): Response {
  const encoder = new TextEncoder();
  return new Response(new ReadableStream({
    start(controller) {
      for (const part of parts) controller.enqueue(encoder.encode(part));
      controller.close();
    },
  }));
}

test("SSE pump consumes the final unterminated buffer and retains usage metadata", async () => {
  const chunks: string[] = [];
  const response = streamResponse([
    'data: {"choices":[{"delta":{"content":"hel"}}]}\n',
    'data: {"choices":[{"delta":{"content":"lo"}}],"usage":{"cost":0.01}}',
  ]);
  const result = await pumpOpenAIStream(response, { onChunk: (chunk) => chunks.push(chunk) });
  assert.equal(result.output, "hello");
  assert.deepEqual(chunks, ["hel", "lo"]);
  assert.deepEqual(result.metadata, { usage: { cost: 0.01 } });
});

test("SSE pump enforces the output byte cap", async () => {
  await assert.rejects(
    pumpOpenAIStream(streamResponse(['data: {"choices":[{"delta":{"content":"toolong"}}]}\n']), { maxBytes: 3 }),
    /exceeds 3 bytes/,
  );
});

test("generation validation rejects invalid ranges and decoded image oversize", () => {
  assert.throws(() => validateGenerationInput({ prompt: "", temperature: 0.5 }), /prompt is required/);
  assert.throws(() => validateGenerationInput({ prompt: "ok", temperature: Number.NaN }), /finite number/);
  assert.throws(() => validateGenerationInput({ prompt: "ok", batchSize: 9 }), /between 1 and 8/);
  assert.equal(validateGenerationInput({ prompt: " ok ", temperature: 2, batchSize: 8 }).prompt, "ok");
  assert.equal(decodedDataUrlBytes("data:image/png;base64,YQ=="), 1);
});

test("explicit model probe never inherits a credential", () => {
  assert.deepEqual(explicitProviderConfig({ provider: "openrouter" }), {
    provider: "openrouter",
    baseUrl: "https://openrouter.ai/api/v1",
    apiKey: "",
  });
});

test("provider-scoped null clears while blank legacy credentials remain unchanged", () => {
  assert.deepEqual(settingsEntriesFromBody({ providerApiKeys: { openrouter: null } }), [
    ["apiKey:openrouter", ""],
  ]);
  assert.deepEqual(settingsEntriesFromBody({ provider: "openrouter", apiKey: "" }), [
    ["provider", "openrouter"],
  ]);
});
