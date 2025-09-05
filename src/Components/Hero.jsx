import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20"></div>

      <div className="hero-content flex-col lg:flex-row-reverse relative z-10 px-6 lg:px-16">
        {/* Hero Image with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <motion.img
            src="https://i.ibb.co/Q3YqFHjt/crop-removebg-preview.png"
            alt="Usama"
            className="relative max-w-sm rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left mt-6 lg:mt-0"
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Hi, I’m <span className="text-blue-400">Usama</span> 👋
          </h1>

          <h2 className="text-2xl font-semibold mb-6">
            <ReactTyped
              strings={[
                "MERN Stack Developer",
                "React.js Developer",
                "JavaScript Enthusiast",
                "Node.js Developer",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h2>

          <p className="py-4 text-lg max-w-xl text-gray-300">
            A passionate <span className="text-blue-400">MERN Stack Developer</span> specializing in 
            <span className="font-semibold"> React.js, JavaScript, and Node.js</span>. 
            I create modern, scalable, and responsive web applications with clean code and seamless user experiences.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <a href="#projects" className="btn btn-primary rounded-full">
              🚀 View My Work
            </a>
            <a href="#contact" className="btn btn-outline rounded-full">
              📩 Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
