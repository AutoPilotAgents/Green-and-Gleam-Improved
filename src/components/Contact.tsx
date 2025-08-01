import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";
import RippleButton from "@/components/RippleButton";

const Contact = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });
  const hoursAnimation = useScrollAnimation({ threshold: 0.3 });

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 ${scrollAnimations.fadeInUp} ${
            headerAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto">
            Contact Green & Gleam today for your free estimate and experience the difference 
            professional gutter service makes.
          </p>
        </div>
        
        <div 
          ref={cardsAnimation.ref}
          className={`grid lg:grid-cols-3 gap-8 mb-12 ${scrollAnimations.slideInUp} ${
            cardsAnimation.isVisible ? scrollAnimations.slideInUpActive : scrollAnimations.slideInUpInitial
          }`}
        >
          <Card 
            className={`shadow-card border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible ? scrollAnimations.scaleInActive : scrollAnimations.scaleInInitial
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4 group-hover:animate-bounce-gentle">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-foreground group-hover:text-primary-lime transition-colors duration-300">Call Us Today</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-primary mb-2 group-hover:animate-pulse-glow">(651) 555-CLEAN</p>
              <p className="text-muted-foreground">Speak with our experts</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={() => smoothScroll('contact')}>
                Call Now
              </RippleButton>
            </CardContent>
          </Card>
          
          <Card 
            className={`shadow-card border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible ? scrollAnimations.scaleInActive : scrollAnimations.scaleInInitial
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4 group-hover:animate-bounce-gentle">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-foreground group-hover:text-primary-lime transition-colors duration-300">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-primary mb-2 group-hover:animate-pulse-glow">info@greengleam.com</p>
              <p className="text-muted-foreground">Get a written estimate</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={() => smoothScroll('contact')}>
                Send Email
              </RippleButton>
            </CardContent>
          </Card>
          
          <Card 
            className={`shadow-card border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible ? scrollAnimations.scaleInActive : scrollAnimations.scaleInInitial
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4 group-hover:animate-bounce-gentle">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-foreground group-hover:text-primary-lime transition-colors duration-300">Service Area</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-primary mb-2 group-hover:animate-pulse-glow">Saint Paul, MN</p>
              <p className="text-muted-foreground">And surrounding areas</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={() => smoothScroll('contact')}>
                Check Coverage
              </RippleButton>
            </CardContent>
          </Card>
        </div>
        
        <Card 
          ref={hoursAnimation.ref}
          className={`shadow-primary border-border/50 bg-card/50 backdrop-blur-sm ${scrollAnimations.fadeInUp} ${
            hoursAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <CardContent className="p-8">
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span className="text-lg">
                <strong className="text-foreground">Business Hours:</strong> 
                Monday - Saturday: 7:00 AM - 6:00 PM | Sunday: Emergency Service Only
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;