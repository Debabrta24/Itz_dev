import React, { useEffect, useState, useRef } from "react";

import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    // Default theme is strictly white (light mode).
    // If a saved preference exists, we respect it, otherwise we default to light mode (false).
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const isMounted = useRef(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Only store in localStorage if the user manually changed it (not on initial mount)
    if (isMounted.current) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } else {
      isMounted.current = true;
    }
  }, [darkMode]);

  const navLinks = [
    {
      name: "Home",
      id: "#home",
    },
    {
      name: "About",
      id: "#about",
    },
    {
      name: "Services",
      id: "#services",
    },
    {
      name: "Projects",
      id: "#projects",
    },
    {
      name: "Contact",
      id: "#contact",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/60 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}

        <h1 className="text-2xl font-bold text-orange-500">Debabrata</h1>

        {/* DESKTOP MENU */}

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.id}
                className="text-gray-700 dark:text-white hover:text-orange-500 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-3">
          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-orange-500 dark:text-yellow-400 hover:bg-orange-50 dark:hover:bg-zinc-700 active:scale-95 transition-all duration-300 shadow-sm border border-black/5 dark:border-white/5 relative overflow-hidden group cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Sun
                className={`w-5 h-5 absolute inset-0 transition-all duration-500 ${
                  darkMode ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                }`}
              />
              <Moon
                className={`w-5 h-5 absolute inset-0 transition-all duration-500 ${
                  darkMode ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
            </div>
          </button>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl bg-orange-500 text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="lg:hidden px-4 pb-5">
          <div className="rounded-2xl bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 p-4 flex flex-col gap-4">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.id}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 dark:text-white hover:text-orange-500 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
