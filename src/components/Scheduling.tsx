import { useEffect } from "react";
import { Calendar, Droplets, Scissors } from "lucide-react";
import RippleButton from "@/components/RippleButton";

declare global {
  interface Window {
    Cal?: any;
  }
}

const Scheduling = () => {
  useEffect(() => {
    // Load Cal embed script once
    if (!window.Cal) {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.onload = () => {
        if (!window.Cal) return;
        // Init both namespaces
        window.Cal("init", "gutter-cleaning", { origin: "https://app.cal.com" });
        window.Cal.ns["gutter-cleaning"]("ui", { hideEventTypeDetails: false, layout: "month_view" });

        window.Cal("init", "lawn-mow", { origin: "https://app.cal.com" });
        window.Cal.ns["lawn-mow"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      };
      document.head.appendChild(script);
    } else {
      // If already loaded, just configure UIs
      try {
        window.Cal("init", "gutter-cleaning", { origin: "https://app.cal.com" });
        window.Cal.ns["gutter-cleaning"]("ui", { hideEventTypeDetails: false, layout: "month_view" });

        window.Cal("init", "lawn-mow", { origin: "https://app.cal.com" });
        window.Cal.ns["lawn-mow"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } catch (_e) {
        // Cal may not be ready yet; ignore
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="scheduling" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-primary mb-3">
            <Calendar className="w-6 h-6" />
            <span className="font-semibold">Schedule Your Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book an Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a service below to see available times and schedule instantly.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-2 gap-6">
          <RippleButton
            variant="cta"
            className="w-full py-6 text-lg flex items-center justify-center gap-2"
            data-cal-link="green-and-gleam/gutter-cleaning"
            data-cal-namespace="gutter-cleaning"
            data-cal-config='{"layout":"month_view"}'
          >
            <Droplets className="w-5 h-5" />
            Gutter Cleaning
          </RippleButton>

          <RippleButton
            variant="outline"
            className="w-full py-6 text-lg flex items-center justify-center gap-2"
            data-cal-link="green-and-gleam/lawn-mow"
            data-cal-namespace="lawn-mow"
            data-cal-config='{"layout":"month_view"}'
          >
            <Scissors className="w-5 h-5" />
            Lawn Mowing
          </RippleButton>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            Back to top
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;