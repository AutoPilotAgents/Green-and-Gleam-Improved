import { Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RippleButton from "@/components/RippleButton";

const Contact = () => {
  const phoneNumber = "‪(612) 460-8805‬";
  const email = "info@greengleam.com";

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-card border border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-foreground">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl font-semibold text-primary mb-2">You're all caught up<br />Call as ‪(612) 460-8805‬</p>
              <p className="text-muted-foreground">Speak with our experts</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={handleCopyPhone}>
                Copy Number
              </RippleButton>
            </CardContent>
          </Card>

          <Card className="shadow-card border border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-foreground">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl font-semibold text-primary mb-2">{email}</p>
              <p className="text-muted-foreground">We respond within 24 hours</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={handleCopyEmail}>
                Copy Email
              </RippleButton>
            </CardContent>
          </Card>

          <Card className="shadow-card border border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-foreground">Hours</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl font-semibold text-primary mb-2">Mon–Fri</p>
              <p className="text-muted-foreground">8:00 AM – 5:00 PM</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;