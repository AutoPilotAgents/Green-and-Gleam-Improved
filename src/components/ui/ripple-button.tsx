import React, { ButtonHTMLAttributes, useRef } from "react";
import { cn } from "@/lib/utils";

type RippleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | "cta";
  size?: "default" | "sm" | "lg" | "icon";
};

const RippleButton: React.FC<RippleButtonProps> = ({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const variants: Record<NonNullable<RippleButtonProps["variant"]>, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    cta: "bg-primary-forest text-white hover:bg-primary-forest/90",
  };

  const sizes: Record<NonNullable<RippleButtonProps["size"]>, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const button = btnRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.position = "absolute";
    ripple.style.borderRadius = "9999px";
    ripple.style.pointerEvents = "none";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.background = "rgba(255,255,255,0.35)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple-anim 600ms ease-out";
    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    if (props.onClick) props.onClick(e);
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
      {/* Ripple keyframes via inline style to avoid separate CSS */}
      <style>
        {`@keyframes ripple-anim {
            to { transform: scale(2.5); opacity: 0; }
          }`}
      </style>
    </button>
  );
};

export default RippleButton;