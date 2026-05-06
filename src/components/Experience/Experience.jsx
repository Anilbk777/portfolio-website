import React from "react";
import { experiences } from "../../constants";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const ExperienceCard = ({ experience, index }) => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col sm:flex-row items-center mb-16 ${
        isEven ? "sm:justify-end" : "sm:justify-start"
      }`}
    >
      {/* Timeline Circle */}
      <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-[0_0_15px_rgba(130,69,236,0.5)]">
        <img
          src={experience.img}
          alt={experience.company}
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
            ? "opacity-0 translate-x-8"
            : "opacity-0 -translate-x-8"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center space-x-6">
          {/* Company Logo */}
          <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
            <img
              src={experience.img}
              alt={experience.company}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Role & Date */}
          <div className="flex flex-col justify-between">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              {experience.role}
            </h3>
            <h4 className="text-sm text-purple-400 font-medium mt-1">
              {experience.company}
            </h4>
            <p className="text-xs text-gray-500 mt-1">{experience.date}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
          {experience.desc}
        </p>

        <div className="mt-4">
          <h5 className="font-semibold text-white text-sm mb-2">Skills:</h5>
          <ul className="flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <li
                key={i}
                className="text-xs text-purple-300 px-3 py-1 rounded-full font-medium"
                style={{
                  background: "rgba(130,69,236,0.18)",
                  border: "1px solid rgba(130,69,236,0.35)",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-[2px] h-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #8245ec 20%, #8245ec 80%, transparent)",
          }}
        />
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
