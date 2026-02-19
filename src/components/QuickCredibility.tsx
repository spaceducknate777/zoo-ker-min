import { GraduationCap, Award, Sparkles } from "lucide-react";

const QuickCredibility = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-y border-border/50">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-success" />
            </div>
            <p className="text-sm font-bold text-foreground">SCAD — BFA, 4.0 GPA</p>
            <p className="text-xs text-muted-foreground">Summa Cum Laude · Industrial & Interaction Design</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Award className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-bold text-foreground">Patented Gesture System</p>
            <p className="text-xs text-muted-foreground">BMW autonomous interface · $500K+ funding secured</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-bold text-foreground">Multi-Disciplinary Maker</p>
            <p className="text-xs text-muted-foreground">Sculpture · Stop-motion · Prototyping · Digital illustration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickCredibility;
