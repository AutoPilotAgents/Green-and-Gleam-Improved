import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";
import { Calendar, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Scheduling = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const formAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="scheduling" className="relative py-20 bg-background overflow-hidden">
      {/* Decorative leaves background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {/* Layered subtle gradient wash to match theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-forest/5 via-primary-emerald/5 to-primary-lime/5" />
        
        {/* Leaves: multiple drifting elements with varied sizes, speeds, and offsets */}
        <div className="absolute -top-10 left-1/4 w-8 h-8 rounded-[30%_70%_60%_40%/40%_30%_70%_60%] bg-primary-emerald/20 blur-[1px] animate-[leaf-drift_14s_linear_infinite]"></div>
        <div className="absolute top-10 left-10 w-5 h-5 rounded-[40%_60%_50%_50%/50%_40%_60%_50%] bg-primary-lime/25 blur-[0.5px] animate-[leaf-drift_18s_linear_infinite_-2s]"></div>
        <div className="absolute top-1/3 -left-10 w-6 h-6 rounded-[50%_50%_40%_60%/60%_50%_50%_40%] bg-primary-emerald/15 blur-[0.5px] animate-[leaf-drift_16s_linear_infinite_-6s]"></div>
        <div className="absolute top-1/2 left-3/4 w-9 h-9 rounded-[30%_70%_60%_40%/40%_30%_70%_60%] bg-primary-lime/20 blur-[1px] animate-[leaf-drift_20s_linear_infinite_-4s]"></div>
        <div className="absolute top-2/3 left-1/5 w-7 h-7 rounded-[45%_55%_60%_40%/40%_45%_55%_60%] bg-primary-emerald/20 blur-[0.5px] animate-[leaf-drift_22s_linear_infinite_-8s]"></div>
        <div className="absolute top-3/4 left-2/3 w-6 h-6 rounded-[55%_45%_50%_50%/50%_55%_45%_50%] bg-primary-lime/25 blur-[1px] animate-[leaf-drift_19s_linear_infinite_-10s]"></div>
        <div className="absolute top-1/5 left-2/5 w-5 h-5 rounded-[35%_65%_55%_45%/45%_35%_65%_55%] bg-primary-emerald/20 blur-[0.5px] animate-[leaf-drift_17s_linear_infinite_-3s]"></div>
        <div className="absolute top-1/4 left-3 w-4 h-4 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] bg-primary-lime/20 blur-[0.5px] animate-[leaf-drift_21s_linear_infinite_-12s]"></div>

        {/* Keyframes via arbitrary property (Tailwind supports arbitrary keyframes in JIT) */}
        <style>
          {`
            @keyframes leaf-drift {
              0%   { transform: translateX(-10%) translateY(0) rotate(0deg); opacity: 0.0; }
              10%  { opacity: 0.7; }
              50%  { transform: translateX(60vw) translateY(-15px) rotate(25deg); opacity: 0.6; }
              80%  { transform: translateX(95vw) translateY(10px) rotate(-10deg); opacity: 0.4; }
              100% { transform: translateX(110vw) translateY(0) rotate(0deg); opacity: 0.0; }
            }
          `}
        </style>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-12 ${scrollAnimations.fadeInUp} ${
            headerAnimation.isVisible
              ? scrollAnimations.fadeInUpActive
              : scrollAnimations.fadeInUpInitial
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Schedule Your Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a convenient time and our team will take care of the rest.
          </p>
        </div>

        <div
          ref={formAnimation.ref}
          className={`${scrollAnimations.slideInUp} ${
            formAnimation.isVisible
              ? scrollAnimations.slideInUpActive
              : scrollAnimations.slideInUpInitial
          }`}
        >
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Booking Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Keep existing form or content as-is */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(651) 555-0123</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@greengleam.com</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button variant="cta" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Choose a Time
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;