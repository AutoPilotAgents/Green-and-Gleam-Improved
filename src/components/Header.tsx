import { useCallback } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-foreground">
          Green & Gleam
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("services")}
            className="font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
          >
            Contact
          </button>

          <button
            onClick={() => scrollToSection("schedule")}
            className="font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
          >
            Schedule
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;