export const MAX_PROMPT_LENGTH = 20_000;
export const MAX_BATCH_SIZE = 8;
export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;

const RESOURCE_ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/;

export function requiredString(value: unknown, name: string, maxLength = MAX_PROMPT_LENGTH): string {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${name} is required`);
  if (value.length > maxLength) throw new Error(`${name} must be at most ${maxLength} characters`);
  return value.trim();
}

export function optionalString(value: unknown, name: string, maxLength = 256): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string" || value.length > maxLength) {
    throw new Error(`${name} must be a string of at most ${maxLength} characters`);
  }
  return value;
}

export function finiteNumber(value: unknown, name: string, min: number, max: number): number {
  if (typeof value !== "number" || !Number.isFinite(value) || value < min || value > max) {
    throw new Error(`${name} must be a finite number between ${min} and ${max}`);
  }
  return value;
}

export function integer(value: unknown, name: string, min: number, max: number): number {
  const number = finiteNumber(value, name, min, max);
  if (!Number.isInteger(number)) throw new Error(`${name} must be an integer`);
  return number;
}

export function resourceId(value: unknown, name: string): string {
  if (typeof value !== "string" || !RESOURCE_ID.test(value)) throw new Error(`${name} is invalid`);
  return value;
}

export function decodedDataUrlBytes(value: unknown, name = "image"): number {
  if (typeof value !== "string") throw new Error(`${name} is required`);
  const match = value.match(/^data:image\/[A-Za-z0-9.+-]+;base64,([A-Za-z0-9+/]*={0,2})$/);
  if (!match) throw new Error(`${name} must be a base64 image data URL`);
  const bytes = Buffer.byteLength(match[1], "base64");
  if (bytes > MAX_IMAGE_BYTES) throw new Error(`${name} exceeds ${MAX_IMAGE_BYTES} decoded bytes`);
  return bytes;
}

export function validateGenerationInput(body: Record<string, unknown>): {
  prompt: string;
  model?: string;
  temperature: number;
  batchSize: number;
} {
  return {
    prompt: requiredString(body.prompt, "prompt"),
    model: optionalString(body.model, "model"),
    temperature: body.temperature === undefined ? 0.9 : finiteNumber(body.temperature, "temperature", 0, 2),
    batchSize: body.batchSize === undefined ? 4 : integer(body.batchSize, "batchSize", 1, MAX_BATCH_SIZE),
  };
}
