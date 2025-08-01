import { Button } from "@/components/ui/button";
import { Leaf, Droplets, Calendar } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const animation = useScrollAnimation({ threshold: 0.1 });
  
  const scrollToScheduling = () => {
    const element = document.getElementById("scheduling");
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-forest to-primary-emerald py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/src/assets/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={animation.ref}
          className={`text-center max-w-4xl mx-auto ${scrollAnimations.fadeInUp} ${
            animation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-primary-lime/20 backdrop-blur-sm rounded-full border border-primary-lime/30">
            <Leaf className="w-5 h-5 text-primary-lime" />
            <span className="text-primary-lime font-medium">Professional Gutter Cleaning</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Clean Gutters, <span className="text-primary-lime">Happy Home</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-50 mb-12 max-w-3xl mx-auto">
            Expert gutter cleaning services that protect your home and enhance its beauty
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              onClick={scrollToScheduling}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Service
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Our Services
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-primary-100">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary-lime mr-2"></div>
              <span>Same-Day Service</span>
            </div>
            <div className="w-px h-6 bg-primary-300"></div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary-lime mr-2"></div>
              <span>100% Satisfaction</span>
            </div>
            <div className="w-px h-6 bg-primary-300"></div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary-lime mr-2"></div>
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;