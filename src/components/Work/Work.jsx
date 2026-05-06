import React, { useState } from "react";
import { projects } from "../../constants";
import useScrollAnimation from "../../hooks/useScrollAnimation";

// All unique tags across all projects
const ALL_TAGS = ["All", "Python", "React.js", "FastAPI", "LangChain", "Scikit-learn", "Streamlit", "HTML"];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((tag) =>
            tag.toLowerCase().includes(activeFilter.toLowerCase())
          )
        );

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div
        ref={titleRef}
        className={`text-center mb-10 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Filter Buttons */}
      <div
        className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-150 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
              activeFilter === tag
                ? "text-white border-transparent"
                : "text-gray-400 border-gray-700 hover:border-purple-500 hover:text-purple-400"
            }`}
            style={
              activeFilter === tag
                ? {
                    background: "linear-gradient(135deg, #8245ec, #a855f7)",
                    boxShadow: "0 0 12px rgba(130,69,236,0.4)",
                  }
                : {}
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="glass-card rounded-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-400 transition-colors leading-none"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 lg:px-6 lg:py-2 px-2 py-2 rounded-xl lg:text-lg text-sm font-semibold text-center transition-colors duration-200"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-white lg:px-6 lg:py-2 px-2 py-2 rounded-xl lg:text-lg text-sm font-semibold text-center transition-all duration-200 hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #8245ec, #a855f7)",
                    }}
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Individual project card with its own scroll animation
const ProjectCard = ({ project, index, onClick }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="p-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
      <div className="p-6 pt-2">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-500 mb-4 text-sm line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
