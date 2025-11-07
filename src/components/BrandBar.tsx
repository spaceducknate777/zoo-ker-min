const BrandBar = () => {
  const brands = [
    { name: "BMW", logo: "🚗" },
    { name: "USAA", logo: "🛡️" },
    { name: "Booz Allen Hamilton", logo: "🏛️" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl sm:text-6xl transition-transform duration-300 hover:scale-110">
                {brand.logo}
              </div>
              <span className="text-sm sm:text-base font-semibold text-foreground text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBar;
