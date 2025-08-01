import { useEffect } from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Cal?: any;
  }
}

const Schedule = () => {
  useEffect(() => {
    if (window.Cal && window.Cal.loaded) {
      window.Cal("init", "gutter-cleaning", { origin: "https://app.cal.com" });
      window.Cal.ns["gutter-cleaning"]("ui", { hideEventTypeDetails: false, layout: "month_view" });

      window.Cal("init", "lawn-mow", { origin: "https://app.cal.com" });
      window.Cal.ns["lawn-mow"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      if (!window.Cal) return;
      window.Cal("init", "gutter-cleaning", { origin: "https://app.cal.com" });
      window.Cal.ns["gutter-cleaning"]("ui", { hideEventTypeDetails: false, layout: "month_view" });

      window.Cal("init", "lawn-mow", { origin: "https://app.cal.com" });
      window.Cal.ns["lawn-mow"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    };
    document.head.appendChild(script);

    return () => {
      // no cleanup needed; Cal manages its own DOM and listeners
    };
  }, []);

  return (
    <section className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Schedule a Service</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a service below to pick a time that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Button
            variant="cta"
            size="lg"
            className="w-full text-lg py-6"
            data-cal-link="green-and-gleam/gutter-cleaning"
            data-cal-namespace="gutter-cleaning"
            data-cal-config='{"layout":"month_view"}'
          >
            Book Gutter Cleaning
          </Button>

          <Button
            variant="hero"
            size="lg"
            className="w-full text-lg py-6"
            data-cal-link="green-and-gleam/lawn-mow"
            data-cal-namespace="lawn-mow"
            data-cal-config='{"layout":"month_view"}'
          >
            Book Lawn Mowing
          </Button>
        </div>

        <div className="text-center mt-10">
          <a href="/#contact" className="text-primary hover:underline">Back to Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;