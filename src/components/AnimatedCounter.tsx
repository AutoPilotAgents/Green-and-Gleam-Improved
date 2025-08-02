import React, { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
  fixedValue?: string; // optional override to display a fixed value like "20+"
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 1500,
  suffix = "",
  className = "",
  fixedValue,
}) => {
  const [count, setCount] = useState(0);
  const start = useRef<number | null>(null);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (fixedValue) return; // skip animation if fixedValue is provided

    const step = (timestamp: number) => {
      if (!start.current) start.current = timestamp;
      const progress = timestamp - start.current;
      const progressRatio = Math.min(progress / duration, 1);
      const current = Math.floor(progressRatio * end);
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, fixedValue]);

  return (
    <span ref={ref} className={className}>
      {fixedValue ? fixedValue : `${count}${suffix}`}
    </span>
  );
};

export default AnimatedCounter;