import { useEffect, useState } from "react";

// Custom hook to handle animations with a delay
export function useDelayedAnimation(delay: number = 0) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return shouldAnimate;
}

// Custom hook to handle animations on scroll
export function useScrollAnimation(options = {}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, hasAnimated] as const;
} 