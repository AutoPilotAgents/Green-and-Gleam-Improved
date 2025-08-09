"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface RippleButtonProps extends ButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero" | "hero-secondary";
}

const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default", 
    children, 
    onClick,
    ...props 
  }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Create ripple effect
      const button = e.currentTarget;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
      circle.classList.add("ripple");
      
      const ripple = button.getElementsByClassName("ripple")[0];
      if (ripple) {
        ripple.remove();
      }
      
      button.appendChild(circle);
      
      // Call original onClick if provided
      onClick?.(e);
    };

    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Button
          variant={variant}
          size={size}
          className={cn("relative overflow-hidden", className)}
          onClick={handleClick}
          ref={ref}
          {...props}
        >
          {children}
          <style>{`
            .ripple {
              position: absolute;
              border-radius: 50%;
              background-color: rgba(255, 255, 255, 0.7);
              transform: scale(0);
              animation: ripple 0.6s linear;
            }
            
            @keyframes ripple {
              to {
                transform: scale(2);
                opacity: 0;
              }
            }
          `}</style>
        </Button>
      </motion.div>
    );
  }
);

RippleButton.displayName = "RippleButton";

export { RippleButton };