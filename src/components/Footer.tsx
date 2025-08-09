import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import RippleButton from "@/components/RippleButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-foreground text-background py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Green & Gleam</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Professional gutter cleaning and lawn mowing services for residential and commercial properties in the Twin Cities area.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61578779321115"
                aria-label="Green & Gleam Facebook"
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/greenandgleamco/?utm_source=ig_web_button_share_sheet"
                aria-label="Green & Gleam Instagram"
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(612) 460-8805</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@greenandgleam.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Saint Paul, MN</span>
              </li>
            </ul>
          </div>

          <div className="flex md:justify-end">
            <RippleButton variant="secondary" onClick={scrollToTop} aria-label="Back to top">
              Back to Top
            </RippleButton>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-6 text-xs text-muted-foreground flex flex-col md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Green & Gleam. All rights reserved.</p>
          <div className="space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;