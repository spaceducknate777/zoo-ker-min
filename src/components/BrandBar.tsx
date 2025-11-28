import bmwLogo from "@/assets/bmw-logo.png";
import usaaLogo from "@/assets/usaa-logo.png";
import boozAllenLogo from "@/assets/booz-allen-logo.png";
import { Badge } from "./ui/badge";

const BrandBar = () => {
  const brands = [
    { 
      name: "BMW", 
      industry: "Automotive Innovation", 
      logo: bmwLogo,
      role: "Lead UX Researcher",
      highlight: "Gesture Interface Design"
    },
    { 
      name: "USAA", 
      industry: "Financial Services", 
      logo: usaaLogo,
      role: "UX/UI Designer",
      highlight: "Mobile Financial Tools"
    },
    { 
      name: "Booz Allen Hamilton", 
      industry: "Federal Consulting", 
      logo: boozAllenLogo,
      role: "Senior UX Consultant",
      highlight: "4 Agencies • 12+ Contracts"
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/40 to-background border-y border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Where I've Made an Impact
        </p>
        <p className="text-center text-base text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
          Driving strategic design outcomes across automotive, finance, and government sectors
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-full p-6 rounded-xl bg-background border-2 border-border group-hover:border-accent/50 transition-all duration-300 group-hover:shadow-[var(--shadow-elevated)] flex flex-col items-center justify-center gap-4">
                <div className="h-16 w-full flex items-center justify-center px-4">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    {brand.role}
                  </Badge>
                  <p className="text-sm font-medium text-foreground">
                    {brand.highlight}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {brand.industry}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBar;
