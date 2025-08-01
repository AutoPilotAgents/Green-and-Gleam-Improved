import { useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import RippleButton from "@/components/RippleButton";
import { showSuccess } from "../utils/toast";

const EMAIL_ADDRESS = "info@greenandgleam.com";

const Contact = () => {
  const handleEmailClick = useCallback(async () => {
    await navigator.clipboard.writeText(EMAIL_ADDRESS);
    showSuccess("Email address copied to clipboard");
  }, []);

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-muted-foreground">Get a written estimate</p>
            <RippleButton
              variant="outline"
              className="mt-4 w-full"
              onClick={handleEmailClick}
            >
              Send Email
            </RippleButton>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;