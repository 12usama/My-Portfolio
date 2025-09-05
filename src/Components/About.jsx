import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 font-sans"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16 tracking-wide">
          <span className="text-blue-400">About</span> Me
        </h2>

        {/* Dimensional Card */}
        <div className="relative max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2">
          {/* Subtle glow behind card */}
          <span className="absolute inset-0 rounded-3xl blur-xl opacity-30 bg-indigo-200"></span>

          {/* Content */}
          <div className="relative z-10">
            {/* Description */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hi! I'm <span className="font-semibold text-indigo-600">Usama Alam Ridwane</span>, a MERN Stack Developer specializing in React.js, Node.js, and modern web technologies. I build responsive, scalable, and user-friendly web applications with clean code and seamless user experiences.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I’m passionate about creating high-quality web solutions, continuously learning new technologies, and solving real-world problems with efficient and maintainable code.
            </p>

            {/* Skills with dimensional badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {["React.js", "JavaScript", "Node.js", "MongoDB", "DaisyUI"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-gray-800 font-semibold 
                               hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
