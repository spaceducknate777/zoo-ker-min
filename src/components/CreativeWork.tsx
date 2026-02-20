import { Card } from "@/components/ui/card";
import { Film, Shapes, Cpu, Play } from "lucide-react";
import { useState } from "react";

const CreativeWork = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const stopMotionVideos = [
    { title: "Stop-Motion Animation 1", video: "/creative/stop-motion-1.MOV", description: "Frame-by-frame storytelling." },
    { title: "Stop-Motion Animation 2", video: "/creative/stop-motion-2.MOV", description: "Sequential narrative design." },
    { title: "Strawberry Head vs Dot Apple Juice", video: "/creative/stop-motion-3.MOV", description: "Character-driven storytelling." },
  ];

  const methodologyGroups = [
    {
      methodology: "Physical Computing & Haptics",
      methodologyIcon: Cpu,
      projects: [
        {
          title: "SNAPPED: 100-Point Physical Dashboard",
          type: "gallery" as const,
          description: "Haptic input system using Arduino Mega, arcade push buttons, and LED arrays.",
          images: ["/creative/snapped-concept.png", "/creative/snapped-exploded-view.png", "/creative/snapped-assembly.png", "/creative/snapped-electrical.png", "/creative/snapped-fritzing.png", "/creative/snapped-construction.png", "/creative/snapped-components.png"],
        },
      ],
    },
    {
      methodology: "Human Factors & Form",
      methodologyIcon: Shapes,
      projects: [
        {
          title: "Ergonomic Prototyping: Buzz Hammer",
          type: "gallery" as const,
          description: "Human factors study from concept sketch to painted final model.",
          images: ["/creative/buzz-hammer-sketch.jpg", "/creative/buzz-hammer-foam.jpg", "/creative/buzz-hammer-painted.jpg", "/creative/buzz-hammer-reference.jpeg"],
        },
        {
          title: "Sculpey Sculptures",
          type: "gallery" as const,
          description: "Three-dimensional world-building for spatial reasoning.",
          images: ["/creative/sculpey-1.jpg", "/creative/sculpey-2.jpg", "/creative/sculpey-3.jpg", "/creative/sculpey-4.jpg", "/creative/sculpey-5.jpg", "/creative/sculpey-6.jpg", "/creative/sculpey-7.jpg", "/creative/sculpey-8.jpg", "/creative/sculpey-9.jpg"],
        },
        {
          title: "Digital 3D Sculpting",
          type: "gallery" as const,
          description: "Character modeling in Nomad Sculpt bridging traditional and modern workflows.",
          images: ["/creative/nomad-sculpt-1.jpg", "/creative/nomad-sculpt-2.jpg", "/creative/nomad-sculpt-3.jpg", "/creative/nomad-sculpt-4.jpg", "/creative/nomad-sculpt-5.jpg", "/creative/nomad-sculpt-6.jpg", "/creative/nomad-sculpt-7.jpg"],
        },
      ],
    },
    {
      methodology: "Narrative & Motion",
      methodologyIcon: Film,
      projects: [
        {
          title: "Stop-Motion Animation",
          type: "videos" as const,
          description: "Frame-by-frame storytelling for micro-interaction design.",
          videos: stopMotionVideos,
          images: undefined,
        },
        {
          title: "Digital Illustrations",
          type: "gallery" as const,
          description: "Visual storytelling and sequential storyboarding.",
          images: ["/creative/illustration-1.png", "/creative/illustration-2.png", "/creative/illustration-3.png", "/creative/illustration-4.png", "/creative/illustration-5.png", "/creative/illustration-6.png", "/creative/illustration-7.png", "/creative/illustration-8.png", "/creative/illustration-9.jpg", "/creative/illustration-10.jpg", "/creative/illustration-11.png", "/creative/illustration-12.jpg", "/creative/illustration-13.png", "/creative/illustration-14.png"],
        },
      ],
    },
  ];

  return (
    <section id="creative" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">the lab.</h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          Frame-by-frame animation, sculpture, and physical computing — creative R&D that feeds directly into how I design digital experiences.
        </p>

        <div className="space-y-12">
          {methodologyGroups.map((group, groupIndex) => {
            const GroupIcon = group.methodologyIcon;
            return (
              <div key={groupIndex}>
                <div className="flex items-center gap-2 mb-5">
                  <GroupIcon className="h-4 w-4 text-accent" />
                  <h3 className="text-base font-semibold text-foreground">{group.methodology}</h3>
                </div>

                <div className={`grid ${group.projects.length === 1 ? 'md:grid-cols-1 max-w-2xl' : 'md:grid-cols-2'} gap-6`}>
                  {group.projects.map((project, projectIndex) => (
                    <Card key={projectIndex} className="overflow-hidden border-border hover:border-accent/50 transition-colors bg-card">
                      {project.type === "videos" ? (
                        <div className="space-y-2">
                          {project.videos?.map((video, videoIndex) => (
                            <div key={videoIndex} className="relative h-48 overflow-hidden bg-background">
                              <video className="w-full h-full object-contain" controls preload="metadata" playsInline onPlay={() => setPlayingVideo(videoIndex)}>
                                <source src={video.video} type="video/quicktime" />
                                <source src={video.video} type="video/mp4" />
                              </video>
                              {playingVideo !== videoIndex && (
                                <div className="absolute inset-0 flex items-center justify-center bg-background/30 pointer-events-none">
                                  <div className="w-12 h-12 rounded-full bg-accent/80 flex items-center justify-center">
                                    <Play className="h-6 w-6 text-accent-foreground ml-0.5" />
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 gap-1 p-2 max-h-[350px] overflow-y-auto">
                          {project.images?.map((img, imgIndex) => (
                            <div key={imgIndex} className="relative aspect-square overflow-hidden rounded-md bg-secondary">
                              <img src={img} alt={`${project.title} ${imgIndex + 1}`} className="w-full h-full object-contain transition-transform duration-300 hover:scale-110" />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="p-5">
                        <h4 className="text-sm font-semibold text-foreground mb-1">{project.title}</h4>
                        <p className="text-xs text-muted-foreground">{project.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreativeWork;
