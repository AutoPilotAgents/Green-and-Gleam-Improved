import { useMemo } from "react";

type Leaf = {
  id: number;
  left: number; // percent
  size: number; // px
  delay: number; // seconds
  duration: number; // seconds
  opacity: number; // 0..1
  rotateDir: 1 | -1;
};

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const LeafBackground = ({ count = 12 }: { count?: number }) => {
  const leaves = useMemo<Leaf[]>(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: random(2, 98),
        size: random(12, 28),
        delay: random(0, 6),
        duration: random(10, 22),
        opacity: random(0.3, 0.7),
        rotateDir: Math.random() > 0.5 ? 1 : -1,
      })),
    [count]
  );

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute -top-10"
          style={{
            left: `${leaf.left}%`,
            animation: `leaf-fall ${leaf.duration}s linear ${leaf.delay}s infinite`,
          }}
        >
          <div
            className="rounded-tl-full rounded-br-full"
            style={{
              width: `${leaf.size}px`,
              height: `${leaf.size * 0.6}px`,
              background:
                "linear-gradient(135deg, hsl(var(--primary-lime) / 0.85), hsl(var(--primary-emerald) / 0.85))",
              opacity: leaf.opacity,
              boxShadow: "0 4px 12px hsl(var(--primary-forest) / 0.15)",
              transform: `rotate(${leaf.rotateDir * 15}deg)`,
              animation: `leaf-spin ${leaf.duration * 0.8}s ease-in-out ${leaf.delay}s infinite alternate`,
            }}
          />
        </div>
      ))}

      <style>
        {`
        @keyframes leaf-fall {
          0% { transform: translateY(-10%) translateX(0); }
          25% { transform: translateY(25%) translateX(-12px); }
          50% { transform: translateY(55%) translateX(8px); }
          75% { transform: translateY(85%) translateX(-16px); }
          100% { transform: translateY(115%) translateX(0); }
        }
        @keyframes leaf-spin {
          0% { transform: rotate(0deg) translateX(0); }
          100% { transform: rotate(180deg) translateX(6px); }
        }
      `}
      </style>
    </div>
  );
};

export default LeafBackground;