import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Green & Gleam. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Visit our Facebook"
                onClick={() =>
                  openExternal("https://www.facebook.com/profile.php?id=61574115453638")
                }
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/50 hover:bg-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@greengleam.com"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/50 hover:bg-accent transition-colors"
                aria-label="Send us an email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;