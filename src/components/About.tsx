import { useMemo } from "react";
import { Leaf, ShieldCheck, ThumbsUp, Users } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const About = () => {
  const stats = useMemo(
    () => [
      { icon: Users, label: "Happy Clients", number: 20, suffix: "+" },
      { icon: ThumbsUp, label: "Jobs Completed", number: 120, suffix: "+" },
      { icon: ShieldCheck, label: "Years Experience", number: 5, suffix: "+" },
      { icon: Leaf, label: "Eco-Friendly Solutions", number: 100, suffix: "%" },
    ],
    []
  );

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Green & Gleam</h2>
            <p className="text-muted-foreground mb-6">
              We’re a locally-owned business committed to keeping your gutters clean and your home protected.
              Our team uses eco-friendly methods and meticulous care on every job.
            </p>
            <p className="text-muted-foreground">
              From residential homes to commercial properties, we deliver reliable service, transparent pricing,
              and a satisfaction-first approach.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="p-6 border border-border rounded-lg bg-card/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter 
                      to={stat.number}
                      suffix={stat.suffix}
                      className=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;