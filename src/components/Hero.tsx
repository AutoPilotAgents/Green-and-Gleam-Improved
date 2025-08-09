"use client";

import React from 'react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import heroImage from '../assets/hero-image.jpg';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gleam & Green Landscaping
          </h1>
          <p className="text-xl text-white mb-8">
            Transform your outdoor space with our expert landscaping services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative inline-block">
              <div className="absolute -inset-2 rounded-lg bg-emerald-500 opacity-70 blur-lg animate-pulse"></div>
              <Button 
                size="lg" 
                className="relative bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Now
              </Button>
            </div>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-3 rounded-lg font-semibold text-lg"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating contact info */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="flex items-center space-x-3 text-white">
            <Phone className="w-5 h-5" />
            <span className="font-medium">(555) 123-4567</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;