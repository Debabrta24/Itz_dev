import React, { useEffect, useState } from "react";

import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");
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

          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-orange-500 text-white hover:scale-105 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}

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
