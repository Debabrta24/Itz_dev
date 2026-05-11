import React from "react";
import { Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto py-16"
    >
      {/* LEFT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Hi I am
        </p>

        <h1 className="text-orange-500 font-bold text-3xl sm:text-4xl mt-2">
          Debabrata Paul
        </h1>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight text-gray-900 dark:text-white">
          Software <br />
          Engineer
        </h2>

        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl">
          Hi, I’m Debabrata Paul — a passionate developer skilled in Web
          Development, App Development, IoT, and UI/UX Design.
        </p>

        <button className="mt-8 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl text-white font-semibold shadow-lg">
          <a href="img/Debabrata_Resume.pdf">Download CV</a>
        </button>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-30 rounded-full"></div>

          <div className="relative bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-full w-72 h-72 sm:w-80 sm:h-80 overflow-hidden shadow-2xl">
            {/* IMAGE */}
          </div>
        </div>

        {/* MAIL */}
        <a
          href="mailto:debabratapaul@example.com"
          className="mt-6 flex items-center gap-3 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 px-5 py-3 rounded-2xl hover:scale-105 transition"
        >
          <Mail className="text-orange-500" />
          <Mail className="text-orange-500" />
        </a>
      </div>
    </section>
  );
};

export default Hero;