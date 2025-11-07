import bmwLogo from "@/assets/bmw-logo.png";

const BrandBar = () => {
  const brands = [
    { name: "BMW", industry: "Automotive Innovation", logo: bmwLogo, hasImage: true },
    { name: "USAA", industry: "Financial Services", hasImage: false },
    { name: "Booz Allen Hamilton", industry: "Government Consulting", hasImage: false },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/40 to-background border-y border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-full p-8 rounded-xl bg-background border-2 border-border group-hover:border-accent/50 transition-all duration-300 group-hover:shadow-[var(--shadow-elevated)] flex flex-col items-center gap-4">
                {brand.hasImage && brand.logo ? (
                  <div className="h-16 w-auto flex items-center justify-center">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent/70 transition-all duration-300">
                    {brand.name}
                  </h3>
                )}
                <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wide">
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
