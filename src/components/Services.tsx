import React from "react";
import { CheckCircle2, Droplets, Leaf, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const gridAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="services" className="relative py-20 bg-background overflow-hidden">
      {/* Subtle background effect */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90rem] h-[90rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(34,197,94,0.12), rgba(16,185,129,0.08), rgba(21,128,61,0.04), transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div
          ref={headerAnimation.ref}
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reliable, eco-friendly exterior maintenance tailored to your property.
          </p>
        </div>

        <div
          ref={gridAnimation.ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
            gridAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-primary" />
                Gutter Cleaning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Remove debris, flush downspouts, and ensure proper water flow to protect your home.
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary" />
                Lawn Mowing
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Consistent, clean cuts with careful edging and cleanup every visit.
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Custom Jobs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Need something specific? We’ll tailor a solution to your exterior needs.
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="default" size="lg" className="px-6">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;