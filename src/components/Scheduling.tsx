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
        {/* Row 1 */}
        <div className="absolute top-[5%] left-[10%] w-6 h-6 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[5%] left-[30%] w-8 h-8 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[5%] left-[50%] w-5 h-5 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[5%] left-[70%] w-7 h-7 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[5%] left-[90%] w-6 h-6 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Row 2 */}
        <div className="absolute top-[15%] left-[20%] w-7 h-7 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[15%] left-[40%] w-5 h-5 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-[15%] left-[60%] w-9 h-9 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute top-[15%] left-[80%] w-6 h-6 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Row 3 */}
        <div className="absolute top-[25%] left-[10%] w-8 h-8 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-[25%] left-[30%] w-6 h-6 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[25%] left-[50%] w-7 h-7 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute top-[25%] left-[70%] w-5 h-5 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '4.8s' }}></div>
        <div className="absolute top-[25%] left-[90%] w-9 h-9 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '1.8s' }}></div>
        
        {/* Row 4 */}
        <div className="absolute top-[35%] left-[20%] w-5 h-5 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-[35%] left-[40%] w-7 h-7 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '2.3s' }}></div>
        <div className="absolute top-[35%] left-[60%] w-6 h-6 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '4.3s' }}></div>
        <div className="absolute top-[35%] left-[80%] w-8 h-8 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '1.3s' }}></div>
        
        {/* Row 5 */}
        <div className="absolute top-[45%] left-[10%] w-9 h-9 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '3.3s' }}></div>
        <div className="absolute top-[45%] left-[30%] w-6 h-6 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute top-[45%] left-[50%] w-8 h-8 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '2.6s' }}></div>
        <div className="absolute top-[45%] left-[70%] w-5 h-5 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '4.6s' }}></div>
        <div className="absolute top-[45%] left-[90%] w-7 h-7 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '1.6s' }}></div>
        
        {/* Row 6 */}
        <div className="absolute top-[55%] left-[20%] w-6 h-6 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-[55%] left-[40%] w-8 h-8 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '2.9s' }}></div>
        <div className="absolute top-[55%] left-[60%] w-5 h-5 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '4.9s' }}></div>
        <div className="absolute top-[55%] left-[80%] w-7 h-7 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '1.9s' }}></div>
        
        {/* Row 7 */}
        <div className="absolute top-[65%] left-[10%] w-7 h-7 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '3.9s' }}></div>
        <div className="absolute top-[65%] left-[30%] w-5 h-5 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute top-[65%] left-[50%] w-9 h-9 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-[65%] left-[70%] w-6 h-6 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '4.2s' }}></div>
        <div className="absolute top-[65%] left-[90%] w-8 h-8 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Row 8 */}
        <div className="absolute top-[75%] left-[20%] w-8 h-8 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-[75%] left-[40%] w-6 h-6 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '2.7s' }}></div>
        <div className="absolute top-[75%] left-[60%] w-7 h-7 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '4.7s' }}></div>
        <div className="absolute top-[75%] left-[80%] w-5 h-5 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '1.7s' }}></div>
        
        {/* Row 9 */}
        <div className="absolute top-[85%] left-[10%] w-5 h-5 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '3.7s' }}></div>
        <div className="absolute top-[85%] left-[30%] w-7 h-7 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute top-[85%] left-[50%] w-6 h-6 rounded-full bg-primary-emerald/20 animate-float" style={{ animationDelay: '2.4s' }}></div>
        <div className="absolute top-[85%] left-[70%] w-9 h-9 rounded-full bg-primary-lime/20 animate-float" style={{ animationDelay: '4.4s' }}></div>
        <div className="absolute top-[85%] left-[90%] w-6 h-6 rounded-full bg-accent-mint/20 animate-float" style={{ animationDelay: '1.4s' }}></div>
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