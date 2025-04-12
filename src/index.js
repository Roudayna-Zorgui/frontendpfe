import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// Importation des Layouts
import Admin from "layouts/Admin";
import Auth from "layouts/Auth";

// Importation des vues
import Landing from "views/Landing";
import Profile from "views/Profile";
import Index from "views/Index";

// Importation du Dashboard


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Routes avec layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />

        {/* Routes sans layouts */}
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Index} />

        
        

        {/* Redirection par défaut */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
