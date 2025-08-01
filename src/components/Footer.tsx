import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
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
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/android-chrome-192x192.png" 
                alt="Green & Gleam Logo" 
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground">Green & Gleam</h3>
                <p className="text-xs text-muted-foreground">Gutter Cleaning Experts</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Professional gutter cleaning services for residential and commercial properties in the Twin Cities area.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a
                  href="https://www.instagram.com/greengleam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Gutter Cleaning
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Lawn Mowing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Custom Job
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                 
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground text-sm">(651) 555-0123</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground text-sm">info@greengleam.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground text-sm">Saint Paul, MN 55104</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground text-sm">Mon-Fri: 8AM-5PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('scheduling')}
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Schedule Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Green & Gleam Gutter Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;