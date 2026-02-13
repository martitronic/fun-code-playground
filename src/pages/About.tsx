import { Code2, Heart, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-6 space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold gradient-text mb-1">About Fun Code Lab</h2>
        <p className="text-muted-foreground text-sm">A curated collection of fun coding projects</p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Code2 className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">What is this?</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Fun Code Lab is a handpicked collection of small, fun coding projects spanning multiple programming languages.
          Whether you're a beginner looking for project ideas or an experienced developer wanting a quick creative break,
          there's something here for you.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Zap className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Why fun projects?</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The best way to learn coding is by building things you enjoy. Games, creative art, quirky utilities —
          these projects are designed to spark curiosity and make programming feel like play rather than work.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Made with love</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every snippet is tested, commented, and ready to run. Just copy, paste, and have fun!
        </p>
      </div>
    </div>
  );
};

export default About;
