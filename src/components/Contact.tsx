import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RippleButton from "@/components/RippleButton";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const contentAnimation = useScrollAnimation({ threshold: 0.15 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("(651) 555-CLEAN");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-16 ${scrollAnimations.fadeInUp} ${
            headerAnimation.isVisible ? scrollAnimations.fadeInUpActive : scrollAnimations.fadeInUpInitial
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We’re here to help with scheduling, questions, and custom quotes.
          </p>
        </div>

        <div
          ref={contentAnimation.ref}
          className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto ${scrollAnimations.slideInUp} ${
            contentAnimation.isVisible ? scrollAnimations.slideInUpActive : scrollAnimations.slideInUpInitial
          }`}
        >
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
                <Textarea
                  placeholder="Your message"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={5}
                />
                <RippleButton asChild variant="cta" className="w-full">
                  <button type="submit">Send Message</button>
                </RippleButton>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Call us directly
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-primary mb-2">(651) 555-CLEAN</p>
              <p className="text-muted-foreground">Speak with our experts</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={handleCopyPhone}>
                Copy Number
              </RippleButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;