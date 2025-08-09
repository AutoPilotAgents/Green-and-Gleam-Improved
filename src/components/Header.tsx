import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/android-chrome-192x192.png"
            alt="Green & Gleam Logo - Professional Gutter Cleaning & Lawn Mowing Services"
            className="w-12 h-12 rounded-full"
            width="48"
            height="48"
          />
          <div>
            <h1 className="text-xl font-bold text-foreground">Green & Gleam</h1>
            <p className="text-xs text-muted-foreground">Gutter Cleaning Experts</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground font-semibold hover:text-primary transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
            aria-label="View our services"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground font-semibold hover:text-primary transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
            aria-label="Learn about our company"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("scheduling")}
            className="text-foreground font-semibold hover:text-primary transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
            aria-label="Schedule your service"
          >
            Schedule
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground font-semibold hover:text-primary transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
            aria-label="Contact information"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center">
              Saint Paul, MN
            </span>
          </div>
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection("scheduling")}
            aria-label="Book your service now"
          >
            <CalendarCheck className="w-4 h-4" />
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;