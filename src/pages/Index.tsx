import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";



const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Resume button */}
      <section className="flex justify-center my-12">
        <Button 
  variant="outline" 
  size="lg" 
  asChild
>
  <a 
    href="https://resume-ux-glow-up-vseh-3z2p4dk0a-spaceducknate777s-projects.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Download className="mr-2 h-4 w-4" />
    View Resume
  </a>
</Button>

      </section>

      <Footer />
    </div>
  );
};

export default Index;

