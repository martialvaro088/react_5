import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import './App.css';
import Contacto from './Contacto';

const usuario = {
  nombre: 'cristiano',
  edad: 39,
  email: 'bichoelmejorsiuuu7@bichomail.com',
};
const initialFollowing = true;

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/perfil" element={<UserProfile usuario={usuario} initialFollowing={initialFollowing} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <nav>
          <ul className='lista'>
            <li className='link'>
              <Link to="/perfil">Acerca de</Link>
            </li>
            <li className='link'>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};

export default App;
