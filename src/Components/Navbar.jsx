import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
        <div className="navbar px-6">
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-md rounded-box mt-3 w-52 p-2 shadow-lg"
              >
                {["About", "Projects", "Skills", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-3 py-2 text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo / Name */}
            <a
              href="/"
              className="btn btn-ghost text-2xl font-bold normal-case text-indigo-600"
            >
              Usama
            </a>
          </div>

          {/* Navbar Center - Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-6 text-lg font-medium">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="transition-colors duration-300 text-gray-700 hover:text-indigo-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            <a
              href="/resume.pdf"
              download="Usama_Ridwane_Resume.pdf"
              className="btn btn-primary"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Add padding to top of page content to prevent overlap */}
      <div className="pt-20">
        {/* Your Hero section or other page content goes here */}
      </div>
    </>
  );
};

export default Navbar;
