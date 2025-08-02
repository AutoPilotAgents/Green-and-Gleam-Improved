import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Scissors, Home, Wrench } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const Services = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 ${scrollAnimations.fadeInUp} ${
            headerAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional lawn care and gutter cleaning services tailored to your needs
          </p>
        </div>
        
        <div 
          ref={cardsAnimation.ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${scrollAnimations.slideInUp} ${
            cardsAnimation.isVisible ? scrollAnimations.slideInUpActive : scrollAnimations.slideInUpInitial
          }`}
        >
          <Card 
            className={`shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible
                ? scrollAnimations.scaleInActive
                : scrollAnimations.scaleInInitial
            }`}
          >
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Gutter Cleaning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Professional cleaning of gutters and downspouts to prevent water damage
              </p>
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                onClick={() => {
                  document.getElementById('scheduling')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
          
          <Card 
            className={`shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible
                ? scrollAnimations.scaleInActive
                : scrollAnimations.scaleInInitial
            }`}
          >
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                <Scissors className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Lawn Mowing
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Expert lawn mowing and trimming for a pristine yard appearance
              </p>
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                onClick={() => {
                  document.getElementById('scheduling')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
          
          <Card 
            className={`shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible
                ? scrollAnimations.scaleInActive
                : scrollAnimations.scaleInInitial
            }`}
          >
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Yard Maintenance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Comprehensive yard care including edging, weeding, and seasonal cleanup
              </p>
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                onClick={() => {
                  document.getElementById('scheduling')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
          
          <Card 
            className={`shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible
                ? scrollAnimations.scaleInActive
                : scrollAnimations.scaleInInitial
            }`}
          >
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Custom Job
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Need something specific? We can customize a service just for you
              </p>
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;