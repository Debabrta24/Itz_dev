import React from "react";

import {
  Globe,
  Smartphone,
  Cpu,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "I create responsive, fast, and modern websites with smooth user experiences.",
    icon: <Globe size={30} />,
  },
  {
    title: "Mobile Apps",
    description:
      "Modern mobile applications with clean UI and powerful functionality.",
    icon: <Smartphone size={30} />,
  },
  {
    title: "IoT Solutions",
    description:
      "Smart IoT systems for automation and real-time connected experiences.",
    icon: <Cpu size={30} />,
  },
  {
    title: "UI / UX Design",
    description:
      "Beautiful user interfaces focused on modern user experience.",
    icon: <Palette size={30} />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 w-125 bg-orange-400/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-87.5 h-87.5 bg-amber-300/10 blur-[100px] rounded-full"></div>

        <div className="absolute top-40 right-0 w-75 h-[300px] bg-yellow-300/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* HEADING */}

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-500 font-semibold tracking-[0.3em] uppercase mb-4">
            My Services
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What I Can Build
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm sm:text-base leading-7">
            Modern websites, mobile apps, IoT systems, and UI/UX
            experiences with clean and responsive designs.
          </p>
        </div>

        {/* SERVICES GRID */}

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-6
            lg:gap-7
            mt-14
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-black/10
                dark:border-white/10
                bg-[#f8f8f8]
                dark:bg-[#111111]
                p-4
                sm:p-6
                lg:p-8
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]
                hover:border-orange-500/40
                active:scale-95
                cursor-pointer
              "
            >
              {/* HOVER GLOW */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-br
                  from-orange-400/10
                  via-amber-400/5
                  to-transparent
                  pointer-events-none
                "
              ></div>

              {/* TOP GLOW */}

              <div
                className="
                  absolute
                  -top-10
                  -right-10
                  w-28
                  h-28
                  bg-orange-500/10
                  blur-3xl
                  rounded-full
                  pointer-events-none
                "
              ></div>

              {/* CONTENT */}

              <div className="relative z-10 text-center">
                {/* ICON */}

                <div
                  className="
                    w-14
                    h-14
                    sm:w-16
                    sm:h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-orange-500
                    to-amber-400
                    flex
                    items-center
                    justify-center
                    text-white
                    mx-auto
                    mb-4
                    shadow-lg
                    transition-transform
                    duration-500
                    hover:rotate-6
                  "
                >
                  {service.icon}
                </div>

                {/* TITLE */}

                <h2 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h2>

                {/* DESCRIPTION */}

                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-5 sm:leading-6">
                  {service.description}
                </p>
              </div>

              {/* BOTTOM LINE */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-gradient-to-r
                  from-orange-500
                  via-amber-400
                  to-yellow-400
                  hover:w-full
                  transition-all
                  duration-500
                "
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;