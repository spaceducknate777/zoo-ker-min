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
        <a
          href="https://resume-ux-glow-up-vseh.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary-glow transition-colors"
        >
          View My Resume
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

