import React, { useEffect, useMemo, useState } from "react";

import projects from "../data/projects.json";

import {
  Globe,
  Smartphone,
  Cpu,
  Palette,
  Bot,
  ExternalLink,
  Play,
} from "lucide-react";

const categoryIcons = {
  website: <Globe size={18} />,
  app: <Smartphone size={18} />,
  iot: <Cpu size={18} />,
  uiux: <Palette size={18} />,
  genai: <Bot size={18} />,
};

const filters = [
  "ALL",
  "website",
  "app",
  "iot",
  "uiux",
  "genai",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] =
    useState("ALL");

  const [visibleCount, setVisibleCount] =
    useState(100);

  const [isExpanded, setIsExpanded] =
    useState(false);

  /* RESPONSIVE INITIAL COUNT */

  useEffect(() => {
    const handleResize = () => {
      if (!isExpanded) {
        if (window.innerWidth < 640) {
          // PHONE
          setVisibleCount(2);
        } else if (window.innerWidth < 1280) {
          // TABLET
          setVisibleCount(4);
        } else {
          // DESKTOP
          setVisibleCount(projects.length);
        }
      }
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, [isExpanded]);

  /* FILTERED PROJECTS */

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.type.toLowerCase() ===
        activeFilter.toLowerCase()
    );
  }, [activeFilter]);

  /* RESET FILTER */

  useEffect(() => {
    setIsExpanded(false);

    if (window.innerWidth < 640) {
      setVisibleCount(2);
    } else if (window.innerWidth < 1280) {
      setVisibleCount(4);
    } else {
      setVisibleCount(projects.length);
    }
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-28
        px-4
        sm:px-6
        lg:px-8
        bg-white
        dark:bg-[#0a0a0a]
        transition-colors
        duration-500
      "
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-125 w-125 bg-orange-400/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-87.5 h-87.5 bg-amber-300/10 blur-[100px] rounded-full"></div>

        <div className="absolute top-40 right-0 w-75 h-[300px] bg-yellow-300/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-[1700px] mx-auto">
        {/* HEADING */}

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-500 font-semibold tracking-[0.3em] uppercase mb-4">
            My Projects
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Featured Works & Creations
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm sm:text-base leading-7">
            Modern websites, AI tools, IoT systems,
            mobile apps and UI/UX experiences.
          </p>
        </div>

        {/* FILTERS */}

        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-14">
          {filters.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(item)}
              className={`
                px-4
                sm:px-5
                py-2
                rounded-2xl
                text-xs
                sm:text-sm
                font-medium
                border
                transition-all
                duration-300
                active:scale-95
                ${
                  activeFilter === item
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-black/10 dark:border-white/10 bg-[#f8f8f8] dark:bg-[#111111] text-gray-700 dark:text-gray-300"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            2xl:grid-cols-4
            gap-6
          "
        >
          {filteredProjects
            .slice(0, visibleCount)
            .map((project, index) => (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-black/10
                  dark:border-white/10
                  bg-[#f8f8f8]
                  dark:bg-[#111111]
                  shadow-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]
                  flex
                  flex-col
                "
              >
                {/* VIDEO / IMAGE */}

                <div className="relative">
                  {project.video ? (
                    <iframe
                      src={`${project.video}?autoplay=1&mute=1&loop=1`}
                      title={project.title}
                      allow="autoplay"
                      className="
                        w-full
                        h-[220px]
                        border-0
                      "
                    ></iframe>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-[220px]
                        object-cover
                      "
                    />
                  )}

                  {/* CATEGORY */}

                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      flex
                      items-center
                      gap-2
                      bg-black/60
                      backdrop-blur-lg
                      text-white
                      px-3
                      py-1.5
                      rounded-full
                      text-xs
                    "
                  >
                    {categoryIcons[project.type]}

                    <span className="uppercase">
                      {project.type}
                    </span>
                  </div>

                  {/* PLAY ICON */}

                  {project.video && (
                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        w-12
                        h-12
                        rounded-full
                        bg-orange-500
                        flex
                        items-center
                        justify-center
                        text-white
                      "
                    >
                      <Play size={18} />
                    </div>
                  )}
                </div>

                {/* CONTENT */}

                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-7 flex-1">
                    {project.description}
                  </p>

                  {/* BUTTONS */}

                  <div className="flex gap-3 mt-6">
                    {/* GITHUB */}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        py-3
                        rounded-2xl
                        border
                        border-black/10
                        dark:border-white/10
                        bg-white
                        dark:bg-[#1a1a1a]
                        text-gray-800
                        dark:text-white
                        hover:bg-orange-500
                        hover:text-white
                        transition-all
                        duration-300
                        text-sm
                        font-medium
                      "
                    >
                      🔗 Github
                    </a>

                    {/* DEMO */}

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        py-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-orange-500
                        to-amber-500
                        text-white
                        transition-all
                        duration-300
                        text-sm
                        font-medium
                      "
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* LOAD MORE */}

        {!isExpanded &&
          visibleCount <
            filteredProjects.length && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => {
                  setVisibleCount(
                    filteredProjects.length
                  );

                  setIsExpanded(true);
                }}
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-orange-500
                  to-amber-500
                  text-white
                  font-semibold
                  shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Load More
              </button>
            </div>
          )}
      </div>
    </section>
  );
};

export default Projects;