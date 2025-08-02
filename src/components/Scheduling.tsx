import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Scissors, Droplets } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

// Declare the Cal global variable to fix TypeScript errors
declare global {
  interface Window {
    Cal: any;
  }
}

const Scheduling = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    // Initialize Cal.com for gutter cleaning
    const initGutterCleaning = () => {
      if (typeof window !== "undefined") {
        (function (C: any, A: string, L: string) { 
          let p = function (a: any, ar: any) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; 
              cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); }; 
              const namespace = ar[1]; 
              api.q = api.q || []; 
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar); 
              return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
        
        window.Cal("init", "gutter-cleaning", {origin:"https://app.cal.com"});
        window.Cal.ns["gutter-cleaning"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      }
    };

    // Initialize Cal.com for lawn mowing
    const initLawnMowing = () => {
      if (typeof window !== "undefined") {
        (function (C: any, A: string, L: string) { 
          let p = function (a: any, ar: any) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; 
              cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); }; 
              const namespace = ar[1]; 
              api.q = api.q || []; 
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar); 
              return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
        
        window.Cal("init", "lawn-mow", {origin:"https://app.cal.com"});
        window.Cal.ns["lawn-mow"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      }
    };

    initGutterCleaning();
    initLawnMowing();
  }, []);

  return (
    <section id="scheduling" className="py-20 bg-background relative overflow-hidden">
      {/* Floating leaves background effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-lime/10"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 ${scrollAnimations.fadeInUp} ${
            headerAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Schedule Your Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your gutter cleaning or lawn mowing service directly with our online calendar
          </p>
        </div>
        
        <div 
          ref={cardsAnimation.ref}
          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ${scrollAnimations.slideInUp} ${
            cardsAnimation.isVisible ? scrollAnimations.slideInUpActive : scrollAnimations.slideInUpInitial
          }`}
        >
          <Card 
            className={`shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible ? scrollAnimations.scaleInActive : scrollAnimations.scaleInInitial
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
              <p className="text-muted-foreground mb-6">
                Schedule your professional gutter cleaning service
              </p>
              <Button
                className="w-full"
                size="lg"
                data-cal-namespace="gutter-cleaning"
                data-cal-link="green-and-gleam/gutter-cleaning"
                data-cal-config='{"layout":"month_view"}'
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Gutter Cleaning
              </Button>
            </CardContent>
          </Card>
          
          <Card 
            className={`shadow-card hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-3 group ${scrollAnimations.scaleIn} ${
              cardsAnimation.isVisible ? scrollAnimations.scaleInActive : scrollAnimations.scaleInInitial
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
              <p className="text-muted-foreground mb-6">
                Schedule your professional lawn mowing service
              </p>
              <Button
                className="w-full"
                size="lg"
                data-cal-namespace="lawn-mow"
                data-cal-link="green-and-gleam/lawn-mow"
                data-cal-config='{"layout":"month_view"}'
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Lawn Mowing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;