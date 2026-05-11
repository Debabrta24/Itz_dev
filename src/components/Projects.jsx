import React from "react";
import projects from "../data/projects.json";

import {
  Globe,
  Smartphone,
  Cpu,
  Palette,
  ExternalLink,
} from "lucide-react";

const categoryIcons = {
  website: <Globe size={18} />,
  app: <Smartphone size={18} />,
  iot: <Cpu size={18} />,
  uiux: <Palette size={18} />,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-20 sm:py-28
        px-4 sm:px-6 lg:px-8
        bg-white dark:bg-[#0a0a0a]
        transition-colors duration-500
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-400/20 dark:bg-orange-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-300/20 dark:bg-amber-500/10 blur-[100px] rounded-full"></div>

        <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-yellow-300/20 dark:bg-yellow-500/10 blur-[100px] rounded-full"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.08)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-500 font-semibold tracking-[0.3em] uppercase">
            My Projects
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Featured Works & Creations
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm sm:text-base leading-7">
            I create innovative projects ranging from web development and
            mobile apps to IoT systems and UI/UX experiences with modern,
            responsive, and high-performance solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-14">
          {["ALL", "Website", "IoT", "UI/UX"].map((item, index) => (
            <button
              key={index}
              className={`
                px-5 py-2.5 rounded-2xl text-sm font-medium
                border transition-all duration-300
                backdrop-blur-md
                ${
                  index === 0
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                    : "border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-black/10 dark:border-white/10
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
                p-6
                transition-all duration-500
                hover:-translate-y-3
                hover:border-orange-500/40
                hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-400/10 via-amber-400/5 to-transparent"></div>

              {/* Blur Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl group-hover:scale-150 transition duration-700"></div>

              {/* Category */}
              <div className="relative z-10 flex items-center gap-2 text-orange-500 mb-4">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  {categoryIcons[project.type]}
                </div>

                <span className="text-sm uppercase tracking-wider font-medium">
                  {project.type}
                </span>
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-2xl mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-2xl group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-6 mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  {/* Github */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      px-4 py-2 rounded-xl
                      border border-black/10 dark:border-white/10
                      bg-white/60 dark:bg-white/5
                      text-gray-800 dark:text-white
                      hover:bg-orange-500 hover:text-white hover:border-orange-500
                      transition-all duration-300
                    "
                  >
                    🔗 Github
                  </a>

                  {/* Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      px-4 py-2 rounded-xl
                      bg-gradient-to-r from-orange-500 to-amber-500
                      text-white
                      hover:scale-105
                      transition-all duration-300
                    "
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;