import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Name / Copyright */}
        <p className="text-center md:text-left mb-4 md:mb-0">
          © 2025 <span className="font-semibold">Usama Alam Ridwane</span>. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex space-x-6 justify-center md:justify-end text-2xl">
          <a href="https://github.com/12usama" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/md-usama-alam-ridwane-376b3a1a4/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:usamaalam3999@gmail.com" className="hover:text-gray-200 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
