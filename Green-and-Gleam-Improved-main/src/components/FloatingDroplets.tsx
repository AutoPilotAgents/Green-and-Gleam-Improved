import { useEffect, useState } from 'react';

interface Droplet {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingDroplets = () => {
  const [droplets, setDroplets] = useState<Droplet[]>([]);

  useEffect(() => {
    const generateDroplets = () => {
      const newDroplets: Droplet[] = [];
      for (let i = 0; i < 15; i++) {
        newDroplets.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 5,
        });
      }
      setDroplets(newDroplets);
    };

    generateDroplets();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {droplets.map((droplet) => (
        <div
          key={droplet.id}
          className="absolute rounded-full bg-gradient-to-br from-primary-lime/20 to-primary-emerald/30 animate-float"
          style={{
            left: `${droplet.x}%`,
            top: `${droplet.y}%`,
            width: `${droplet.size}px`,
            height: `${droplet.size}px`,
            animationDuration: `${droplet.duration}s`,
            animationDelay: `${droplet.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDroplets;