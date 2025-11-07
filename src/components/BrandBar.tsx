import bmwLogo from "@/assets/bmw-logo.png";
import usaaLogo from "@/assets/usaa-logo.png";
import boozAllenLogo from "@/assets/booz-allen-logo.png";

const BrandBar = () => {
  const brands = [
    { name: "BMW", industry: "Automotive Innovation", logo: bmwLogo },
    { name: "USAA", industry: "Financial Services", logo: usaaLogo },
    { name: "Booz Allen Hamilton", industry: "Government Consulting", logo: boozAllenLogo },
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
                <div className="h-16 w-auto flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
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
