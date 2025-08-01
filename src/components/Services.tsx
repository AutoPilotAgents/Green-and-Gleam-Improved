import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Shield, Sprout, Sun, Droplets, Wrench } from "lucide-react";
import RippleButton from "@/components/RippleButton";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const Services = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });
  const detailsAnimation = useScrollAnimation({ threshold: 0.2 });

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
            Complete Gutter Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From regular maintenance to complete protection systems, we provide everything your
            gutters need to perform year-round.
          </p>
        </div>

        <div
          ref={cardsAnimation.ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${scrollAnimations.slideInUp} ${
            cardsAnimation.isVisible ? scrollAnimations.slideInUpActive : scrollAnimations.slideInUpInitial
          }`}
        >
          <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
            <CardHeader>
              <div className="flex items-center justify-center mb-4 group-hover:animate-bounce-gentle">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-center group-hover:text-primary-lime transition-colors duration-300">
                Gutter Cleaning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Remove debris, clear downspouts, and ensure proper water flow to protect your home.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  Complete debris removal
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  Downspout flushing
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  System inspection
                </li>
              </ul>
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-foreground">$99</span>
              </div>
              <RippleButton className="w-full">Book Cleaning</RippleButton>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
            <CardHeader>
              <div className="flex items-center justify-center mb-4 group-hover:animate-bounce-gentle">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-center group-hover:text-primary-lime transition-colors duration-300">
                Guard Installation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Premium gutter guards that keep debris out while maintaining optimal water flow.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  Professional installation
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  High-performance materials
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  Maintenance reduction
                </li>
              </ul>
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-foreground">Free Estimate</span>
              </div>
              <RippleButton className="w-full" variant="secondary">
                Get Estimate
              </RippleButton>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
            <CardHeader>
              <div className="flex items-center justify-center mb-4 group-hover:animate-bounce-gentle">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-center group-hover:text-primary-lime transition-colors duration-300">
                Repairs & Sealing
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Fix leaks, resecure sections, and restore proper pitch for efficient drainage.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  Leak detection and sealing
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  Hanger and bracket repair
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  Pitch adjustments
                </li>
              </ul>
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-foreground">From $149</span>
              </div>
              <RippleButton className="w-full" variant="outline">
                Request Repair
              </RippleButton>
            </CardContent>
          </Card>
        </div>

        <div
          ref={detailsAnimation.ref}
          className={`mt-16 grid md:grid-cols-2 gap-8 items-center ${scrollAnimations.fadeInUp} ${
            detailsAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <div className="space-y-6">
            <div className="flex items-start">
              <Sun className="w-6 h-6 text-primary mr-3" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Seasonal Readiness</h3>
                <p className="text-muted-foreground">
                  Prepare your gutters for heavy spring rains and autumn leaf fall with our
                  seasonal maintenance plans.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Sprout className="w-6 h-6 text-primary mr-3" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly Practices</h3>
                <p className="text-muted-foreground">
                  We responsibly dispose of debris and minimize water usage in all cleaning
                  processes.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-primary mr-3" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground">
                  Every service includes a quality check and photo documentation of completed work.
                </p>
              </div>
            </div>
          </div>

          <Card className="shadow-primary border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Green & Gleam?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  Licensed and insured professionals
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  Transparent pricing with no surprises
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  Local, reliable service you can trust
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;