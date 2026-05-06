import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const SkillCard = ({ category, index }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`glass-card px-6 sm:px-10 py-8 sm:py-6 mb-6 w-full sm:w-[48%] rounded-2xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-5 text-center">
        {category.title}
      </h3>

      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.03}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-center space-x-2 rounded-3xl py-2 px-3 text-center transition-all duration-200 hover:border-purple-500 hover:bg-purple-900/10 cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
              />
              <span className="text-xs sm:text-sm text-gray-300 font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div
        ref={titleRef}
        className={`text-center mb-10 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skill Category Cards */}
      <div className="flex flex-wrap gap-4 lg:gap-6 py-4 justify-between">
        {SkillsInfo.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
