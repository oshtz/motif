import { useState, useEffect, useRef } from "react";
import {
  fetchTemplates,
  createTemplate,
  deleteTemplate,
  type PromptTemplate,
} from "../api";

/** Extract {{variable}} placeholders from template text */
function extractVariables(text: string): string[] {
  const matches = text.match(/\{\{(\w+)\}\}/g);
  if (!matches) return [];
  return [...new Set(matches.map((m) => m.slice(2, -2)))];
}

/** Replace {{variable}} placeholders with values */
function fillTemplate(
  text: string,
  values: Record<string, string>
): string {
  return text.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] || `{{${key}}}`);
}

interface Props {
  open: boolean;
  onClose: () => void;
  onUseTemplate: (filledPrompt: string) => void;
  currentPrompt?: string;
}

export default function TemplateModal({
  open,
  onClose,
  onUseTemplate,
  currentPrompt,
}: Props) {
  const [templates, setTemplates] = useState<PromptTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"use" | "save">("use");

  // Save form
  const [saveName, setSaveName] = useState("");
  const [saveText, setSaveText] = useState("");

  // Fill form
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const [varValues, setVarValues] = useState<Record<string, string>>({});

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        const savedTemplates = await fetchTemplates();
        if (!cancelled) setTemplates(savedTemplates);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void load();
    if (currentPrompt) {
      queueMicrotask(() => setSaveText(currentPrompt));
    }

    return () => {
      cancelled = true;
    };
  }, [open, currentPrompt]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const handleSave = async () => {
    if (!saveName.trim() || !saveText.trim()) return;
    const vars = extractVariables(saveText);
    try {
      const t = await createTemplate({
        name: saveName.trim(),
        template_text: saveText.trim(),
        variables: vars,
      });
      setTemplates((prev) => [t, ...prev]);
      setSaveName("");
      setSaveText("");
      setTab("use");
    } catch (err) {
      console.error("Failed to save template:", err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTemplate(id);
      setTemplates((prev) => prev.filter((t) => t.id !== id));
      if (selectedTemplate?.id === id) setSelectedTemplate(null);
    } catch (err) {
      console.error("Failed to delete template:", err);
    }
  };

  const handleSelect = (t: PromptTemplate) => {
    setSelectedTemplate(t);
    const vars = extractVariables(t.template_text);
    const initial: Record<string, string> = {};
    for (const v of vars) initial[v] = "";
    setVarValues(initial);
  };

  const handleUse = () => {
    if (!selectedTemplate) return;
    const filled = fillTemplate(selectedTemplate.template_text, varValues);
    onUseTemplate(filled);
    onClose();
  };

  if (!open) return null;

  const variables = selectedTemplate
    ? extractVariables(selectedTemplate.template_text)
    : [];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col"
      >
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <i className="bi bi-bookmark-star text-white/40" />
            <h2 className="text-sm font-medium text-white/90">Prompt Templates</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab("use")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                tab === "use"
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Use
            </button>
            <button
              onClick={() => setTab("save")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                tab === "save"
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Save New
            </button>
            <button
              onClick={onClose}
              className="text-white/30 hover:text-white/60 transition ml-2"
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-5">
          {tab === "save" ? (
            <div className="space-y-3">
              <div>
                <label className="text-xs text-white/40 block mb-1">Template Name</label>
                <input
                  type="text"
                  value={saveName}
                  onChange={(e) => setSaveName(e.target.value)}
                  placeholder="e.g. SaaS Dashboard"
                  className="w-full bg-white/5 border border-white/[0.06] rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 block mb-1">
                  Template Text
                  <span className="text-white/20 ml-2">
                    Use {"{{variable}}"} for placeholders
                  </span>
                </label>
                <textarea
                  value={saveText}
                  onChange={(e) => setSaveText(e.target.value)}
                  placeholder={"a {{style}} dashboard showing {{metrics}} with a sidebar navigation and {{chart_type}} charts"}
                  rows={4}
                  className="w-full bg-white/5 border border-white/[0.06] rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition resize-none font-mono"
                />
              </div>
              {saveText && extractVariables(saveText).length > 0 && (
                <div className="text-xs text-white/30">
                  Variables detected:{" "}
                  {extractVariables(saveText).map((v) => (
                    <span
                      key={v}
                      className="inline-block bg-white/5 border border-white/10 rounded px-1.5 py-0.5 mx-0.5 text-white/50"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              )}
              <button
                onClick={handleSave}
                disabled={!saveName.trim() || !saveText.trim()}
                className="w-full py-2 rounded-lg bg-white/10 text-white/80 text-sm font-medium hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                Save Template
              </button>
            </div>
          ) : loading ? (
            <div className="flex items-center justify-center py-12 text-white/20">
              <i className="bi bi-arrow-repeat animate-spin text-lg" />
            </div>
          ) : selectedTemplate ? (
            /* Fill-in form */
            <div className="space-y-3">
              <button
                onClick={() => setSelectedTemplate(null)}
                className="text-xs text-white/40 hover:text-white/60 transition flex items-center gap-1"
              >
                <i className="bi bi-arrow-left" /> Back to list
              </button>
              <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3">
                <div className="text-xs font-medium text-white/60 mb-1">
                  {selectedTemplate.name}
                </div>
                <p className="text-xs text-white/30 font-mono">
                  {selectedTemplate.template_text}
                </p>
              </div>
              {variables.length > 0 ? (
                <div className="space-y-2">
                  <div className="text-xs text-white/40">Fill in variables:</div>
                  {variables.map((v) => (
                    <div key={v}>
                      <label className="text-xs text-white/30 block mb-0.5">{v}</label>
                      <input
                        type="text"
                        value={varValues[v] || ""}
                        onChange={(e) =>
                          setVarValues((prev) => ({ ...prev, [v]: e.target.value }))
                        }
                        placeholder={`enter ${v}...`}
                        className="w-full bg-white/5 border border-white/[0.06] rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                <div className="text-[10px] text-white/25 uppercase tracking-wider mb-1">
                  Preview
                </div>
                <p className="text-xs text-white/50">
                  {fillTemplate(selectedTemplate.template_text, varValues)}
                </p>
              </div>
              <button
                onClick={handleUse}
                className="w-full py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition"
              >
                Use This Prompt
              </button>
            </div>
          ) : templates.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-white/20 gap-2">
              <i className="bi bi-bookmark-star text-2xl" />
              <span className="text-sm">No templates yet</span>
              <button
                onClick={() => setTab("save")}
                className="text-xs text-white/40 hover:text-white/60 underline transition"
              >
                Save your first template
              </button>
            </div>
          ) : (
            /* Template list */
            <div className="space-y-2">
              {templates.map((t) => (
                <div
                  key={t.id}
                  className="group flex items-start gap-3 p-3 rounded-lg border border-white/5 hover:bg-white/[0.03] transition cursor-pointer"
                  onClick={() => handleSelect(t)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white/80 font-medium truncate">
                      {t.name}
                    </div>
                    <p className="text-xs text-white/30 font-mono mt-0.5 line-clamp-2">
                      {t.template_text}
                    </p>
                    {(() => {
                      const vars = extractVariables(t.template_text);
                      return vars.length > 0 ? (
                        <div className="flex gap-1 mt-1.5 flex-wrap">
                          {vars.map((v) => (
                            <span
                              key={v}
                              className="text-[10px] bg-white/5 border border-white/10 rounded px-1.5 py-0.5 text-white/40"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      ) : null;
                    })()}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(t.id);
                    }}
                    className="p-1 rounded text-white/20 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition shrink-0"
                    title="Delete template"
                  >
                    <i className="bi bi-trash3 text-xs" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
