import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfil from '../Pages/Perfil';
import Login from '../Pages/Login';
import Variaveis from '../Pages/Variaveis';
import Ganhos from '../Pages/Ganhos';
import Custo from '../Pages/Custos';
import Dashboard from '../Pages/Dashboard';

const Private = ({ Item }) => {
  const Login = true;
  return Login > 0 ? <Item /> : <Login />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={< Private Item ={Dashboard} />}></Route>
        <Route path="/custos" element={<Custo />}></Route>
        <Route path="/ganhos" element={<Ganhos />}></Route>
        <Route path="/variaveis" element={<Variaveis />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;


/*
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/Autenticacao/auth'; // Importe o componente PrivateRoute
import Perfil from '../Pages/Perfil';
import Login from '../Pages/Login';
import Variaveis from '../Pages/Variaveis';
import Ganhos from '../Pages/Ganhos';
import Custo from '../Pages/Custos';
import Dashboard from '../Pages/Dashboard';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route path="/custos" element={<PrivateRoute component={Custo} />} />
        <Route path="/ganhos" element={<PrivateRoute component={Ganhos} />} />
        <Route
          path="/variaveis"
          element={<PrivateRoute component={Variaveis} />}
        />
        <Route path="/perfil" element={<PrivateRoute component={Perfil} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
*/