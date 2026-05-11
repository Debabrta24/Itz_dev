import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="flex flex-wrap justify-between items-center p-4 max-w-7xl mx-auto">
            <div className="p-2 sm:p-4">
                <h1 className="text-xl sm:text-2xl font-bold">Debabrata</h1>
            </div>

            {/* <!-- <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500"> --> */}
            <div id="btn" className="flex items-center gap-2">
                <ul className="flex flex-wrap items-center gap-2 ">
                    <li className="hidden lg:block"><a href="#home"
                            className="p-2 sm:p-4 hover:text-orange-500 transition-colors ">Home</a></li>
                    <li className="hidden lg:block"><a href="#about"
                            className="p-2 sm:p-4 hover:text-orange-500 transition-colors ">About me</a></li>
                    <li className="hidden lg:block"><a href="#services"
                            className="p-2 sm:p-4 hover:text-orange-500 transition-colors">Services</a></li>
                    <li className="hidden lg:block"><a href="#projects"
                            className="p-2 sm:p-4 hover:text-orange-500 transition-colors">Projects</a></li>
                    <li className="hidden lg:block"><a href="#contact"
                            className="p-2 sm:p-4 hover:text-orange-500 transition-colors">Contacts</a></li>
                    <li className="p-2">
                        <button onclick="toggole()" id="darkModeToggle"
                            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                            data-testid="button-dark-mode-toggle" aria-label="Toggle dark mode">
                            <svg id="sunIcon" className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                                </path>
                            </svg>
                            <svg id="moonIcon" className="w-6 h-6 hidden " fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                                </path>
                            </svg>
                        </button>
                    </li>
                    <div>
                        <div>
                            <li onclick="menu1()" className="p-4 lg:hidden ">
                                {/* <img id="imgg" src="img/menu.png" alt=""> */}
                            </li>
                            <ul id="menu" className=" absolute  hidden items-center gap-2 mr-2">
                                <li className=""><a href="#home"
                                        className="p-2 sm:p-4 hover:text-orange-500 transition-colors ">Home</a></li>
                                <li className=""><a href="#about"
                                        className="p-2 sm:p-4 hover:text-orange-500 transition-colors ">About
                                    </a></li>
                                <li className=""><a href="#services"
                                        className="p-2 sm:p-4 hover:text-orange-500 transition-colors">Services</a></li>
                                <li className=""><a href="#projects"
                                        className="p-2 sm:p-4 hover:text-orange-500 transition-colors">Projects</a></li>
                                <li className=""><a href="#contact"
                                        className="p-2 sm:p-4 hover:text-orange-500 transition-colors">Contacts</a></li>
                                {/* <li className=""> */}
                            </ul>
                        </div>
                    </div>

                </ul>



            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar