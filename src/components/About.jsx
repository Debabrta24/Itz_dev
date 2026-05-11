import React, { useEffect, useState } from "react";

import {
  Globe,
  MonitorSmartphone,
  Cpu,
  Bot,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      name: "MERN Stack",
      percent: 90,
      icon: <Globe size={30} />,
    },
    {
      name: "UI / UX",
      percent: 85,
      icon: <MonitorSmartphone size={30} />,
    },
    {
      name: "IoT",
      percent: 80,
      icon: <Cpu size={30} />,
    },
    {
      name: "Gen AI",
      percent: 75,
      icon: <Bot size={30} />,
    },
  ];

  const [progress, setProgress] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((value, index) => {
          if (value < skills[index].percent) {
            return value + 1;
          }
          return value;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-28
        px-4
        sm:px-6
        lg:px-12
        bg-white
        dark:bg-[#0a0a0a]
        transition-colors
        duration-500
      "
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 bg-orange-400/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-87.5 h-87.5 bg-amber-300/10 blur-[100px] rounded-full"></div>

        <div className="absolute top-40 right-0 w-75 h-75 bg-yellow-300/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <div>
            <p className="text-orange-500 font-semibold tracking-[0.3em] uppercase mb-4">
              About Me
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              Skills And Tools <br />

              <span className="text-orange-500">
                That I Master
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-8 max-w-xl">
              Passionate about building modern web applications,
              intelligent AI systems, responsive UI/UX designs,
              and innovative IoT-based solutions.

              <br />
              <br />

              I enjoy creating scalable digital experiences with
              modern technologies and user-focused design
              principles.
            </p>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6 sm:gap-8 place-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                  relative
                  w-36
                  h-36
                  sm:w-44
                  sm:h-44
                  lg:w-52
                  lg:h-52
                  flex
                  items-center
                  justify-center
                  hover:scale-105
                  active:scale-95
                  transition-all
                  duration-500
                "
              >
                {/* PROGRESS RING */}

                <div
                  className="absolute inset-0 rounded-full transition-all duration-500"
                  style={{
                    background: `conic-gradient(
                      #ff8c32 ${progress[index] * 3.6}deg,
                      rgba(180,180,180,0.15) 0deg
                    )`,
                  }}
                ></div>

                {/* GLOW */}

                <div className="absolute w-full h-full rounded-full bg-orange-500/10 blur-2xl"></div>

                {/* INNER */}

                <div
                  className="
                    relative
                    z-10
                    w-28
                    h-28
                    sm:w-36
                    sm:h-36
                    lg:w-40
                    lg:h-40
                    rounded-full
                    bg-white
                    dark:bg-[#0a0a0a]
                    border
                    border-black/10
                    dark:border-white/10
                    flex
                    flex-col
                    items-center
                    justify-center
                    shadow-xl
                    backdrop-blur-xl
                  "
                >
                  {/* ICON */}

                  <div className="text-orange-500 mb-2 sm:mb-3">
                    {skill.icon}
                  </div>

                  {/* TITLE */}

                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white text-center">
                    {skill.name}
                  </h3>

                  {/* PERCENT */}

                  <p className="text-orange-500 text-sm sm:text-base font-bold mt-1">
                    {progress[index]}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;