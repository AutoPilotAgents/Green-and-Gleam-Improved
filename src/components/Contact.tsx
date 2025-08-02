"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const phoneNumber = "(612) 460-8805";
  const email = "hello@greenandgleam.com";
  const address = "123 Greenway Ave, Minneapolis, MN";

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleMap = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Call Us</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl font-semibold text-primary mb-2">(612) 460-8805</p>
            <p className="text-muted-foreground">Speak with our experts</p>
            <Button variant="outline" className="mt-4 w-full" onClick={handleCopyPhone}>
              Copy Number
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Email Us</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl font-semibold text-primary mb-2">{email}</p>
            <p className="text-muted-foreground">We usually reply within a few hours</p>
            <Button variant="outline" className="mt-4 w-full" onClick={handleEmail}>
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Visit Us</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl font-semibold text-primary mb-2">{address}</p>
            <p className="text-muted-foreground">Find us on the map</p>
            <Button variant="outline" className="mt-4 w-full" onClick={handleMap}>
              Open in Maps
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;