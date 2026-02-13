import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { categories, languages } from "@/data/projects";

interface FilterChipsProps {
  selectedCategory: string | null;
  selectedLanguage: string | null;
  onCategoryChange: (cat: string | null) => void;
  onLanguageChange: (lang: string | null) => void;
}

export function FilterChips({
  selectedCategory,
  selectedLanguage,
  onCategoryChange,
  onLanguageChange,
}: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onCategoryChange(selectedCategory === cat.name ? null : cat.name)}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
            selectedCategory === cat.name
              ? "border-primary/50 bg-primary/20 text-primary"
              : "border-border bg-secondary text-muted-foreground hover:text-foreground hover:border-muted-foreground"
          }`}
        >
          <span>{cat.emoji}</span>
          {cat.name}
          {selectedCategory === cat.name && <X size={12} />}
        </button>
      ))}

      <div className="mx-2 h-6 w-px bg-border self-center" />

      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => onLanguageChange(selectedLanguage === lang ? null : lang)}
          className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
            selectedLanguage === lang
              ? "border-primary/50 bg-primary/20 text-primary"
              : "border-border bg-secondary text-muted-foreground hover:text-foreground hover:border-muted-foreground"
          }`}
        >
          {lang}
          {selectedLanguage === lang && <X size={12} />}
        </button>
      ))}
    </div>
  );
}
