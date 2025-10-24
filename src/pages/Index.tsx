import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
    href="https://resume-ux-glow-up-vseh.vercel.app/" 
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

