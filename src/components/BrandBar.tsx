const BrandBar = () => {
  const brands = [
    { name: "BMW", industry: "Automotive Innovation" },
    { name: "USAA", industry: "Financial Services" },
    { name: "Booz Allen Hamilton", industry: "Government Consulting" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-full p-6 rounded-lg bg-background border-2 border-border group-hover:border-accent/50 transition-all duration-300 group-hover:shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {brand.industry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBar;
