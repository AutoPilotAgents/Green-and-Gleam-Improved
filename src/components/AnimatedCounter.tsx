import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  from?: number;
  to?: number;
  duration?: number;
  className?: string;
  suffix?: string;
};

const AnimatedCounter = ({
  from = 0,
  to = 100,
  duration = 1500,
  className,
  suffix = "",
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!ref.current) return;
    let start: number | null = null;
    const startValue = from;
    const endValue = to;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(startValue + (endValue - startValue) * progress);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {20}{suffix}
    </span>
  );
};

export default AnimatedCounter;