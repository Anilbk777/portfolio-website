import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

/**
 * A glowing "Back to Top" button that appears after scrolling 400px.
 * Smoothly scrolls back to the top when clicked.
 */
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full text-white transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        background: "linear-gradient(135deg, #8245ec, #a855f7)",
        boxShadow: "0 0 15px rgba(130,69,236,0.6), 0 0 30px rgba(130,69,236,0.3)",
      }}
    >
      <FiArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
