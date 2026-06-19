export interface Generation {
  id: string;
  prompt: string;
  system_prompt: string;
  model: string;
  output: string;
  parsed_html: string;
  favorited: boolean;
  created_at: number;
  genome_id?: string;
  genome_name?: string;
  secondary_genome_id?: string;
  secondary_genome_name?: string;
  parent_id?: string;
  motif_id?: string;
  recipe_id?: string;
  blend_config_json?: string;
  variation_distance?: string;
  board_status?: "candidate" | "accepted" | "rejected" | "exported";
  notes?: string;
  quality_score_json?: string;
  style_patch_id?: string;
}

export interface Motif {
  id: string;
  name: string;
  created_at: number;
  updated_at: number;
  board_memory?: string;
  board_memory_updated_at?: number;
}

export interface BoardEvent {
  id: string;
  motif_id: string;
  generation_id: string;
  event_type: string;
  summary: string;
  metadata: Record<string, unknown>;
  created_at: number;
}

export interface Style {
  id: string;
  name: string;
  tokens_json: string;
  created_at: number;
}

export interface Settings {
  apiKey: string;
  model: string;
  systemPrompt: string;
  temperature: number;
  batchSize: number;
  outputFormat: "html" | "react" | "css";
}

export interface GenerateRequest {
  prompt: string;
  systemPrompt?: string;
  model?: string;
  temperature?: number;
  batchSize?: number;
  genomeId?: string;
  shuffle?: boolean;
  blendConfig?: Array<{ id: string; weight: number; aspect: string }>;
  recipeId?: string;
  variationDistance?: string;
  stylePatchId?: string;
}

export interface GenerateResponse {
  generations: Generation[];
}
