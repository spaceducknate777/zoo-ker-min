import { Film, Shapes, Cpu, Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef } from "react";

const CreativeWork = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const stopMotionVideos = [
    { title: "Stop-Motion Animation 1", video: "/creative/stop-motion-1.MOV", description: "Frame-by-frame storytelling." },
    { title: "Stop-Motion Animation 2", video: "/creative/stop-motion-2.MOV", description: "Sequential narrative design." },
    { title: "Strawberry Head vs Dot Apple Juice", video: "/creative/stop-motion-3.MOV", description: "Character-driven storytelling." },
  ];

  const methodologyGroups = [
    {
      methodology: "Physical Computing & Haptics",
      methodologyIcon: Cpu,
      accent: "from-orange-500/20 to-amber-500/10",
      projects: [
        {
          title: "SNAPPED: 100-Point Physical Dashboard",
          type: "gallery" as const,
          description: "Haptic input system using Arduino Mega, arcade push buttons, and LED arrays. A tangible interface exploring the boundary between physical and digital interaction.",
          images: ["/creative/snapped-concept.png", "/creative/snapped-exploded-view.png", "/creative/snapped-assembly.png", "/creative/snapped-electrical.png", "/creative/snapped-fritzing.png", "/creative/snapped-construction.png", "/creative/snapped-components.png"],
          hero: "/creative/snapped-exploded-view.png",
        },
      ],
    },
    {
      methodology: "Human Factors & Form",
      methodologyIcon: Shapes,
      accent: "from-emerald-500/20 to-teal-500/10",
      projects: [
        {
          title: "Ergonomic Prototyping: Buzz Hammer",
          type: "gallery" as const,
          description: "Human factors study from concept sketch to painted final model. Exploring grip ergonomics and tool form language.",
          images: ["/creative/buzz-hammer-sketch.jpg", "/creative/buzz-hammer-foam.jpg", "/creative/buzz-hammer-painted.jpg", "/creative/buzz-hammer-reference.jpeg"],
          hero: "/creative/buzz-hammer-painted.jpg",
        },
        {
          title: "Sculpey Sculptures",
          type: "gallery" as const,
          description: "Three-dimensional world-building for spatial reasoning. Hand-sculpted characters exploring form, proportion, and personality.",
          images: ["/creative/sculpey-1.jpg", "/creative/sculpey-2.jpg", "/creative/sculpey-3.jpg", "/creative/sculpey-4.jpg", "/creative/sculpey-5.jpg", "/creative/sculpey-6.jpg", "/creative/sculpey-7.jpg", "/creative/sculpey-8.jpg", "/creative/sculpey-9.jpg"],
          hero: "/creative/sculpey-1.jpg",
        },
        {
          title: "Digital 3D Sculpting",
          type: "gallery" as const,
          description: "Character modeling in Nomad Sculpt bridging traditional and modern workflows. Digital clay meets artistic expression.",
          images: ["/creative/nomad-sculpt-1.jpg", "/creative/nomad-sculpt-2.jpg", "/creative/nomad-sculpt-3.jpg", "/creative/nomad-sculpt-4.jpg", "/creative/nomad-sculpt-5.jpg", "/creative/nomad-sculpt-6.jpg", "/creative/nomad-sculpt-7.jpg"],
          hero: "/creative/nomad-sculpt-1.jpg",
        },
      ],
    },
    {
      methodology: "Narrative & Motion",
      methodologyIcon: Film,
      accent: "from-violet-500/20 to-purple-500/10",
      projects: [
        {
          title: "Stop-Motion Animation",
          type: "videos" as const,
          description: "Frame-by-frame storytelling for micro-interaction design. Each animation explores timing, pacing, and narrative through physical media.",
          videos: stopMotionVideos,
          images: undefined,
          hero: undefined,
        },
        {
          title: "Digital Illustrations",
          type: "gallery" as const,
          description: "Visual storytelling and sequential storyboarding. Exploring narrative through color, composition, and character.",
          images: ["/creative/illustration-1.png", "/creative/illustration-2.png", "/creative/illustration-3.png", "/creative/illustration-4.png", "/creative/illustration-5.png", "/creative/illustration-6.png", "/creative/illustration-7.png", "/creative/illustration-8.png", "/creative/illustration-9.jpg", "/creative/illustration-10.jpg", "/creative/illustration-11.png", "/creative/illustration-12.jpg", "/creative/illustration-13.png", "/creative/illustration-14.png", "/creative/illustration-15.png", "/creative/illustration-16.png"],
          hero: "/creative/illustration-1.png",
        },
      ],
    },
  ];

  const scroll = (key: string, direction: "left" | "right") => {
    const el = scrollRefs.current[key];
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
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3 font-medium">Creative R&D</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">the lab.</h2>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              Frame-by-frame animation, sculpture, and physical computing — creative R&D that feeds directly into how I design digital experiences.
            </p>
          </div>

          <div className="space-y-20">
            {methodologyGroups.map((group, groupIndex) => {
              const GroupIcon = group.methodologyIcon;
              return (
                <div key={groupIndex}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${group.accent} flex items-center justify-center`}>
                      <GroupIcon className="h-4 w-4 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{group.methodology}</h3>
                  </div>

                  <div className="space-y-8">
                    {group.projects.map((project, projectIndex) => {
                      const scrollKey = `${groupIndex}-${projectIndex}`;

                      if (project.type === "videos") {
                        return (
                          <div key={projectIndex} className="rounded-xl border border-border bg-card overflow-hidden">
                            <div className="p-6 pb-4">
                              <h4 className="text-base font-semibold text-foreground mb-1">{project.title}</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 pt-0">
                              {project.videos?.map((video, videoIndex) => (
                                <div key={videoIndex} className="relative aspect-video rounded-lg overflow-hidden bg-background group">
                                  <video
                                    className="w-full h-full object-contain"
                                    controls
                                    preload="metadata"
                                    playsInline
                                    onPlay={() => setPlayingVideo(videoIndex)}
                                  >
                                    <source src={video.video} type="video/quicktime" />
                                    <source src={video.video} type="video/mp4" />
                                  </video>
                                  {playingVideo !== videoIndex && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 pointer-events-none">
                                      <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Play className="h-6 w-6 text-accent-foreground ml-0.5" />
                                      </div>
                                      <span className="text-xs text-foreground/70 mt-3 font-medium">{video.title}</span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={projectIndex} className="rounded-xl border border-border bg-card overflow-hidden group/card hover:border-accent/30 transition-colors duration-300">
                          {/* Hero image */}
                          {project.hero && (
                            <div
                              className="relative h-56 md:h-72 overflow-hidden cursor-pointer"
                              onClick={() => project.images && openLightbox(project.images, 0, project.title)}
                            >
                              <img
                                src={project.hero}
                                alt={project.title}
                                className="w-full h-full object-contain bg-secondary transition-transform duration-700 group-hover/card:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                              <div className="absolute bottom-4 left-5">
                                <span className="text-xs text-foreground/60 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                                  {project.images?.length} images — click to explore
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Info + horizontal scroll gallery */}
                          <div className="p-5">
                            <h4 className="text-base font-semibold text-foreground mb-1">{project.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                            {/* Scrollable thumbnail strip */}
                            {project.images && project.images.length > 1 && (
                              <div className="relative group/scroll">
                                <button
                                  onClick={() => scroll(scrollKey, "left")}
                                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card/90 border border-border flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-200 hover:bg-accent hover:text-accent-foreground"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <div
                                  ref={(el) => { scrollRefs.current[scrollKey] = el; }}
                                  className="flex gap-2 overflow-x-auto scrollbar-hide pb-1"
                                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                                >
                                  {project.images.map((img, imgIndex) => (
                                    <div
                                      key={imgIndex}
                                      className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-secondary cursor-pointer ring-1 ring-border hover:ring-accent/50 transition-all duration-200 hover:scale-105"
                                      onClick={() => openLightbox(project.images!, imgIndex, project.title)}
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
                                  onClick={() => scroll(scrollKey, "right")}
                                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card/90 border border-border flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-200 hover:bg-accent hover:text-accent-foreground"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
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
