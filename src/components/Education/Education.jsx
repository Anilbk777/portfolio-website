import React from "react";
import { education } from "../../constants";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const EducationCard = ({ edu, index }) => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col sm:flex-row items-center mb-16 ${
        isEven ? "sm:justify-start" : "sm:justify-end"
      }`}
    >
      {/* Timeline Circle */}
      <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-[0_0_15px_rgba(130,69,236,0.5)]">
        <img
          src={edu.img}
          alt={edu.school}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Content Card */}
      <div
        ref={ref}
        className={`glass-card w-full sm:max-w-md p-4 sm:p-8 rounded-2xl ${
          isEven ? "sm:ml-0" : "sm:mr-0"
        } sm:ml-44 sm:mr-44 ml-8 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : isEven
            ? "opacity-0 -translate-x-8"
            : "opacity-0 translate-x-8"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center space-x-6">
          {/* School Logo */}
          <div className="w-24 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
            <img
              src={edu.img}
              alt={edu.school}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Degree & School */}
          <div className="flex flex-col justify-between">
            <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
              {edu.degree}
            </h3>
            <h4 className="text-xs text-purple-400 mt-1 font-medium">
              {edu.school}
            </h4>
            <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
          </div>
        </div>

        <p
          className="mt-3 text-sm font-semibold inline-block px-3 py-1 rounded-full"
          style={{
            background: "rgba(130,69,236,0.15)",
            border: "1px solid rgba(130,69,236,0.3)",
            color: "#a855f7",
          }}
        >
          Grade: {edu.grade}
        </p>
        <p className="mt-3 text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
      </div>
    </div>
  );
};

const Education = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Gradient vertical line */}
        <div
          className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-[2px] h-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #8245ec 20%, #8245ec 80%, transparent)",
          }}
        />
        {education.map((edu, index) => (
          <EducationCard key={edu.id} edu={edu} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
