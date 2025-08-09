import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Scheduling from "@/components/Scheduling";
import Footer from "@/components/Footer";
import FloatingDroplets from "@/components/FloatingDroplets";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      <FloatingDroplets />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Scheduling />
        <Footer />
      </div>
    </div>
  );
};

export default Index;