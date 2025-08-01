import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { smoothScrollToId } from "@/lib/scroll";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/android-chrome-192x192.png" 
            alt="Green & Gleam Logo" 
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold text-foreground">Green & Gleam</h1>
            <p className="text-xs text-muted-foreground">Gutter Cleaning Experts</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#services" 
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToId('services');
            }}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToId('about');
            }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToId('contact');
            }}
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Saint Paul, MN</span>
          </div>
          <Button variant="hero" size="sm" onClick={() => smoothScrollToId('contact')}>
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;