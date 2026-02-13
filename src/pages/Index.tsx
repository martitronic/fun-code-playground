import { useState, useMemo } from "react";
import { Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterChips } from "@/components/FilterChips";

const Index = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCat = !selectedCategory || p.category === selectedCategory;
      const matchesLang = !selectedLanguage || p.language === selectedLanguage;
      return matchesSearch && matchesCat && matchesLang;
    });
  }, [search, selectedCategory, selectedLanguage]);

  // Sort pinned first
  const sorted = useMemo(
    () => [...filtered].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)),
    [filtered]
  );

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin">
      {/* Banner */}
      <div className="border-b border-border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-6 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Sparkles size={16} className="text-primary" />
          <span className="text-muted-foreground">
            <strong className="text-foreground">{projects.length} fun projects</strong> ready to explore across{" "}
            <strong className="text-foreground">4 languages</strong>
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold gradient-text mb-1">Browse Projects</h2>
          <p className="text-muted-foreground text-sm">Discover fun code snippets to learn, remix, and play with</p>
        </div>

        <SearchBar value={search} onChange={setSearch} />
        <FilterChips
          selectedCategory={selectedCategory}
          selectedLanguage={selectedLanguage}
          onCategoryChange={setSelectedCategory}
          onLanguageChange={setSelectedLanguage}
        />

        {sorted.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No projects found</p>
            <p className="text-sm mt-1">Try adjusting your filters or search</p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sorted.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
