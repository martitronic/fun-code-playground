import { Copy, Code2, Play, BookOpen } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Browse",
    description: "Explore the collection of fun coding projects. Use the search bar and filters to find what interests you.",
  },
  {
    icon: Code2,
    title: "Read the Code",
    description: "Each project card shows the complete source code with syntax highlighting. Read through it to understand how it works.",
  },
  {
    icon: Copy,
    title: "Copy & Paste",
    description: "Click the 'Copy' button on any code block to copy it to your clipboard. Paste it into your editor or terminal.",
  },
  {
    icon: Play,
    title: "Run & Remix",
    description: "Run the code in your favorite environment. Modify it, extend it, and make it your own!",
  },
];

const HowToUse = () => {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold gradient-text mb-1">How to Use</h2>
        <p className="text-muted-foreground text-sm">Get started with Fun Code Lab in four simple steps</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="rounded-xl border border-border bg-card p-6 transition-all duration-300 glow-border-hover"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary text-sm font-bold">
                {i + 1}
              </div>
              <step.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToUse;
