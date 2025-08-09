"use client";

import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { RippleButton } from "@/components/RippleButton";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary-forest text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-accent-mint">Green & Gleam</h3>
            <p className="text-white/80 mb-6">
              Transforming outdoor spaces into sustainable, beautiful landscapes that thrive year-round.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent-mint transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent-mint transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-accent-mint transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-accent-mint transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/80 hover:text-accent-mint transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-accent-mint transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent-mint transition-colors">Landscape Design</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-mint transition-colors">Lawn Care</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-mint transition-colors">Garden Maintenance</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-mint transition-colors">Tree Services</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-accent-mint" />
                <span className="text-white/80">123 Garden Lane, Greenwood, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent-mint" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent-mint" />
                <span className="text-white/80">info@greenandgleam.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} Green & Gleam Landscaping. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <RippleButton variant="hero-secondary" size="sm">
                Get a Quote
              </RippleButton>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;