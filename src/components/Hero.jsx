import React from 'react'

const Hero = () => {
  return (
    <>
      <section id="home"
        className="my-12 sm:my-20 flex flex-col lg:flex-row justify-between items-center gap-8 p-4 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-lg sm:text-xl">Hi I am</h2>
            <h1 className="text-orange-500 font-bold text-2xl sm:text-3xl">Debabrata Paul</h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">Software</h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">__________Engineer</h1>
            <p className="my-4 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
                Hi, I’m Debabrata Paul — a passionate developer skilled in Web Development, App Development, IoT, and
                UI/UX Design.
                I love building smart, user-friendly digital experiences that connect technology with creativity.

                From responsive web apps to connected IoT systems, I focus on functionality, design, and performance.
                I’m always exploring new tools and ideas to keep improving and create solutions that truly make an
                impact.

            </p>
            <button
                className="className1 bg-orange-500 hover:bg-orange-700  rounded-4xl border-black transition-colors text-lg sm:text-xl px-6 py-3 my-2 ">
                <a href="img/Debabrata_Resume.pdf">Download CV</a> </button>

        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
            <div className="bg-white rounded-full w-64 h-64 sm:w-80 sm:h-80 overflow-hidden">
                {/* <img src="img/circle photo.png" alt="Profile picture" className="w-full h-full object-cover"> */}
            </div>

            <div>
                
          </div> 
        </div>
    </section>

    </>
  )
}

export default Hero