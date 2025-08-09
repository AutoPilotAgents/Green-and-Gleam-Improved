import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-gutter-cleaning.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="w-6 h-6 text-primary-lime" />
            <span className="text-primary-lime font-semibold">Trusted Local Experts</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Exterior Care
            <span className="text-primary-lime block">Done Right</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Pro level gutter cleaning and maintenance services in Saint Paul, Minnesota. 
            Protecting your home with eco-friendly solutions and craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('scheduling')}
            >
              Schedule Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              View Services
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 text-white/90">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary-lime" />
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-primary-lime" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
