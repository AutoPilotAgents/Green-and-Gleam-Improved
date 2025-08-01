import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";
import RippleButton from "@/components/ui/ripple-button";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("(651) 555-CLEAN");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@greenandgleam.com");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-16 ${scrollAnimations.fadeInUp} ${
            headerAnimation.isVisible
              ? scrollAnimations.fadeInUpActive
              : scrollAnimations.fadeInUpInitial
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We’re here to answer your questions and help schedule your service
          </p>
        </div>

        <div
          ref={cardsAnimation.ref}
          className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ${scrollAnimations.slideInUp} ${
            cardsAnimation.isVisible
              ? scrollAnimations.slideInUpActive
              : scrollAnimations.slideInUpInitial
          }`}
        >
          <Card className="group shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-primary mb-2">(651) 555-CLEAN</p>
              <p className="text-muted-foreground">Speak with our experts</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={handleCopyPhone}>
                Copy Number
              </RippleButton>
            </CardContent>
          </Card>

          <Card className="group shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-primary mb-2">hello@greenandgleam.com</p>
              <p className="text-muted-foreground">We respond within 24 hours</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={handleCopyEmail}>
                Copy Email
              </RippleButton>
            </CardContent>
          </Card>

          <Card className="group shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Message Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Prefer texting? Send us a message and we’ll get right back to you.
              </p>
              <RippleButton variant="cta" className="w-full">
                Start a Conversation
              </RippleButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;