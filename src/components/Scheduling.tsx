import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Scissors, Droplets } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const Scheduling = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="scheduling" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 ${scrollAnimations.fadeInUp} ${
            headerAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Schedule Your Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your gutter cleaning or lawn mowing service directly with our online calendar
          </p>
        </div>
        
        <div 
          ref={cardsAnimation.ref}
          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ${scrollAnimations.slideInUp} ${
            cardsAnimation.isVisible ? scrollAnimations.slideInUpActive : scrollAnimations.slideInUpInitial
          }`}
        >
          <Card 
            className={`shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible ? scrollAnimations.scaleInActive : scrollAnimations.scaleInInitial
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
                Schedule your professional gutter cleaning service
              </p>
              <Button
                className="w-full"
                size="lg"
                data-cal-namespace="gutter-cleaning"
                data-cal-link="green-and-gleam/gutter-cleaning"
                data-cal-config='{"layout":"month_view"}'
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Gutter Cleaning
              </Button>
            </CardContent>
          </Card>
          
          <Card 
            className={`shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible ? scrollAnimations.scaleInActive : scrollAnimations.scaleInInitial
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
                Schedule your professional lawn mowing service
              </p>
              <Button
                className="w-full"
                size="lg"
                data-cal-namespace="lawn-mow"
                data-cal-link="green-and-gleam/lawn-mow"
                data-cal-config='{"layout":"month_view"}'
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Lawn Mowing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;