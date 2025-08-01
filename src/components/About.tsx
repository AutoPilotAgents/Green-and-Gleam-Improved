import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, MapPin, Leaf } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";

const About = () => {
  const textAnimation = useScrollAnimation({ threshold: 0.2 });
  const imageAnimation = useScrollAnimation({ threshold: 0.2 });
  const statsAnimation = useScrollAnimation({ threshold: 0.3 });

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: 500, label: "Happy Customers", suffix: "+" },
    { icon: <Award className="w-6 h-6" />, number: 10, label: "Years Experience", suffix: "+" },
    { icon: <MapPin className="w-6 h-6" />, number: 50, label: "Saint Paul Neighborhoods", suffix: "+" },
    { icon: <Leaf className="w-6 h-6" />, number: 100, label: "Eco-Friendly", suffix: "%" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={textAnimation.ref}
            className={`${scrollAnimations.fadeInLeft} ${
              textAnimation.isVisible ? scrollAnimations.fadeInLeftActive : scrollAnimations.fadeInLeftInitial
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proudly Serving
              <span className="text-primary block">Saint Paul, Minnesota</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              We're Teague and Sam, two 18-year-olds who take pride in reliable, neighborly service. We specialize in gutter cleaning and lawn mowing, treating your home with the care we’d give our own. On-time, courteous, and thorough, so you don’t have to climb ladders or push mowers. We listen, tidy up, and leave everything safer and looking great. Local and easy to reach. Let us handle the hard work while you enjoy your yard..
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our eco-friendly approach combines professional expertise with environmental 
              responsibility, ensuring your home stays protected while we protect our beautiful 
              Minnesota environment.
            </p>
            
            <div 
              ref={statsAnimation.ref}
              className={`grid grid-cols-2 gap-4 ${scrollAnimations.fadeInUp} ${
                statsAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
              }`}
            >
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className={`shadow-card border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group ${scrollAnimations.scaleIn} ${
                    statsAnimation.isVisible ? scrollAnimations.scaleInActive : scrollAnimations.scaleInInitial
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center text-primary mb-2 group-hover:animate-bounce-gentle">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      <AnimatedCounter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        className="group-hover:text-primary-lime transition-colors duration-300"
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div 
            ref={imageAnimation.ref}
            className={`relative overflow-hidden rounded-2xl shadow-primary ${scrollAnimations.fadeInRight} ${
              imageAnimation.isVisible ? scrollAnimations.fadeInRightActive : scrollAnimations.fadeInRightInitial
            }`}
          >
            <img 
              src="/placeholder.png" 
              alt="Saint Paul Minnesota Skyline" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2 text-primary drop-shadow-lg">Local Saint Paul Experts</h3>
              <p className="text-white/90">Serving every neighborhood with care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;