"use client";

import React from "react";
import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Green & Gleam. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {/* Other buttons/links remain unchanged above */}
          {/* Removed the outlined icon Button with Twitter icon as requested */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;