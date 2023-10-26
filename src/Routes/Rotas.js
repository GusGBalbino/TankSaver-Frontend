import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from 'src/Pages/Login';
import Perfil from '/src/Pages/Perfil'; 

function Rotas() {
  return (
    <Router>
      <Switch>
        <Route exact path="/src/Pages/Login.js" component={Login} />
        <Route path="/src/Pages/Sidebar.js" component={Perfil} />
      </Switch>
    </Router>
  );
}

export default Rotas;
