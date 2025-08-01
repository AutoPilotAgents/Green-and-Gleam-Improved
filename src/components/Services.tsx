import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Scissors, Wrench, Leaf, ArrowRight, Home, TreePine } from "lucide-react";
import serviceIcon from "@/assets/gutter-service-icon.jpg";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const Services = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const services = [
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: "Gutter Cleaning",
      description: "Complete debris removal and thorough cleaning of your gutter system to prevent water damage.",
      price: "Get your quote"
    },
    {
      icon: <Scissors className="w-8 h-8 text-primary" />,
      title: "Lawn Mowing",
      description: "Professional lawn cutting and trimming for a pristine yard appearance.",
      price: "Starting at $25"
    },
    {
      icon: <TreePine className="w-8 h-8 text-primary" />,
      title: "Landscaping",
      description: "Complete yard maintenance including edging, trimming, and seasonal cleanups.",
      price: "Custom pricing"
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Eco-Friendly Care",
      description: "Organic fertilization and sustainable practices for a healthy lawn and environment.",
      price: "Contact Us"
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
            Professional Home Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to protect your home and enhance your outdoor spaces
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
          <Button 
            variant="cta" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={scrollToContact}
          >
            Get Your Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;