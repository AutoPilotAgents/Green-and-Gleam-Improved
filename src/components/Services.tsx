import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Home, Wrench, Leaf, ArrowRight } from "lucide-react";
import serviceIcon from "@/assets/gutter-service-icon.jpg";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const Services = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 });

  const services = [
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: "Gutter Cleaning",
      description: "Complete debris removal and thorough cleaning of your gutter system.",
      price: "Starting at $149"
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Gutter Repair",
      description: "Professional repairs for leaks, loose gutters, and damaged sections.",
      price: "Starting at $99"
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Gutter Installation",
      description: "New gutter system installation with premium materials and warranty.",
      price: "Custom Quote"
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Eco-Friendly Solutions",
      description: "Environmentally conscious cleaning products and sustainable practices.",
      price: "Included"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 ${scrollAnimations.fadeInUp} ${
            headerAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <div className="flex justify-center mb-6">
            <img 
              src={serviceIcon} 
              alt="Gutter Services" 
              className="w-20 h-20 rounded-full shadow-card"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Gutter Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive gutter solutions to protect your Saint Paul home from water damage
          </p>
        </div>
        
        <div 
          ref={cardsAnimation.ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ${scrollAnimations.slideInUp} ${
            cardsAnimation.isVisible ? scrollAnimations.slideInUpActive : scrollAnimations.slideInUpInitial
          }`}
        >
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group ${scrollAnimations.scaleIn} ${
                cardsAnimation.isVisible ? scrollAnimations.scaleInActive : scrollAnimations.scaleInInitial
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-primary mb-4 group-hover:animate-pulse-glow">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div 
          ref={ctaAnimation.ref}
          className={`text-center ${scrollAnimations.fadeInUp} ${
            ctaAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Get Your Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;