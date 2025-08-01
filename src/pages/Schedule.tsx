import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Droplets, Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const Schedule = () => {
  useEffect(() => {
    // Load Cal embed script once
    if (!(window as any).Cal) {
      const s = document.createElement("script");
      s.src = "https://app.cal.com/embed/embed.js";
      s.async = true;
      s.onload = () => {
        const Cal = (window as any).Cal;
        Cal("init", "gutter-cleaning", { origin: "https://app.cal.com" });
        Cal.ns["gutter-cleaning"]("ui", { hideEventTypeDetails: false, layout: "month_view" });

        Cal("init", "lawn-mow", { origin: "https://app.cal.com" });
        Cal.ns["lawn-mow"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      };
      document.head.appendChild(s);
    } else {
      const Cal = (window as any).Cal;
      Cal("init", "gutter-cleaning", { origin: "https://app.cal.com" });
      Cal.ns["gutter-cleaning"]("ui", { hideEventTypeDetails: false, layout: "month_view" });

      Cal("init", "lawn-mow", { origin: "https://app.cal.com" });
      Cal.ns["lawn-mow"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/android-chrome-192x192.png"
              alt="Green & Gleam Logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-lg font-bold text-foreground">Green & Gleam</h1>
              <p className="text-xs text-muted-foreground">Gutter Cleaning Experts</p>
            </div>
          </div>
          <Link to="/" className="text-sm text-foreground hover:text-primary transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4 text-primary">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Schedule Your Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick a time that works for you. We’ll confirm the details and take care of the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3 text-primary group-hover:animate-bounce-gentle">
                  <Droplets className="w-8 h-8" />
                </div>
                <CardTitle className="text-foreground group-hover:text-primary-lime transition-colors">
                  Gutter Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Book a professional gutter cleaning at your convenience.
                </p>
                <Button
                  variant="cta"
                  size="lg"
                  className="text-base px-6"
                  data-cal-link="green-and-gleam/gutter-cleaning"
                  data-cal-namespace="gutter-cleaning"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Schedule Gutter Cleaning
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3 text-primary group-hover:animate-bounce-gentle">
                  <Scissors className="w-8 h-8" />
                </div>
                <CardTitle className="text-foreground group-hover:text-primary-lime transition-colors">
                  Lawn Mowing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Keep your yard pristine with our lawn mowing service.
                </p>
                <Button
                  variant="cta"
                  size="lg"
                  className="text-base px-6"
                  data-cal-link="green-and-gleam/lawn-mow"
                  data-cal-namespace="lawn-mow"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Schedule Lawn Mowing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;