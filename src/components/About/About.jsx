import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import PropTypes from "prop-types";
import { FiBriefcase, FiUsers, FiCheckCircle } from "react-icons/fi";
import profileImage from "../../assets/profile2.jpg";
import useScrollAnimation from "../../hooks/useScrollAnimation";

/* ── Animated stat counter ── */
const StatCounter = ({ target, suffix, label, Icon, delay }) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1400;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, target]);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl px-6 py-6 flex flex-col items-center text-center transition-all duration-700 ease-out hover:-translate-y-1.5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: "rgba(13,8,31,0.6)",
        border: "1px solid rgba(130,69,236,0.22)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow:
          "0 0 22px rgba(130,69,236,0.12), 0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 34px rgba(168,85,247,0.38), 0 14px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 22px rgba(130,69,236,0.12), 0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)";
      }}
    >
      {/* Gradient accent line */}
      <span
        className="absolute top-0 left-0 h-[2px] w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, transparent, #8245ec, #ec4899, transparent)",
        }}
      />
      {/* Soft corner glow */}
      <span
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.35), transparent 70%)",
        }}
      />

      <div
        className="flex items-center justify-center w-11 h-11 rounded-xl mb-4 text-white text-xl shadow-lg transition-transform duration-300 group-hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #8245ec, #a855f7, #ec4899)",
          boxShadow: "0 0 18px rgba(130,69,236,0.45)",
        }}
      >
        <Icon />
      </div>

      <span
        className="text-3xl md:text-4xl font-bold leading-none"
        style={{
          background: "linear-gradient(135deg, #8245ec, #a855f7, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {isVisible ? count : 0}
        {suffix}
      </span>
      <span className="text-gray-400 text-xs sm:text-sm mt-2 font-medium tracking-wide">
        {label}
      </span>
    </div>
  );
};

StatCounter.propTypes = {
  target: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  delay: PropTypes.number,
};

StatCounter.defaultProps = {
  suffix: "",
  delay: 0,
};

/* ── Floating tech badge ── */
const FloatingBadge = ({ label, emoji, style }) => (
  <div
    className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white pointer-events-none select-none"
    style={{
      background: "rgba(13,8,31,0.85)",
      border: "1px solid rgba(130,69,236,0.45)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 0 12px rgba(130,69,236,0.25)",
      animation: `floatBadge ${style.dur}s ease-in-out ${style.delay}s infinite alternate`,
      ...style,
    }}
  >
    <span>{emoji}</span>
    <span className="text-gray-200">{label}</span>
  </div>
);

/* ── Modern Profile Image Card ── */
const ProfileCard = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const badges = [
    { label: "Python", emoji: "🐍", style: { top: "-14px", left: "10%", dur: 3.2, delay: 0 } },
    { label: "React", emoji: "⚛️", style: { top: "15%", right: "-16px", dur: 2.8, delay: 0.4 } },
    { label: "FastAPI", emoji: "⚡", style: { bottom: "25%", right: "-20px", dur: 3.5, delay: 0.2 } },
    { label: "AI/ML", emoji: "🤖", style: { bottom: "-14px", left: "15%", dur: 3.0, delay: 0.6 } },
    { label: "LangChain", emoji: "🔗", style: { top: "40%", left: "-22px", dur: 2.6, delay: 0.3 } },
  ];

  return (
    <>
      {/* Inject float keyframe once */}
      <style>{`
        @keyframes floatBadge {
          from { transform: translateY(0px); }
          to   { transform: translateY(-8px); }
        }
        @keyframes spinBorder {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes profileGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(130,69,236,0.4), 0 0 60px rgba(130,69,236,0.15); }
          50%       { box-shadow: 0 0 50px rgba(168,85,247,0.5), 0 0 80px rgba(236,72,153,0.2); }
        }
      `}</style>

      <div
        ref={ref}
        className={`relative flex justify-center md:justify-end transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
      >
        {/* Outer wrapper — provides space for badges */}
        <div className="relative mt-8 md:mt-0" style={{ width: "300px", height: "360px" }}>

          {/* Spinning gradient border ring */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              padding: "3px",
              background: "linear-gradient(135deg, #8245ec, #a855f7, #ec4899, #8245ec)",
              backgroundSize: "300% 300%",
              animation: "gradientShift 4s ease infinite",
              borderRadius: "1.5rem",
            }}
          >
            {/* Inner image wrapper */}
            <div
              className="w-full h-full rounded-[calc(1.5rem-3px)] overflow-hidden relative"
              style={{
                animation: "profileGlow 3s ease-in-out infinite",
              }}
            >
              <img
                src={profileImage}
                alt="Anil BK — AI/ML Engineer and Software Developer"
                className="w-full h-full object-cover object-top"
                style={{ filter: "brightness(1.05) saturate(1.1)" }}
              />
              {/* Subtle inner gradient overlay at bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,4,20,0.6) 0%, transparent 40%)",
                }}
              />
              {/* Name badge at bottom of image */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-white text-sm font-semibold whitespace-nowrap"
                style={{
                  background: "rgba(5,4,20,0.7)",
                  border: "1px solid rgba(130,69,236,0.5)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* ✨ Anil BK */}
              </div>
            </div>
          </div>

          {/* Decorative dot-grid behind the card */}
          <div
            className="absolute -z-10 rounded-3xl"
            style={{
              top: "16px",
              left: "16px",
              right: "-16px",
              bottom: "-16px",
              backgroundImage:
                "radial-gradient(circle, rgba(130,69,236,0.3) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* Floating tech badges */}
          {/* {badges.map((b) => (
            <FloatingBadge key={b.label} {...b} />
          ))} */}
        </div>
      </div>
    </>
  );
};

/* ── Main About Section ── */
const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);

  const stats = [
    { target: 1, suffix: "+", label: "Year Experience", Icon: FiBriefcase, delay: 0 },
    { target: 2, suffix: "+", label: "Happy Clients", Icon: FiUsers, delay: 150 },
    { target: 3, suffix: "+", label: "Projects Completed", Icon: FiCheckCircle, delay: 300 },
  ];

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        {/* ── Left: Text Content ── */}
        <div
          ref={heroRef}
          className={`md:w-1/2 text-center md:text-left transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight gradient-text-animate">
            Anil BK
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["Fullstack Developer", "AI/ML Engineer", "Software Engineer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
              displayTextRenderer={(text) => (
                <span className="text-[#8245ec]">{text}</span>
              )}
            />
          </h3>
          <p className="text-base sm:text-lg text-gray-400 mb-8 mt-6 leading-relaxed">
            I am a Software Engineer & AI Engineer who designs and builds reliable, scalable systems with a strong focus on clean architecture. My core expertise is in Python,
            JavaScript, FastAPI, Node.js, and Express.js, where I create secure REST
            APIs, well-structured databases, and permission-based access systems. I
            think carefully about system design and software architecture so that
            what I build stays maintainable as it grows. I also bring AI into my
            backends with LangChain and RAG, turning LLMs into practical, dependable
            features. I enjoy solving complex problems and writing code that is simple
            to understand and built to last.
          </p>
          <a
            href="https://drive.google.com/file/d/1NQrPHqm7pekHJQglzwyxXFBLcmG5vJwH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 20px #8245ec, 0 0 40px rgba(130,69,236,0.3)",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* ── Right: Modern Profile Card ── */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <ProfileCard />
        </div>
      </div>

      {/* ── Animated Stat Counters ── */}
      <div className="max-w-4xl mx-auto mt-16 md:mt-20">
        <div
          className="h-px w-full mb-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(130,69,236,0.5), rgba(236,72,153,0.4), transparent)",
          }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
