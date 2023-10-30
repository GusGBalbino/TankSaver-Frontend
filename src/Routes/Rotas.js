import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'src/Pages/Login';
import Perfil from '/src/Pages/Perfil'; 
import SideBar from 'src/Pages/Sidebar';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Login/>}></Route>
        <Route path = "/" element={<Perfil/>}></Route>
        <Route path = "/" element={<SideBar/>}></Route>
      </Routes>  
    </Router>
  )
}

export default AppRoutes;
