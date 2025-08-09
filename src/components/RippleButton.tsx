"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

const rippleVariants = cva("", {
  variants: {
    variant: {
      default: "bg-primary/20",
      destructive: "bg-destructive/20",
      outline: "bg-primary/20",
      secondary: "bg-secondary/20",
      ghost: "bg-primary/20",
      link: "bg-primary/20",
      hero: "bg-primary-forest/20",
      cta: "bg-accent-mint/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface RippleButtonProps extends ButtonProps {
  showRipple?: boolean;
}

const RippleButton = forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default", 
    showRipple = true,
    children, 
    ...props 
  }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          showRipple && "relative overflow-hidden transition-all duration-300 hover:scale-105",
          className
        )}
        {...props}
      >
        {showRipple && (
          <span className={cn(
            "absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100 group-active:animate-ripple",
            rippleVariants({ variant })
          )} />
        )}
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);

RippleButton.displayName = "RippleButton";

export default RippleButton;