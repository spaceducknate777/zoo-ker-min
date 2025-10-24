<<<<<<< HEAD
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
      <Footer />
    </div>
  );
=======
import VisualResume from "@/components/VisualResume";

const Index = () => {
  return <VisualResume />;
>>>>>>> glowup/main
};

export default Index;
