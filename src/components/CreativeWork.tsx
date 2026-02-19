import { Card } from "@/components/ui/card";
import { Palette, Film, Box, Play, Smartphone } from "lucide-react";
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
      type: "gallery",
      description: "Three-dimensional world-building that sharpens spatial reasoning and tactile design thinking.",
      skills: "3D Thinking, Craftsmanship, Material Understanding",
      images: [
        "/creative/sculpey-1.jpg",
        "/creative/sculpey-2.jpg",
        "/creative/sculpey-3.jpg",
        "/creative/sculpey-4.jpg",
        "/creative/sculpey-5.jpg",
        "/creative/sculpey-6.jpg",
        "/creative/sculpey-7.jpg",
        "/creative/sculpey-8.jpg",
        "/creative/sculpey-9.jpg"
      ]
    },
    {
      title: "Digital 3D Sculpting",
      icon: Smartphone,
      type: "gallery",
      description: "Character modeling in Nomad Sculpt that bridges traditional sculpting with digital workflows.",
      skills: "Digital Sculpting, Character Design, 3D Modeling",
      images: [
        "/creative/nomad-sculpt-1.jpg",
        "/creative/nomad-sculpt-2.jpg",
        "/creative/nomad-sculpt-3.jpg",
        "/creative/nomad-sculpt-4.jpg",
        "/creative/nomad-sculpt-5.jpg",
        "/creative/nomad-sculpt-6.jpg",
        "/creative/nomad-sculpt-7.jpg"
      ]
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
        "/creative/illustration-9.jpg",
        "/creative/illustration-10.jpg",
        "/creative/illustration-11.png",
        "/creative/illustration-12.jpg",
        "/creative/illustration-13.png",
        "/creative/illustration-14.png"
      ]
    }
  ];

  return (
    <section id="creative" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Experimental Design & Practice</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            The Lab
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Frame-by-frame animation sharpens my obsession with micro-interactions. Sculpture builds spatial reasoning for 3D and spatial computing. Every piece of creative R&D feeds directly into how I design digital experiences.
          </p>
          <p className="text-base text-foreground/80 max-w-2xl mx-auto mt-4 italic">
            "Every clay model, every animated sequence, every illustration deepens my understanding of how users perceive space, motion, and narrative."
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
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
                  <div className="grid grid-cols-3 gap-1 p-2 max-h-[400px] overflow-y-auto">
                    {project.images?.map((img, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-square overflow-hidden rounded-md bg-muted">
                        <img 
                          src={img} 
                          alt={`${project.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                
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
            How Creative R&D Informs My Design Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mt-6 text-sm text-muted-foreground">
            <div className="space-y-2">
              <p className="font-semibold text-accent">Frame-by-Frame Thinking</p>
              <p>Stop-motion teaches me to design micro-interactions with precision and intentionality.</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-accent">Spatial Reasoning</p>
              <p>Sculpture strengthens my ability to design for spatial computing, AR/VR, and hardware-software bridges.</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-accent">Digital-Physical Bridge</p>
              <p>3D digital sculpting connects traditional craftsmanship with modern prototyping workflows.</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-accent">Narrative Design</p>
              <p>Sequential illustration and storyboarding strengthen my ability to map complex user journeys and present data-driven research.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeWork;
