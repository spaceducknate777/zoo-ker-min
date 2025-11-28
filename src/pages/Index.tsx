import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandBar from "@/components/BrandBar";
import ImpactStats from "@/components/ImpactStats";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CreativeWork from "@/components/CreativeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BrandBar />
      <ImpactStats />
      <ProfessionalExperience />
      <About />
      <Projects />
      <CreativeWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
