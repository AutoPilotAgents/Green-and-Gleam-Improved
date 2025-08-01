import { useEffect } from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Cal?: any;
  }
}

const loadCalEmbed = () => {
  if (window.Cal && window.Cal.loaded) return;

  (function (C, A, L) {
    let p = function (a: any, ar: any) {
      // queue calls until script loads
      // @ts-ignore
      a.q.push(ar);
    };
    let d = C.document as Document;
    // @ts-ignore
    C.Cal =
      C.Cal ||
      function () {
        // @ts-ignore
        let cal = C.Cal;
        // @ts-ignore
        let ar = arguments;
        // @ts-ignore
        if (!cal.loaded) {
          // @ts-ignore
          cal.ns = {};
          // @ts-ignore
          cal.q = cal.q || [];
          const s = d.createElement("script");
          s.src = A as string;
          d.head.appendChild(s);
          // @ts-ignore
          cal.loaded = true;
        }
        // @ts-ignore
        if (ar[0] === L) {
          const api: any = function () {
            // @ts-ignore
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            // @ts-ignore
            cal.ns[namespace] = cal.ns[namespace] || api;
            // @ts-ignore
            p(cal.ns[namespace], ar);
            // @ts-ignore
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          // @ts-ignore
          return;
        }
        // @ts-ignore
        p(cal, ar);
      };
  })(window as any, "https://app.cal.com/embed/embed.js", "init");

  // Initialize both namespaces
  window.Cal!("init", "gutter-cleaning", { origin: "https://app.cal.com" });
  window.Cal!("init", "lawn-mow", { origin: "https://app.cal.com" });

  // Set UI configs
  // @ts-ignore
  window.Cal!.ns["gutter-cleaning"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  // @ts-ignore
  window.Cal!.ns["lawn-mow"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
};

const Schedule = () => {
  useEffect(() => {
    loadCalEmbed();
  }, []);

    // Buttons use data attributes that the Cal element-click embed looks for.
  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose the service you need and pick a time that works best for you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <Button
            variant="cta"
            size="lg"
            className="w-full"
            data-cal-link="green-and-gleam/gutter-cleaning"
            data-cal-namespace="gutter-cleaning"
            data-cal-config='{"layout":"month_view"}'
          >
            Schedule Gutter Cleaning
          </Button>

          <Button
            variant="hero"
            size="lg"
            className="w-full"
            data-cal-link="green-and-gleam/lawn-mow"
            data-cal-namespace="lawn-mow"
            data-cal-config='{"layout":"month_view"}'
          >
            Schedule Lawn Mowing
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          You’ll be prompted to select a date and time on the next step.
        </p>
      </div>
    </section>
  );
};

export default Schedule;