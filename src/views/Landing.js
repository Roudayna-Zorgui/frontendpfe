import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

// Components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar/>
      <main>
        {/* Section Hero */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{

              backgroundImage: "url('https://wallpapersok.com/images/hd/advanced-medical-diagnostic-equipment-hd-heartbeat-1101drag2ufe5hvo.jpg')",
              height: '100vh',
            }}
          >
            <span className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-semibold text-4xl text-white">
                    Prenez rendez-vous facilement avec votre médecin
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-white">
                    Notre plateforme vous permet de trouver et prendre un rendez-vous
                    médical en toute simplicité. Rejoignez-nous aujourd'hui pour accéder
                    à une expérience de santé améliorée.
                  </p>

                  <div className="mt-12">
                    <Link
                      to="/sign-up"
                      className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      S'inscrire en tant que patient
                    </Link>
                    <Link
                      to="/doctor-sign-up"
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      S'inscrire en tant que médecin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services médicaux */}
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
                      <User size={24} color="black" />
                    </div>
                    <h6 className="text-xl font-semibold">Médecins Qualifiés</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Plus de 500 professionnels de santé sélectionnés selon des critères stricts
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-500">
                      <i className="fas fa-calendar-alt text-red-500"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Rendez-vous en Ligne</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Réservation instantanée 24h/24 et rappel par SMS/email
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-500">
                      <i className="fas fa-heartbeat"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Suivi Médical</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Historique des consultations et accès à vos documents médicaux
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fonctionnalités */}
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blue-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-stethoscope text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Une prise en charge complète
                </h3>
                <ul className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600 list-disc pl-5">
                  <li className="mb-2">Consultation physique ou téléconsultation</li>
                  <li className="mb-2">Prescriptions électroniques</li>
                  <li className="mb-2">Orientation vers des spécialistes</li>
                  <li>Suivi post-opératoire</li>
                </ul>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                  <img
                    alt="Docteur"
                    src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spécialités médicales */}
        {/* Spécialités médicales */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Nos Spécialités</h2>
              </div>
            </div>
            <div className="flex flex-cols-1 md:flex-cols-3 lg:flex-cols-4 gap-8 px-8">
              {[
                { name: "Cardiologie", icon: "fas fa-heartbeat" },
                { name: "Dermatologie", icon: "fas fa-allergies" },
                { name: "Pédiatrie", icon: "fas fa-baby" },
                { name: "Gynécologie", icon: "fas fa-venus" },
                { name: "Ophtalmologie", icon: "fas fa-eye" },
                { name: "Orthopédie", icon: "fas fa-bone" },
                { name: "Dentaire", icon: "fas fa-tooth" },
                { name: "Psychiatrie", icon: "fas fa-brain" },
              ].map((specialite) => (
                <div key={specialite.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-6">
                  <div className="text-blue-500 mb-4">
                    <i className={`${specialite.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{specialite.name}</h3>
                  <button className="text-white-600 hover:text-blue-800 text-sm">
                    Voir les disponibilités →
                  </button>
                </div>
              ))}
            </div>


          </div>
        </section>

        {/* Contact Urgent */}
        <section
          className="pb-20 relative block bg-blueGray-800"
          style={{
            backgroundImage: "url('https://www.telemedecine.tn/actualites/images/urgence_medicale_en_tunisie.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-8/12 px-4">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                  <h2 className="text-3xl font-semibold mb-4">Urgence Médicale ?</h2>
                  <p className="text-xl text-blueGray-600 mb-6">
                    Composez le  (216) 71 577 000. (urgence)
                  </p>
                  <div className="text-red-600 text-4xl mb-4">
                    <i className="fas fa-ambulance"></i>
                  </div>
                  <p className="text-blueGray-500">
                    Service d'urgence disponible 24h/24 - 7j/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}