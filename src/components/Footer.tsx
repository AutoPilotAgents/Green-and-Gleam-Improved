import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-forest text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-lime rounded-full flex items-center justify-center">
                <span className="text-primary-forest font-bold text-sm">G&G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Green & Gleam</h3>
                <p className="text-sm text-primary-foreground/80">Gutter Cleaning Experts</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for professional gutter cleaning and maintenance 
              services in Saint Paul, Minnesota.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-lime transition-colors">Gutter Cleaning</a></li>
              <li><a href="#" className="hover:text-primary-lime transition-colors">Gutter Repair</a></li>
              <li><a href="#" className="hover:text-primary-lime transition-colors">Gutter Installation</a></li>
              <li><a href="#" className="hover:text-primary-lime transition-colors">Eco-Friendly Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(651) 555-CLEAN</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@greengleam.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Saint Paul, Minnesota</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Green & Gleam. All rights reserved. | Licensed & Insured | Serving Saint Paul, MN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;