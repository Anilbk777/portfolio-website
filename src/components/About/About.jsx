import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import profileImage from "../../assets/profile2.jpg";
import useScrollAnimation from "../../hooks/useScrollAnimation";

/* ── Animated stat counter ── */
const StatCounter = ({ target, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const stepTime = Math.max(Math.floor(1200 / target), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center px-6 py-4 rounded-2xl transition-all duration-700 ${
        isVisible ? "stat-animate opacity-100" : "opacity-0"
      }`}
      style={{
        background: "rgba(130,69,236,0.08)",
        border: "1px solid rgba(130,69,236,0.2)",
        animationDelay: delay,
      }}
    >
      <span
        className="text-3xl md:text-4xl font-bold"
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
      <span className="text-gray-400 text-sm mt-1 text-center font-medium">
        {label}
      </span>
    </div>
  );
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
    { label: "Python",    emoji: "🐍", style: { top: "-14px",  left: "10%",   dur: 3.2, delay: 0   } },
    { label: "React",     emoji: "⚛️",  style: { top: "15%",   right: "-16px", dur: 2.8, delay: 0.4 } },
    { label: "FastAPI",   emoji: "⚡",  style: { bottom: "25%", right: "-20px", dur: 3.5, delay: 0.2 } },
    { label: "AI/ML",     emoji: "🤖",  style: { bottom: "-14px", left: "15%", dur: 3.0, delay: 0.6 } },
    { label: "LangChain", emoji: "🔗",  style: { top: "40%",   left: "-22px",  dur: 2.6, delay: 0.3 } },
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
        className={`relative flex justify-center md:justify-end transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
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
    { target: 1,  suffix: "+", label: "Year Experience", delay: "0s"    },
    { target: 4,  suffix: "+", label: "Projects Built",  delay: "0.15s" },
    { target: 10, suffix: "+", label: "Technologies",    delay: "0.3s"  },
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
          className={`md:w-1/2 text-center md:text-left transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
            I am an AI/ML Engineer and Software Engineering graduate with
            hands-on experience building LLM-powered applications, RAG
            pipelines, and full-stack backends. Skilled in Python, FastAPI, and
            LangChain, I specialize in integrating cutting-edge AI APIs and
            deploying production-ready systems that solve real-world problems.
          </p>
          <a
            href="https://drive.google.com/file/d/1K-oL6RjEHB-94BdObka4PwHX8RVxKdFC/view?usp=sharing"
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
      {/* <div className="grid grid-cols-3 gap-4 mt-16 md:mt-20">
        {stats.map((s) => (
          <StatCounter key={s.label} {...s} />
        ))}
      </div> */}
    </section>
  );
};

export default About;
