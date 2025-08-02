import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";
import RippleButton from "@/components/RippleButton";

const Contact = () => {
  const formAnimation = useScrollAnimation({ threshold: 0.2 });
  const infoAnimation = useScrollAnimation({ threshold: 0.2 });

  const scrollToTop = () => {
    const header = document.getElementById("header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div
            ref={formAnimation.ref}
            className={`${scrollAnimations.fadeInLeft} ${
              formAnimation.isVisible ? scrollAnimations.fadeInLeftActive : scrollAnimations.fadeInLeftInitial
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our services or ready to schedule? Send us a message and we'll get back to you promptly.
            </p>

            <form className="bg-white rounded-2xl shadow-card p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Email Address" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" className="min-h-[150px]" />
              <RippleButton className="w-full">
                Send Message
              </RippleButton>
            </form>
          </div>

          <div
            ref={infoAnimation.ref}
            className={`${scrollAnimations.fadeInRight} ${
              infoAnimation.isVisible ? scrollAnimations.fadeInRightActive : scrollAnimations.fadeInRightInitial
            }`}
          >
            <div className="bg-white rounded-2xl shadow-card p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">hello@greenandgleam.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">(651) 555-1234</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Service Area</p>
                  <Card className="mt-2">
                    <CardContent className="text-center">
                      <p className="text-lg font-semibold text-primary mb-2">Twin Cities Metro Area, MN</p>
                      <p className="text-muted-foreground">And surrounding areas</p>
                      <RippleButton variant="outline" className="mt-4 w-full" onClick={scrollToTop}>
                        Back to Top
                      </RippleButton>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;