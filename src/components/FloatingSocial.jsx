import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

/**
 * Fixed left-side social links sidebar — a classic modern dev portfolio element.
 * Hidden on small screens (shows on lg+).
 */
const FloatingSocial = () => {
  const socials = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Anilbk777",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/anil-bk-bbb073295/",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/_anil_ghatane/",
      label: "Instagram",
    },
  ];

  return (
    <div className="hidden lg:flex fixed left-6 bottom-0 z-50 flex-col items-center gap-5">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-gray-400 hover:text-[#8245ec] transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(130,69,236,0.8)]"
        >
          {s.icon}
        </a>
      ))}
      {/* Vertical line */}
      <div
        className="w-[1px] h-24 mt-2"
        style={{
          background:
            "linear-gradient(to bottom, rgba(130,69,236,0.8), transparent)",
        }}
      />
    </div>
  );
};

export default FloatingSocial;
