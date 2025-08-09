"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-forest to-primary-emerald py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-lime/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-mint/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Outdoor Space Into a <span className="text-accent-mint">Green Paradise</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Professional landscaping and garden design services that bring your vision to life with sustainable, beautiful solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              orbitingLight={true}
              onClick={() => navigate('/contact')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Now
            </Button>
            <Button 
              variant="hero-secondary" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              onClick={() => {
                // Scroll to services section
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;