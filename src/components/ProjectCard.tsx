import { useState } from "react";
import { Copy, Check, Pin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Python: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "C++": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "HTML/CSS": "bg-orange-500/20 text-orange-300 border-orange-500/30",
};

const categoryColors: Record<string, string> = {
  Games: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "Creative Coding": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Utilities: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Animations: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Data Fun": "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

export function ProjectCard({ project }: { project: Project }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(project.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-xl border border-border bg-card p-5 transition-all duration-300 glow-border-hover hover:-translate-y-1">
      {project.pinned && (
        <div className="absolute top-3 right-3 flex items-center gap-1 text-xs text-primary">
          <Pin size={12} />
          <span>Pinned</span>
        </div>
      )}

      <div className="mb-3 flex items-start gap-3">
        <span className="text-2xl">{project.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-lg leading-tight">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <Badge className={`text-xs border ${categoryColors[project.category] || ""}`}>
          {project.category}
        </Badge>
        <Badge className={`text-xs border ${languageColors[project.language] || ""}`}>
          {project.language}
        </Badge>
      </div>

      <div className="relative rounded-lg border border-[hsl(var(--code-border))] bg-[hsl(var(--code-bg))]">
        <div className="flex items-center justify-between border-b border-[hsl(var(--code-border))] px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed scrollbar-thin">
          <code className="font-mono text-muted-foreground">{project.code}</code>
        </pre>
      </div>
    </div>
  );
}
