import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg'

import Login from '../components/login';
import './css/header.css';
const Header = () => {

  return (
    <header>
      <div id="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <NavLink to="/productos" style={
          ({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'black'
          })}>
          Productos
        </NavLink>
        <NavLink to="/register" style={
          ({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'black'
          })}>
          Register
        </NavLink>

        <Login />
        <NavLink to="/register" style={
          ({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'black'
          })}>
          Carrito
        </NavLink>
      </nav>
      <a href='pruebadreact/' title=''>
        <img src={logo} alt="ruleta" class="logo" />
      </a>

    </header>
  );
};

export default Header;