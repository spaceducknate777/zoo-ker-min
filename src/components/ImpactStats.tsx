import { Users, Brain, Palette, Building2, TrendingUp, Award } from "lucide-react";

const ImpactStats = () => {
  const stats = [
    {
      icon: Users,
      value: "500K+",
      label: "Users Impacted",
      context: "Across BMW, USAA & Government"
    },
    {
      icon: TrendingUp,
      value: "67%",
      label: "Avg. Task Improvement",
      context: "Measured across all projects"
    },
    {
      icon: Brain,
      value: "650+",
      label: "Research Participants",
      context: "Usability studies & interviews"
    },
    {
      icon: Award,
      value: "100%",
      label: "WCAG Compliance",
      context: "All government projects"
    },
    {
      icon: Palette,
      value: "50+",
      label: "Design System Components",
      context: "Built at USAA & BMW"
    },
    {
      icon: Building2,
      value: "12+",
      label: "Federal Contracts",
      context: "Supported at Booz Allen"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Proven Results
          </p>
          <h3 className="text-2xl font-bold text-foreground">
            Measurable Impact Across Industries
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center space-y-3 animate-fade-in group p-4 rounded-xl hover:bg-accent/5 transition-all duration-300"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
