import React, { useEffect, useRef } from "react";

/**
 * A soft radial glow that follows the user's cursor.
 * Gives the page a dynamic, interactive feel.
 * Hidden on touch devices.
 */
const CursorSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Don't run on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = spotlightRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed z-[9998] opacity-0 transition-opacity duration-300"
      style={{
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(130,69,236,0.07) 0%, rgba(130,69,236,0.03) 40%, transparent 70%)",
        filter: "blur(2px)",
      }}
    />
  );
};

export default CursorSpotlight;
