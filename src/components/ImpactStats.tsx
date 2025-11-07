import { Users, Brain, Palette } from "lucide-react";

const ImpactStats = () => {
  const stats = [
    {
      icon: Users,
      value: "500K+",
      label: "users impacted",
    },
    {
      icon: Brain,
      value: "650+",
      label: "participants tested",
    },
    {
      icon: Palette,
      value: "50+",
      label: "components built",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center space-y-4 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground font-semibold uppercase tracking-wide">
                  {stat.label}
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
