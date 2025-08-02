import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Green & Gleam logo"
                className="h-8 w-8"
                loading="lazy"
              />
              <div className="leading-tight">
                <h1 className="text-xl font-bold text-foreground">Green & Gleam</h1>
                <p className="text-xs text-muted-foreground">home service experts</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/#services" className="text-sm text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/#about" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/#contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+16515550123"
              className="hidden sm:flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (651) 555-0123
            </a>
            <Button variant="default" className="hidden md:inline-flex">
              Get a Quote
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;