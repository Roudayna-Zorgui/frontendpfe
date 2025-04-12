import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg w-full fixed top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          QuickMed
        </Link>

        {/* Bouton menu mobile */}
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Menu de Navigation */}
        <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                to="/about"
                className="px-4 py-2 flex items-center text-lg font-semibold hover:text-blue-300"
              >
                À propos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="px-4 py-2 flex items-center text-lg font-semibold hover:text-blue-300"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="px-4 py-2 flex items-center text-lg font-semibold hover:text-blue-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Boutons Se connecter & S'inscrire */}
          <div className="flex items-center ml-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-700 bg-lightBlue-500 active:bg-lightBlue-600 transition duration-200 flex items-center"
            >
              <i className="fas fa-sign-in-alt mr-2"></i> Se connecter
            </Link>
            <Link
              to="/sign-up"
              className="ml-3 px-4 py-2 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-700 bg-lightBlue-500 active:bg-lightBlue-600 transition duration-200 flex items-center"
            >
              <i className="fas fa-user-plus mr-2"></i> S'inscrire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
