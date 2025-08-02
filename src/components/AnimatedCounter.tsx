import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  from?: number;
  to?: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

const AnimatedCounter = ({
  from = 0,
  to = 100,
  duration = 2000,
  suffix = "",
  className = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let start: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(from + (to - from) * progress);
      setCount(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      20+
    </span>
  );
};

export default AnimatedCounter;