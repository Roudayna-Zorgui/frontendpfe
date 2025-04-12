import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      {/* Effet SVG en haut */}
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          {/* Section Contact */}
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Votre Santé Est Notre Priorité!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Contactez-nous sur l'une de ces plateformes, nous vous répondrons sous 1 à 2 jours ouvrés.
            </h5>

            {/* Réseaux sociaux */}
            <div className="mt-6 flex space-x-2">
              <Link to="#" className="bg-white text-blue-400 shadow-lg flex items-center justify-center h-10 w-10 rounded-full">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="bg-white text-blue-600 shadow-lg flex items-center justify-center h-10 w-10 rounded-full">
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="#" className="bg-white text-pink-400 shadow-lg flex items-center justify-center h-10 w-10 rounded-full">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#" className="bg-white text-gray-800 shadow-lg flex items-center justify-center h-10 w-10 rounded-full">
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </div>

          {/* Section Services */}
          <div className="w-full lg:w-3/12 px-4 mt-6 lg:mt-0">
            <h5 className="text-lg font-bold mb-3">Trouve un Docteur</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-blue-500 transition">
                  Trouver un dentiste 
                </Link>
              </li>
              <li>
                <Link to="/training-centers" className="text-gray-600 hover:text-blue-500 transition">
                  Trouver un dermato
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-blue-500 transition">
                  Trouver un gastro
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-500 transition">
                  Trouver un generaliste
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-500 transition">
                  Trouver un genyco
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Autres Ressources */}
          <div className="w-full lg:w-3/12 px-4 mt-6 lg:mt-0">
          <h5 className="text-lg font-bold mb-3">Apprenez a nous connaitre </h5>
            <ul className="list-unstyled space-y-2">
              <li>
                <Link to="#" className="text-blueGray-600 hover:text-blueGray-800 font-semibold text-sm">
                  Q'ui sommes nous!
                </Link>
              </li>
              <li>
                <Link to="#" className="text-blueGray-600 hover:text-blueGray-800 font-semibold text-sm">
                  Nous cantacter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <hr className="my-6 border-blueGray-300" />

        {/* Copyright */}
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()} QuickMed. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
