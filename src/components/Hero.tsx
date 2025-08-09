"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Zap, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-forest to-primary-emerald py-20 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-lime rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-mint rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-lime rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Outdoor Space Into a <span className="text-primary-lime">Lush Paradise</span>
          </h1>
          
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Professional landscaping services tailored to your vision. Sustainable solutions for beautiful, functional outdoor living.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 relative"
            >
              <span className="relative z-10">Schedule Now</span>
              <span className="absolute inset-0 rounded-full border-4 border-white animate-ping opacity-75"></span>
              <span className="absolute inset-0 rounded-full border-4 border-white"></span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              <Users className="mr-2 h-5 w-5" />
              Our Portfolio
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-primary-100">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-primary-lime mr-2" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 text-primary-lime mr-2" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-primary-lime mr-2" />
              <span>7-Day Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;