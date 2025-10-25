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

      {/* Resume Button Section */}
      <section className="flex justify-center my-12">
        <a
          href="/resume/nathan-zukerman-resume.pdf" // Make sure the PDF is in public/resume/
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="lg" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
