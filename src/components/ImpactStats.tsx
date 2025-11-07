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
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="h-8 w-8 text-accent" />
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">
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
