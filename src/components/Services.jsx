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
      "I create responsive, fast, and modern websites with smooth user experiences across all devices.",
    icon: <Globe size={42} />,
  },
  {
    title: "Mobile App Development",
    description:
      "I develop intuitive and high-performance mobile applications with clean UI and reliable functionality.",
    icon: <Smartphone size={42} />,
  },
  {
    title: "IoT Solutions",
    description:
      "I build smart IoT systems that connect devices, automate tasks, and provide real-time solutions.",
    icon: <Cpu size={42} />,
  },
  {
    title: "UI / UX Design",
    description:
      "I design modern, user-friendly interfaces focused on smooth interaction and better user experience.",
    icon: <Palette size={42} />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        py-20 sm:py-28
        px-4 sm:px-6 lg:px-8
        bg-white dark:bg-[#0a0a0a]
        transition-colors duration-500
      "
    >
      {/* Background Graphics */}
      <div className="absolute inset-0 -z-10">
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/20 dark:bg-amber-500/10 blur-[120px] rounded-full"></div>

        {/* Left Glow */}
        <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-orange-400/20 dark:bg-orange-500/10 blur-[100px] rounded-full"></div>

        {/* Right Glow */}
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-300/20 dark:bg-yellow-500/10 blur-[100px] rounded-full"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.08)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-amber-500 font-semibold tracking-[0.3em] uppercase">
            My Services
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white leading-tight">
            What I Can Build For You
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm sm:text-base leading-7">
            I provide modern digital solutions including responsive websites,
            mobile apps, IoT systems, and UI/UX design to help turn ideas into
            real-world products.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-black/10
                dark:border-white/10
                bg-white/70
                dark:bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-amber-400/50
                hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]
              "
            >
              {/* Card Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-amber-400/10 via-orange-400/5 to-transparent"></div>

              {/* Animated Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:scale-150 transition duration-700"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg mx-auto mb-6 group-hover:rotate-6 transition duration-500">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom Animated Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;