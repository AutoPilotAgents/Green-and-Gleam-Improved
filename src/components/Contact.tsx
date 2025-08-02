import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });
  const formAnimation = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
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
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for any questions or to schedule your
            service
          </p>
        </div>

        <div
          ref={cardsAnimation.ref}
          className={`grid lg:grid-cols-3 gap-8 mb-12 ${scrollAnimations.slideInUp} ${
            cardsAnimation.isVisible
              ? scrollAnimations.slideInUpActive
              : scrollAnimations.slideInUpInitial
          }`}
        >
          <Card className="shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-2">Reach us directly</p>
              <p className="text-2xl font-bold text-foreground">(555) 123-4567</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-2">Send us a message</p>
              <p className="text-2xl font-bold text-foreground">
                info@greenandgleam.com
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4 group-hover:animate-wiggle">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Visit Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-2">Service area</p>
              <p className="text-2xl font-bold text-foreground">
                Denver Metro Area
              </p>
            </CardContent>
          </Card>
        </div>

        <Card
          ref={formAnimation.ref}
          className={`max-w-2xl mx-auto shadow-card ${scrollAnimations.slideInUp} ${
            formAnimation.isVisible
              ? scrollAnimations.slideInUpActive
              : scrollAnimations.slideInUpInitial
          }`}
        >
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Send us a message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In</Label>
                <select
                  id="service"
                  className="w-full p-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="gutter">Gutter Cleaning</option>
                  <option value="lawn">Lawn Mowing</option>
                  <option value="custom">Custom Job</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;