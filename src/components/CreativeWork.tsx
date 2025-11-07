import { Card } from "@/components/ui/card";
import { Palette, Film, Box, Play } from "lucide-react";
import { useState } from "react";

const CreativeWork = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const stopMotionVideos = [
    {
      title: "Stop-Motion Animation 1",
      video: "/creative/stop-motion-1.MOV",
      description: "Frame-by-frame storytelling that taught me to obsess over micro-interactions and transitions."
    },
    {
      title: "Stop-Motion Animation 2",
      video: "/creative/stop-motion-2.MOV",
      description: "Sequential narrative design that strengthens my understanding of user flow and timing."
    },
    {
      title: "Strawberry Head vs Dot Apple Juice",
      video: "/creative/stop-motion-3.MOV",
      description: "Character-driven storytelling exploring conflict, personality, and emotional narrative design."
    }
  ];

  const creativeProjects = [
    {
      title: "Stop-Motion Animation",
      icon: Film,
      type: "videos",
      description: "Frame-by-frame storytelling that taught me to obsess over micro-interactions and transitions.",
      skills: "Patience, Sequential Thinking, Attention to Detail",
      videos: stopMotionVideos
    },
    {
      title: "Sculpey Sculptures",
      icon: Box,
      type: "image",
      description: "Three-dimensional world-building that sharpens spatial reasoning and tactile design thinking.",
      skills: "3D Thinking, Craftsmanship, Material Understanding",
      image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&h=600&fit=crop" // Placeholder - upload your sculpture photos
    },
    {
      title: "Digital Illustrations",
      icon: Palette,
      type: "gallery",
      description: "Visual storytelling that strengthens my eye for composition, color theory, and emotional design.",
      skills: "Visual Design, Creative Problem-Solving, Color Theory",
      images: [
        "/creative/illustration-1.png",
        "/creative/illustration-2.png",
        "/creative/illustration-3.png",
        "/creative/illustration-4.png",
        "/creative/illustration-5.png",
        "/creative/illustration-6.png",
        "/creative/illustration-7.png",
        "/creative/illustration-8.png",
        "/creative/illustration-9.jpg"
      ]
    }
  ];

  return (
    <section id="creative" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Beyond UX: Creative Practice
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My creative practice in stop-motion animation, sculpture, and digital illustration sharpens my eye for detail, teaches patience in iteration, and reminds me that great experiences are built frame-by-frame.
          </p>
          <p className="text-base text-foreground/80 max-w-2xl mx-auto mt-4 italic">
            "Every clay model, every animated sequence, every illustration deepens my understanding of how users perceive space, motion, and narrative."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {creativeProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-500 hover:shadow-[var(--shadow-elevated)] bg-card animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {project.type === "videos" ? (
                  <div className="space-y-3">
                    {project.videos?.map((video, videoIndex) => (
                      <div key={videoIndex} className="relative h-56 overflow-hidden bg-black/90">
                        <video 
                          className="w-full h-full object-contain"
                          controls
                          preload="metadata"
                          playsInline
                          onPlay={() => setPlayingVideo(videoIndex)}
                        >
                          <source src={video.video} type="video/quicktime" />
                          <source src={video.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        {playingVideo !== videoIndex && (
                          <div className="absolute inset-0 flex items-center justify-center bg-background/20 pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center">
                              <Play className="h-8 w-8 text-accent-foreground ml-1" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : project.type === "gallery" ? (
                  <div className="grid grid-cols-3 gap-1 p-2">
                    {project.images?.slice(0, 9).map((img, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-square overflow-hidden rounded-md bg-muted">
                        <img 
                          src={img} 
                          alt={`${project.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs font-semibold text-accent/80 uppercase tracking-wide">
                      UX Skills Enhanced
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {project.skills}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 text-center animate-fade-in">
          <h3 className="text-xl font-bold text-foreground mb-3">
            How Creative Work Informs My UX Process
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6 text-sm text-muted-foreground">
            <div className="space-y-2">
              <p className="font-semibold text-accent">Frame-by-Frame Thinking</p>
              <p>Stop-motion teaches me to design micro-interactions with precision and intentionality.</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-accent">Spatial Reasoning</p>
              <p>Sculpture strengthens my ability to design for 3D spaces, AR/VR, and physical products.</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-accent">Visual Communication</p>
              <p>Illustration enhances my ability to communicate complex ideas through visual storytelling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeWork;
