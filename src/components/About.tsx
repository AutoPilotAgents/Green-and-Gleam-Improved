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
              We’re Teague and Sam, two 18-year-olds who treat your home like our own. Green and Gleam delivers reliable gutter cleaning and lawn mowing with being on time, tidy, and careful. We listen, work hard, and leave your home more protected and looking its best. Local and easy to schedule. Let us handle the ladder and the lawn so you can relax and enjoy your home.
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
            className={`grid grid-cols-1 gap-8 ${scrollAnimations.fadeInRight} ${
              imageAnimation.isVisible ? scrollAnimations.fadeInRightActive : scrollAnimations.fadeInRightInitial
            }`}
          >
            <div className="bg-white rounded-2xl shadow-card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="/placeholder.png" 
                  alt="Team Member" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Jake Thompson</h3>
                  <p className="text-primary">Founder & Lead Technician</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "I started Green & Gleam because I saw a need for reliable, eco-friendly gutter services in our community. 
                Every home deserves proper protection, and we're committed to delivering that with a personal touch."
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="/placeholder.png" 
                  alt="Team Member" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Sarah Johnson</h3>
                  <p className="text-primary">Operations Manager</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Our customers aren't just clients - they're our neighbors. That's why we go above and beyond to ensure 
                every job is completed with precision and care, using only environmentally safe methods."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;