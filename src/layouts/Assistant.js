import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import PatientDashboard from "../pages/patient/PatientDashboard";
import PatientAppointments from "../pages/patient/PatientAppointments";
import DoctorsList from "../pages/patient/DoctorsList";
import MedicalRecords from "../pages/patient/MedicalRecords";

export default function PatientLayout() {
  let { path, url } = useRouteMatch(); // Utilisation de `useRouteMatch` pour générer dynamiquement les routes

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-green-800 text-white p-5">
        <h2 className="text-xl font-bold mb-5">Espace Patient</h2>
        <ul>
          <li className="mb-3">
            <Link to={`${url}/dashboard`} className="hover:text-gray-300">🏠 Tableau de Bord</Link>
          </li>
          <li className="mb-3">
            <Link to={`${url}/appointments`} className="hover:text-gray-300">📋 Mes Rendez-vous</Link>
          </li>
          <li className="mb-3">
            <Link to={`${url}/doctors`} className="hover:text-gray-300">👨‍⚕️ Liste des Médecins</Link>
          </li>
          <li className="mb-3">
            <Link to={`${url}/medical-records`} className="hover:text-gray-300">📁 Mon Dossier Médical</Link>
          </li>
          <li className="mt-5">
            <button className="bg-red-500 px-3 py-1 rounded" onClick={() => alert("Déconnexion...")}>
              🚪 Déconnexion
            </button>
          </li>
        </ul>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Bienvenue, Patient</h1>
        <hr className="my-4" />

        {/* Routes du Patient */}
        <Switch>
          <Route exact path={`${path}/dashboard`} component={PatientDashboard} />
          <Route exact path={`${path}/appointments`} component={PatientAppointments} />
          <Route exact path={`${path}/doctors`} component={DoctorsList} />
          <Route exact path={`${path}/medical-records`} component={MedicalRecords} />
          <Route path="*">
            <h2 className="text-red-500">Page non trouvée</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
