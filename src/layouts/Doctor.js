import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Composants spécifiques au médecin
import DoctorNavbar from "components/Navbars/DoctorNavbar.js";
import DoctorSidebar from "components/Sidebar/DoctorSidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";  // Tu peux garder celui-ci ou le modifier pour le médecin si nécessaire

// Vues pour le médecin
import DashboardD from "views/doctor/DashboardD.js";
import ProfileD from "views/doctor/ProfileD.js";
import Rendezvous from "views/doctor/Rendezvous.js";  // Exemple de vue pour les rendez-vous

export default function Doctor() {
  return (
    <>
      <DoctorSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <DoctorNavbar />
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/doctor/dashboard" exact component={DashboardD} />
            <Route path="/doctor/profile" exact component={ProfileD} />
            <Route path="/doctor/rendezvous" exact component={Rendezvous} />
            <Redirect from="/doctor" to="/doctor/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
