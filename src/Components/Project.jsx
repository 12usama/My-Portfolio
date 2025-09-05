import React from "react";

const projects = [
  {
    title: "Job Portal",
    description: "A modern job portal built with MERN stack, allowing users to search, add, and apply for jobs.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    live: "https://job-portal-client-one-rust.vercel.app/",
    github: "https://github.com/12usama/job-portal-client",
    image: "https://i.ibb.co.com/Ldq8yX29/logo.png",
  },
  {
    title: "Carzone",
    description: "A car selling platform built using React and Node.js, featuring listings, filtering, and user management.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    live: "https://carzone-client-1czv.vercel.app/",
    github: "https://github.com/12usama/carzone-client",
    image: "https://i.ibb.co/60gBgKZ/logo.jpg",
  },
  {
    title: "Entseeker",
    description: "An entertainment platform that provides recommendations for movies, TV shows, and events based on user preferences.",
    tech: ["React.js", "Node.js", "API Integration"],
    live: "https://entseeker.vercel.app/",
    github: "https://github.com/12usama/Entseeker",
    image: "https://i.ibb.co/V95h0ZJ/Entseeker.png",
  },
  {
    title: "Career Hub",
    description: "A career development platform connecting job seekers with companies, offering resources, and managing applications.",
    tech: ["React.js", "Node.js", "TailwindCSS"],
    live: "https://react-career-pua8-mu.vercel.app/",
    github: "https://github.com/12usama/react-career",
    image: "https://i.ibb.co.com/G4nmb268/favicon.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-base-200 font-sans">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-wide">
          My <span className="text-blue-400">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500 flex flex-col"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 "
              />

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 flex-1">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium shadow-sm hover:bg-indigo-600 hover:text-white transition-all duration-300"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full px-5 py-2 shadow-md hover:scale-105 hover:opacity-90 transition-all duration-300"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline rounded-full px-5 py-2 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
