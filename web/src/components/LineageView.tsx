import { useState, useEffect, useRef } from "react";
import { fetchLineage, type LineageNode } from "../api";

interface TreeNode extends LineageNode {
  children: TreeNode[];
  depth: number;
  x: number;
  y: number;
}

function buildTree(nodes: LineageNode[]): TreeNode | null {
  if (nodes.length === 0) return null;

  const map = new Map<string, TreeNode>();
  for (const n of nodes) {
    map.set(n.id, { ...n, children: [], depth: 0, x: 0, y: 0 });
  }

  let root: TreeNode | null = null;
  for (const n of nodes) {
    const node = map.get(n.id)!;
    if (!n.parent_id || !map.has(n.parent_id)) {
      root = node;
    } else {
      const parent = map.get(n.parent_id)!;
      parent.children.push(node);
    }
  }

  // Sort children by created_at
  function sortChildren(node: TreeNode) {
    node.children.sort((a, b) => a.created_at - b.created_at);
    for (const child of node.children) sortChildren(child);
  }
  if (root) sortChildren(root);

  return root;
}

const NODE_W = 160;
const NODE_H = 80;
const GAP_X = 40;
const GAP_Y = 60;

/** Assign x/y positions using a simple recursive layout */
function layoutTree(root: TreeNode): { width: number; height: number } {
  let nextX = 0;

  function layout(node: TreeNode, depth: number) {
    node.depth = depth;
    node.y = depth * (NODE_H + GAP_Y);

    if (node.children.length === 0) {
      node.x = nextX;
      nextX += NODE_W + GAP_X;
    } else {
      for (const child of node.children) {
        layout(child, depth + 1);
      }
      const first = node.children[0];
      const last = node.children[node.children.length - 1];
      node.x = (first.x + last.x) / 2;
    }
  }

  layout(root, 0);

  // Collect max bounds
  let maxX = 0;
  let maxY = 0;
  function bounds(node: TreeNode) {
    if (node.x + NODE_W > maxX) maxX = node.x + NODE_W;
    if (node.y + NODE_H > maxY) maxY = node.y + NODE_H;
    for (const child of node.children) bounds(child);
  }
  bounds(root);

  return { width: maxX + GAP_X, height: maxY + GAP_Y };
}

function flattenTree(node: TreeNode): TreeNode[] {
  const result: TreeNode[] = [node];
  for (const child of node.children) {
    result.push(...flattenTree(child));
  }
  return result;
}

interface Props {
  generationId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export default function LineageView({ generationId, onClose, onSelect }: Props) {
  const [nodes, setNodes] = useState<LineageNode[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        const lineage = await fetchLineage(generationId);
        if (!cancelled) setNodes(lineage);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, [generationId]);

  const root = buildTree(nodes);
  const size = root ? layoutTree(root) : { width: 0, height: 0 };
  const flatNodes = root ? flattenTree(root) : [];

  // Collect edges
  const edges: Array<{ from: TreeNode; to: TreeNode }> = [];
  function collectEdges(node: TreeNode) {
    for (const child of node.children) {
      edges.push({ from: node, to: child });
      collectEdges(child);
    }
  }
  if (root) collectEdges(root);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center">
        <div className="text-white/30 flex items-center gap-2">
          <i className="bi bi-arrow-repeat animate-spin" />
          Loading lineage...
        </div>
      </div>
    );
  }

  if (nodes.length <= 1) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
        <div className="bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl p-6 max-w-sm text-center">
          <i className="bi bi-diagram-3 text-2xl text-white/20 mb-2" />
          <p className="text-sm text-white/50 mb-4">
            This generation has no edit or variation history yet.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 text-white/70 text-sm hover:bg-white/15 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const PAD = 40;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <i className="bi bi-diagram-3 text-white/40" />
            <h2 className="text-sm font-medium text-white/90">Generation Lineage</h2>
            <span className="text-xs text-white/30">{nodes.length} generations</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white/60 transition"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {/* Tree canvas */}
        <div
          ref={containerRef}
          className="flex-1 overflow-auto p-4"
        >
          <svg
            width={size.width + PAD * 2}
            height={size.height + PAD * 2}
            className="mx-auto"
          >
            <g transform={`translate(${PAD}, ${PAD})`}>
              {/* Edges */}
              {edges.map((e, i) => {
                const fromCx = e.from.x + NODE_W / 2;
                const fromCy = e.from.y + NODE_H;
                const toCx = e.to.x + NODE_W / 2;
                const toCy = e.to.y;
                const midY = (fromCy + toCy) / 2;
                return (
                  <path
                    key={i}
                    d={`M ${fromCx} ${fromCy} C ${fromCx} ${midY}, ${toCx} ${midY}, ${toCx} ${toCy}`}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                );
              })}

              {/* Nodes */}
              {flatNodes.map((node) => {
                const isCurrent = node.id === generationId;
                return (
                  <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                    <rect
                      width={NODE_W}
                      height={NODE_H}
                      rx={12}
                      fill={isCurrent ? "rgba(6, 182, 212, 0.15)" : "rgba(255,255,255,0.04)"}
                      stroke={isCurrent ? "rgba(6, 182, 212, 0.4)" : "rgba(255,255,255,0.08)"}
                      strokeWidth={isCurrent ? 2 : 1}
                      className="cursor-pointer hover:fill-[rgba(255,255,255,0.08)] transition-colors"
                      onClick={() => onSelect(node.id)}
                    />
                    {/* Genome badge */}
                    <text
                      x={NODE_W / 2}
                      y={20}
                      textAnchor="middle"
                      fill={isCurrent ? "rgba(6, 182, 212, 0.8)" : "rgba(255,255,255,0.5)"}
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      {node.genome_name || node.genome_id || "—"}
                    </text>
                    {/* Prompt preview */}
                    <text
                      x={NODE_W / 2}
                      y={40}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.35)"
                      fontSize="10"
                    >
                      {node.prompt.length > 18
                        ? node.prompt.slice(0, 18) + "..."
                        : node.prompt}
                    </text>
                    {/* Date */}
                    <text
                      x={NODE_W / 2}
                      y={60}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.15)"
                      fontSize="9"
                    >
                      {new Date(node.created_at).toLocaleString(undefined, {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
