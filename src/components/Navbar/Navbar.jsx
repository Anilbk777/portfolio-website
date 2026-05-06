import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  // Detect scroll → change navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer → auto-highlight active nav item on scroll
  useEffect(() => {
    const sectionIds = menuItems.map((item) => item.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );

      observer.observe(el);
      observers.push({ observer, el });
    });

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, []);

  // Smooth scroll on nav click
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer select-none">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Anil</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">BK</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group cursor-pointer">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition-colors duration-200 hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                {item.label}
              </button>
              {/* Animated underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
                style={{
                  background: "linear-gradient(90deg, #8245ec, #a855f7)",
                }}
              />
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Anilbk777"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-[#8245ec] transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anil-bk-bbb073295/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-[#8245ec] transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu — animated slide down */}
      {isOpen && (
        <div
          className="mobile-menu-enter absolute top-16 left-1/2 w-4/5 bg-[#050414] bg-opacity-90 backdrop-blur-lg z-50 rounded-xl shadow-lg md:hidden"
          style={{
            border: "1px solid rgba(130,69,236,0.3)",
            boxShadow: "0 0 20px rgba(130,69,236,0.15)",
          }}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer text-base font-medium transition-colors duration-200 hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            {/* Social icons in mobile menu */}
            <div className="flex space-x-5 pt-2 border-t border-gray-700 w-full justify-center">
              <a
                href="https://github.com/Anilbk777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-[#8245ec] transition-colors"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/anil-bk-bbb073295/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-[#8245ec] transition-colors"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
