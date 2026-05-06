import React, { useState, useEffect } from "react";

/**
 * A slim progress bar fixed at the very top of the page.
 * Fills from left → right as the user scrolls down the page.
 */
const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] transition-all duration-100"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #8245ec, #a855f7, #ec4899)",
        boxShadow: "0 0 8px #8245ec, 0 0 16px #a855f7",
      }}
    />
  );
};

export default ScrollProgressBar;
