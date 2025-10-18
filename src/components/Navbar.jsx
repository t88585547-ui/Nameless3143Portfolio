import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <strong className="text-white text-lg">NameLess3143</strong>
          </div>
          <ul className="hidden md:flex items-center gap-x-8 text-white">
            <li>
              <NavLink
                to="/"
                className="hover:text-pink-600 transition-colors font-semibold"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:text-pink-600 transition-colors font-semibold"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-pink-600 transition-colors font-semibold"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="hover:text-pink-600 transition-colors font-semibold"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-pink-600 transition-colors font-semibold"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* ปุ่มมือถือ */}
          <button
            className="flex items-center md:hidden text-white rounded"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              // Close SVG
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Hamburger SVG
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-6 flex flex-col">
          <NavLink
            to="/"
            onClick={toggleSidebar}
            className="py-4 border-b border-gray-300 font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={toggleSidebar}
            className="py-4 border-b border-gray-300 font-semibold"
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleSidebar}
            className="py-4 border-b border-gray-300 font-semibold"
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            onClick={toggleSidebar}
            className="py-4 border-b border-gray-300 font-semibold"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleSidebar}
            className="py-4 font-semibold"
          >
            Contact
          </NavLink>
        </div>
        <div className="border-b-2 mr-4 ml-4"></div>
      </div>
    </>
  );
}
