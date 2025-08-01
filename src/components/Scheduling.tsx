import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Droplets, Scissors } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

declare global {
  interface Window {
    Cal?: any;
  }
}

const Scheduling = () => {
  useEffect(() => {
    // If Cal is already loaded, just init UIs; otherwise inject script once.
    const initCal = () => {
      if (!window.Cal) return;
      // Initialize both namespaces and UI as per provided snippets
      window.Cal("init", "gutter-cleaning", { origin: "https://app.cal.com" });
      window.Cal.ns?.["gutter-cleaning"]?.("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      window.Cal("init", "lawn-mow", { origin: "https://app.cal.com" });
      window.Cal.ns?.["lawn-mow"]?.("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    if (!document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.onload = initCal;
      document.head.appendChild(script);
    } else {
      initCal();
    }
  }, []);

  return (
    <section id="scheduling" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shadow-card">
            <Calendar className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Schedule Your Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick a time that works for you. Book instantly for gutter cleaning or lawn mowing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-3">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Gutter Cleaning</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Fast, professional gutter cleaning to protect your home.
              </p>
              <Button
                variant="cta"
                size="lg"
                className="text-lg"
                data-cal-link="green-and-gleam/gutter-cleaning"
                data-cal-namespace="gutter-cleaning"
                data-cal-config='{"layout":"month_view"}'
              >
                Book Gutter Cleaning
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-3">
                <Scissors className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Lawn Mowing</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Keep your yard pristine with our reliable lawn mowing service.
              </p>
              <Button
                variant="cta"
                size="lg"
                className="text-lg"
                data-cal-link="green-and-gleam/lawn-mow"
                data-cal-namespace="lawn-mow"
                data-cal-config='{"layout":"month_view"}'
              >
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