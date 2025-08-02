import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RippleButton from "@/components/RippleButton";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const goToSchedule = () => {
    navigate("/schedule");
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>(612) 460-8805‬</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@greenandgleam.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Twin Cities Metro Area, MN</p>
                  <p className="text-muted-foreground">And surrounding areas</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground">And surrounding areas</p>
              <RippleButton variant="outline" className="mt-4 w-full" onClick={goToSchedule}>
                Back to Top
              </RippleButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;