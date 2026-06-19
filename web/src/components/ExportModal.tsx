import { useState } from "react";
import { exportToFramework, extractTokens } from "../api";

interface Props {
  generationId: string;
  open: boolean;
  onClose: () => void;
}

type Tab = "framework" | "tokens";
type Framework = "react" | "vue" | "svelte";
type TokenFormat = "css" | "json" | "tailwind";

export default function ExportModal({ generationId, open, onClose }: Props) {
  const [tab, setTab] = useState<Tab>("framework");
  const [framework, setFramework] = useState<Framework>("react");
  const [tokenFormat, setTokenFormat] = useState<TokenFormat>("json");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleExportFramework = async () => {
    setLoading(true);
    setResult("");
    try {
      const data = await exportToFramework(generationId, framework);
      setResult(data.code);
    } catch (err) {
      setResult(`Error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleExtractTokens = async () => {
    setLoading(true);
    setResult("");
    try {
      const data = await extractTokens(generationId, tokenFormat);
      setResult(data.tokens);
    } catch (err) {
      setResult(`Error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <i className="bi bi-box-arrow-up text-white/40" />
            <h2 className="text-sm font-medium text-white/90">Export</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setTab("framework"); setResult(""); }}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                tab === "framework" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"
              }`}
            >
              Framework
            </button>
            <button
              onClick={() => { setTab("tokens"); setResult(""); }}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                tab === "tokens" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"
              }`}
            >
              Design Tokens
            </button>
            <button onClick={onClose} className="text-white/30 hover:text-white/60 transition ml-2">
              <i className="bi bi-x-lg" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-5 space-y-4">
          {tab === "framework" ? (
            <>
              <div className="flex items-center gap-2">
                {(["react", "vue", "svelte"] as const).map((fw) => (
                  <button
                    key={fw}
                    onClick={() => setFramework(fw)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                      framework === fw
                        ? "bg-white/10 text-white border border-white/15"
                        : "text-white/40 hover:text-white/60 border border-transparent"
                    }`}
                  >
                    {fw.charAt(0).toUpperCase() + fw.slice(1)}
                  </button>
                ))}
              </div>
              <button
                onClick={handleExportFramework}
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-white/10 text-white/80 text-sm font-medium hover:bg-white/15 disabled:opacity-40 transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><i className="bi bi-arrow-repeat animate-spin" /> Converting...</>
                ) : (
                  <><i className="bi bi-code-square" /> Convert to {framework.charAt(0).toUpperCase() + framework.slice(1)}</>
                )}
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                {(["json", "css", "tailwind"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setTokenFormat(fmt)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                      tokenFormat === fmt
                        ? "bg-white/10 text-white border border-white/15"
                        : "text-white/40 hover:text-white/60 border border-transparent"
                    }`}
                  >
                    {fmt === "css" ? "CSS Variables" : fmt === "json" ? "JSON" : "Tailwind Config"}
                  </button>
                ))}
              </div>
              <button
                onClick={handleExtractTokens}
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-white/10 text-white/80 text-sm font-medium hover:bg-white/15 disabled:opacity-40 transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><i className="bi bi-arrow-repeat animate-spin" /> Extracting...</>
                ) : (
                  <><i className="bi bi-palette" /> Extract Tokens</>
                )}
              </button>
            </>
          )}

          {/* Result */}
          {result && (
            <div className="relative">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-white/30">Result</span>
                <button
                  onClick={handleCopy}
                  className="text-xs text-white/40 hover:text-white/60 transition flex items-center gap-1"
                >
                  <i className={`bi ${copied ? "bi-check2" : "bi-clipboard"}`} />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <pre className="bg-black/30 border border-white/5 rounded-xl p-4 text-xs text-white/60 font-mono whitespace-pre-wrap overflow-auto max-h-[40vh]">
                {result}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
