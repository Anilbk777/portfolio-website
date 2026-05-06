import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that uses Intersection Observer to detect when
 * an element enters the viewport — used for scroll-triggered animations.
 *
 * @param {number} threshold - How much of the element must be visible (0–1)
 * @param {string} rootMargin - Margin around root (e.g. "0px 0px -80px 0px")
 * @returns {{ ref, isVisible }}
 */
const useScrollAnimation = (threshold = 0.15, rootMargin = "0px 0px -60px 0px") => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to keep the animated state
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

export default useScrollAnimation;
