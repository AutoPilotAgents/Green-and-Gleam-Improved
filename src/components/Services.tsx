import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Scissors, Leaf, Calendar } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const Services = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="services" className="relative py-20 bg-background overflow-hidden">
      {/* Themed background layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* Soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-forest/5 via-primary-emerald/5 to-primary-lime/5" />
        {/* Subtle radial accents */}
        <div className="absolute -top-32 -left-24 w-[360px] h-[360px] rounded-full bg-primary-emerald/10 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -right-24 w-[420px] h-[420px] rounded-full bg-primary-lime/10 blur-3xl animate-pulse-glow" />
        {/* Diagonal sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-primary-emerald/5 opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-16 ${scrollAnimations.fadeInUp} ${
            headerAnimation.isVisible
              ? scrollAnimations.fadeInUpActive
              : scrollAnimations.fadeInUpInitial
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional gutter cleaning and lawn maintenance services tailored to
            your home's needs
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
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-foreground">$99</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Thorough cleaning of gutters and downspouts to prevent water damage and
                protect your home's foundation.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-lime rounded-full mr-3"></div>
                  <span>Remove debris and buildup</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-lime rounded-full mr-3"></div>
                  <span>Inspect for damage</span>
                </li>
              </ul>
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
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-foreground">$25</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Professional lawn maintenance to keep your yard looking pristine
                throughout the growing season.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-lime rounded-full mr-3"></div>
                  <span>Edge walkways and driveways</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-lime rounded-full mr-3"></div>
                  <span>Trim around trees and structures</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-lime rounded-full mr-3"></div>
                  <span>Blow grass clippings</span>
                </li>
              </ul>
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
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground group-hover:text-primary-lime transition-colors duration-300">
                Custom Job
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-lime/20 text-primary-lime rounded-full text-sm font-medium">
                  Contact Us for Pricing
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                Need something special? We can handle any gutter or lawn project you have in mind.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-lime rounded-full mr-3"></div>
                  <span>Gutter repair or replacement</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-lime rounded-full mr-3"></div>
                  <span>Landscape maintenance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-lime rounded-full mr-3"></div>
                  <span>Seasonal cleanups</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-lime rounded-full mr-3"></div>
                  <span>Specialized services</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Button
            variant="cta"
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => scrollToSection("scheduling")}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;