import { Cpu, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef } from "react";

const CreativeWork = () => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const project = {
    title: "SNAPPED: 100-Point Physical Dashboard",
    description: "Haptic input system using Arduino Mega, arcade push buttons, and LED arrays. A tangible interface exploring the boundary between physical and digital interaction.",
    images: ["/creative/snapped-concept.png", "/creative/snapped-exploded-view.png", "/creative/snapped-assembly.png", "/creative/snapped-electrical.png", "/creative/snapped-fritzing.png", "/creative/snapped-construction.png", "/creative/snapped-components.png"],
    hero: "/creative/snapped-exploded-view.png",
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRefs.current["main"];
    if (el) {
      const amount = el.clientWidth * 0.7;
      el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ images, index, title });
  };

  return (
    <>
      <section id="creative" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3 font-medium">Interaction R&D</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">the lab.</h2>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              Physical computing and sensor-based prototyping — experimental R&D that informs how I design interaction systems.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/10 flex items-center justify-center">
              <Cpu className="h-4 w-4 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Physical Computing & Haptics</h3>
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden group/card hover:border-accent/30 transition-colors duration-300">
            <div
              className="relative h-56 md:h-72 overflow-hidden cursor-pointer"
              onClick={() => openLightbox(project.images, 0, project.title)}
            >
              <img
                src={project.hero}
                alt={project.title}
                className="w-full h-full object-contain bg-secondary transition-transform duration-700 group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="text-xs text-foreground/60 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                  {project.images.length} images — click to explore
                </span>
              </div>
            </div>

            <div className="p-5">
              <h4 className="text-base font-semibold text-foreground mb-1">{project.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

              <div className="relative group/scroll">
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card/90 border border-border flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-200 hover:bg-accent hover:text-accent-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div
                  ref={(el) => { scrollRefs.current["main"] = el; }}
                  className="flex gap-2 overflow-x-auto scrollbar-hide pb-1"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {project.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-secondary cursor-pointer ring-1 ring-border hover:ring-accent/50 transition-all duration-200 hover:scale-105"
                      onClick={() => openLightbox(project.images, imgIndex, project.title)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} ${imgIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card/90 border border-border flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-200 hover:bg-accent hover:text-accent-foreground"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-30"
            disabled={lightbox.index === 0}
            onClick={(e) => {
              e.stopPropagation();
              setLightbox({ ...lightbox, index: lightbox.index - 1 });
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="max-w-4xl max-h-[80vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.images[lightbox.index]}
              alt={`${lightbox.title} ${lightbox.index + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-lg mx-auto"
            />
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                {lightbox.title} — {lightbox.index + 1} / {lightbox.images.length}
              </p>
            </div>
          </div>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-30"
            disabled={lightbox.index === lightbox.images.length - 1}
            onClick={(e) => {
              e.stopPropagation();
              setLightbox({ ...lightbox, index: lightbox.index + 1 });
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
};

export default CreativeWork;
