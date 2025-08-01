"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-sm">
            <h3 className="text-xl font-semibold mb-2">Green & Gleam</h3>
            <p className="text-muted-foreground">
              Eco-friendly cleaning services that make your home shine—inside and out.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium mb-3">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#terms" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Home Cleaning</li>
                <li>Office Cleaning</li>
                <li>Deep Cleaning</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Connect</h4>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Green & Gleam. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;