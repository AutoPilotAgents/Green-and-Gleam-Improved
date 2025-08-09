"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-forest/5 to-background"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-lime/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-emerald/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-forest to-primary-emerald bg-clip-text text-transparent">
            Transform Your Outdoor Space Into a Green Paradise
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Professional landscaping services that blend beauty with sustainability. 
            Let our experts create the outdoor oasis you've always dreamed of.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              orbitingLight={true}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-lime rounded-full mr-2 animate-pulse"></div>
              <span>100+ Projects Completed</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-emerald rounded-full mr-2 animate-pulse"></div>
              <span>Eco-Friendly Solutions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-forest rounded-full mr-2 animate-pulse"></div>
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;