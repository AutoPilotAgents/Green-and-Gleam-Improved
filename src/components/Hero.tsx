import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Shield, Zap } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";
import RippleButton from "@/components/RippleButton";

const Hero = () => {
  const textAnimation = useScrollAnimation({ threshold: 0.1 });
  const imageAnimation = useScrollAnimation({ threshold: 0.1 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-lime/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent-mint/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div 
            ref={textAnimation.ref}
            className={`${scrollAnimations.fadeInLeft} ${
              textAnimation.isVisible ? scrollAnimations.fadeInLeftActive : scrollAnimations.fadeInLeftInitial
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Gutter Cleaning
              <span className="block text-primary-lime">Done Right</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Professional, eco-friendly gutter cleaning services that protect your home 
              and enhance your property's value. Serving the Saint Paul area with pride.
            </p>

            <div 
              ref={ctaAnimation.ref}
              className={`flex flex-col sm:flex-row gap-4 mb-12 ${scrollAnimations.fadeInUp} ${
                ctaAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
              }`}
            >
              <RippleButton
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              >
                Schedule Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </RippleButton>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary-lime mr-2" />
                <span>Insured & Bonded</span>
              </div>
              <div className="flex items-center">
                <Leaf className="w-5 h-5 text-primary-lime mr-2" />
                <span>Eco-Friendly</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-primary-lime mr-2" />
                <span>Licensed Pros</span>
              </div>
            </div>
          </div>

          {/* Image/Graphic Content */}
          <div 
            ref={imageAnimation.ref}
            className={`relative ${scrollAnimations.fadeInRight} ${
              imageAnimation.isVisible ? scrollAnimations.fadeInRightActive : scrollAnimations.fadeInRightInitial
            }`}
          >
            <div className="relative">
              <img 
                src="/placeholder.png" 
                alt="Professional gutter cleaning service" 
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
              
              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 w-64 animate-float animation-delay-1000">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                    5.0
                  </div>
                  <div className="text-sm font-semibold text-foreground">Excellent Service</div>
                </div>
                <p className="text-xs text-muted-foreground">
                  "They cleaned our gutters perfectly and were done in no time. Highly recommend!"
                </p>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -top-6 -right-6 bg-primary rounded-xl shadow-xl p-4 w-48 animate-float animation-delay-3000">
                <div className="text-white text-sm font-semibold mb-1">10+ Years</div>
                <div className="text-primary-lime text-xs">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;