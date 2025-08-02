import { Star, Leaf, Droplets, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Star,
    title: "Top-Rated Service",
    description: "Hundreds of satisfied customers trust us for reliable, professional gutter care.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable cleaning methods and responsible waste disposal.",
  },
  {
    icon: Droplets,
    title: "Water Damage Prevention",
    description: "Protect your foundation, siding, and landscaping from costly damage.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Peace of mind knowing your property is protected.",
  },
];

const stats = [
  { label: "Homes Serviced", number: 20, suffix: "+" },
  { label: "5-Star Reviews", number: 50, suffix: "+" },
  { label: "Years Experience", number: 5, suffix: "+" },
  { label: "Clogs Prevented", number: 500, suffix: "+" },
];

const About = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const statsAnimation = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-16 ${scrollAnimations.fadeInUp} ${
            headerAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Green & Gleam?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We’re a local, dependable team dedicated to keeping your gutters clean and your property protected.
          </p>
        </div>

        <div
          ref={featuresAnimation.ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${scrollAnimations.slideInUp} ${
            featuresAnimation.isVisible ? scrollAnimations.slideInUpActive : scrollAnimations.slideInUpInitial
          }`}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`shadow-card hover:shadow-glow border-border/50 transition-all duration-500 hover:-translate-y-2 ${scrollAnimations.scaleIn} ${
                  featuresAnimation.isVisible ? scrollAnimations.scaleInActive : scrollAnimations.scaleInInitial
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div
          ref={statsAnimation.ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${scrollAnimations.fadeInUp} ${
            statsAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-card border border-border/50 shadow-primary"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-3xl font-bold text-foreground">
                <AnimatedCounter 
                  to={stat.number}
                  suffix={stat.suffix}
                  className="text-primary"
                />
              </div>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;