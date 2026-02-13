import { categories, projects } from "@/data/projects";

const Categories = () => {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold gradient-text mb-1">Categories</h2>
        <p className="text-muted-foreground text-sm">Browse projects by category</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const count = projects.filter((p) => p.category === cat.name).length;
          return (
            <div
              key={cat.name}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 glow-border-hover hover:-translate-y-1"
            >
              <span className="text-4xl">{cat.emoji}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{cat.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {count} project{count !== 1 ? "s" : ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
