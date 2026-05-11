import React from "react";

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
      icon: <Globe size={38} />,
    },
    {
      name: "UI / UX",
      percent: 85,
      icon: <MonitorSmartphone size={38} />,
    },
    {
      name: "IoT",
      percent: 80,
      icon: <Cpu size={38} />,
    },
    {
      name: "Gen AI",
      percent: 75,
      icon: <Bot size={38} />,
    },
  ];

  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto bg-[#0f0f10] rounded-[30px] p-6 sm:p-10 lg:p-14 shadow-2xl">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Skills And Tools <br />
              That I{" "}
              <span className="text-orange-500">
                Master
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-8 max-w-xl">
              Passionate about building modern web applications,
              intelligent AI systems, responsive UI/UX designs,
              and innovative IoT-based solutions. I enjoy creating
              scalable digital experiences with modern technologies
              and user-focused design principles.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center group"
              >

                {/* OUTER PROGRESS */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(
                      #ff8c32 ${skill.percent * 3.6}deg,
                      #222222 0deg
                    )`,
                  }}
                ></div>

                {/* INNER CIRCLE */}
                <div className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#0f0f10] border border-[#1d1d1d] flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">

                  {/* ICON */}
                  <div className="text-orange-500 mb-3">
                    {skill.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {skill.name}
                  </h3>

                  {/* PERCENT */}
                  <p className="text-gray-400 text-sm mt-1">
                    {skill.percent}%
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