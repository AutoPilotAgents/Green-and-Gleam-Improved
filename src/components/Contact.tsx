import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";
import RippleButton from "@/components/RippleButton";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });
  const hoursAnimation = useScrollAnimation({ threshold: 0.3 });

  const handleCopyPhone = async () => {
    const phoneDisplay = "(612) 460-8805‬";
    await navigator.clipboard.writeText(phoneDisplay);
    toast({
      title: "Phone number copied",
      description: `${phoneDisplay} has been copied to your clipboard.`,
    });
  };

  const handleCopyEmail = async () => {
    const email = "info@greenandgleam.com";
    await navigator.clipboard.writeText(email);
    toast({
      title: "Email copied",
      description: `${email} has been copied to your clipboard.`,
    });
  };

  const scrollToScheduling = () => {
    const el = document.getElementById("scheduling");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
              <p className="text-xl font-semibold text-primary mb-2">(612) 460-8805‬</p>
              <p className="text-muted-foreground">Speak with our experts</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={handleCopyPhone}>
                Copy Number
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
              <p className="text-lg font-semibold text-primary mb-2">info@greenandgleam.com</p>
              <p className="text-muted-foreground">Get a written estimate</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={handleCopyEmail}>
                Copy Email
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
              <p className="text-lg font-semibold text-primary mb-2">Twin Cities Metro Area, MN</p>
              <p className="text-muted-foreground">And surrounding areas</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={scrollToScheduling}>
                Go to Schedule
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
                <strong className="text-foreground">Business Hours: </strong> 
                 Monday - Sunday: 9:00 AM - 8:00 PM
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;