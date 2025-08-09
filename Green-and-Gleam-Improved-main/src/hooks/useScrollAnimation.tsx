import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Animation variants for different effects
export const scrollAnimations = {
  fadeInUp: 'transform transition-all duration-700 ease-out',
  fadeInUpActive: 'transform translate-y-0 opacity-100',
  fadeInUpInitial: 'transform translate-y-8 opacity-0',
  
  fadeInLeft: 'transform transition-all duration-700 ease-out',
  fadeInLeftActive: 'transform translate-x-0 opacity-100',
  fadeInLeftInitial: 'transform -translate-x-8 opacity-0',
  
  fadeInRight: 'transform transition-all duration-700 ease-out',
  fadeInRightActive: 'transform translate-x-0 opacity-100',
  fadeInRightInitial: 'transform translate-x-8 opacity-0',
  
  scaleIn: 'transform transition-all duration-500 ease-out',
  scaleInActive: 'transform scale-100 opacity-100',
  scaleInInitial: 'transform scale-95 opacity-0',
  
  slideInUp: 'transform transition-all duration-600 ease-out',
  slideInUpActive: 'transform translate-y-0 opacity-100',
  slideInUpInitial: 'transform translate-y-12 opacity-0',
};