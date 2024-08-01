import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Event Management App. All rights
          reserved.
        </p>
        <nav className="mt-4 flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
