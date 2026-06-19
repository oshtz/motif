/**
 * Image search via Pexels / Unsplash APIs.
 * Returns real, high-quality image URLs to inject into generation prompts
 * so the LLM uses valid URLs instead of hallucinated ones.
 */

export interface ImageResult {
  url: string;        // regular-size URL (1080px wide)
  thumb: string;      // thumbnail URL
  alt: string;        // alt description
  credit: string;     // photographer name
  creditUrl: string;  // photographer profile URL
}

/**
 * Search for images using whichever provider has a key configured.
 * Tries Pexels first (higher rate limits), then Unsplash as fallback.
 */
export async function searchImages(options: {
  query: string;
  pexelsApiKey?: string;
  accessKey?: string;  // Unsplash access key
  count?: number;
}): Promise<ImageResult[]> {
  const { query, pexelsApiKey, accessKey, count = 6 } = options;

  if (!query.trim()) return [];

  // Try Pexels first (more generous rate limits)
  if (pexelsApiKey) {
    const results = await searchPexels({ query, apiKey: pexelsApiKey, count });
    if (results.length > 0) return results;
  }

  // Fall back to Unsplash
  if (accessKey) {
    return searchUnsplash({ query, accessKey, count });
  }

  return [];
}

async function searchPexels(options: {
  query: string;
  apiKey: string;
  count: number;
}): Promise<ImageResult[]> {
  const { query, apiKey, count } = options;

  try {
    const params = new URLSearchParams({
      query: query.trim(),
      per_page: String(Math.min(count, 30)),
      orientation: "landscape",
    });

    const res = await fetch(
      `https://api.pexels.com/v1/search?${params}`,
      { headers: { Authorization: apiKey } }
    );

    if (!res.ok) {
      console.error(`Pexels API error: ${res.status}`);
      return [];
    }

    const data = await res.json();
    const results: ImageResult[] = (data.photos ?? []).map((photo: any) => ({
      url: photo.src?.large ?? photo.src?.medium ?? "",
      thumb: photo.src?.tiny ?? photo.src?.small ?? "",
      alt: photo.alt ?? "",
      credit: photo.photographer ?? "Unknown",
      creditUrl: photo.photographer_url ?? "",
    }));

    return results.filter((r) => r.url);
  } catch (err) {
    console.error("Pexels search failed:", err);
    return [];
  }
}

async function searchUnsplash(options: {
  query: string;
  accessKey: string;
  count: number;
}): Promise<ImageResult[]> {
  try {
    const params = new URLSearchParams({
      query: options.query.trim(),
      per_page: String(Math.min(options.count, 30)),
      orientation: "landscape",
    });

    const res = await fetch(
      `https://api.unsplash.com/search/photos?${params}`,
      {
        headers: {
          Authorization: `Client-ID ${options.accessKey}`,
        },
      }
    );

    if (!res.ok) {
      console.error(`Unsplash API error: ${res.status}`);
      return [];
    }

    const data = await res.json();
    const results: ImageResult[] = (data.results ?? []).map((photo: any) => ({
      url: photo.urls?.regular ?? photo.urls?.small ?? "",
      thumb: photo.urls?.thumb ?? "",
      alt: photo.alt_description ?? photo.description ?? "",
      credit: photo.user?.name ?? "Unknown",
      creditUrl: photo.user?.links?.html ?? "",
    }));

    return results.filter((r) => r.url);
  } catch (err) {
    console.error("Unsplash search failed:", err);
    return [];
  }
}

/**
 * Format image results into a prompt-injectable block.
 */
export function formatImagesForPrompt(images: ImageResult[]): string {
  if (images.length === 0) return "";

  const lines = images.map(
    (img, i) => `  ${i + 1}. ${img.url}${img.alt ? ` — ${img.alt}` : ""}`
  );

  return `\n\nCURATED IMAGES (use these real URLs instead of placeholder or stock URLs):\n${lines.join("\n")}\n\nUse these images where appropriate in the design. You may use any subset. Do not fabricate other image URLs — if you need more images, reuse these or use CSS gradients/patterns instead.`;
}
