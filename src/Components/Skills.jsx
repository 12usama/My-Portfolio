import React from "react";

// Skill logos with optional glow color
const skills = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16 tracking-wide">
          My <span className="text-blue-400">Skills</span> 
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center p-6 bg-white/70 backdrop-blur-md 
                         rounded-2xl shadow-lg transition duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              {/* Glow effect */}
              <span
                className="absolute inset-0 rounded-2xl blur-xl opacity-30"
                style={{ backgroundColor: skill.color }}
              ></span>

              {/* Content */}
              <div className="relative flex flex-col items-center justify-center z-10">
                <div className="w-24 h-24 mb-4 flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="text-gray-800 font-semibold text-lg">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
