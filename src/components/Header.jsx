import React from 'react';
import { NavLink } from 'react-router-dom';

import Login from '../components/login';

const Header = () => {

  return (
    <header>
      <div>
        <h1>El juego de la ruleta</h1>
        <Login/>

      </div>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" style={
            ({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'black'
            })}>
          Home
        </NavLink>
        <NavLink to="/productos" className="link" style={
            ({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'black'
            })}>
          Productos
        </NavLink>
        <NavLink to="/register" className="link" style={
            ({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'black'
            })}>
          Register
        </NavLink>
      </div>
    </header>
  );
};

export default Header;