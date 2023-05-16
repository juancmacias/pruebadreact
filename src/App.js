import React from 'react'
import {
  BrowserRouter ,
  Route, Routes
} from "react-router-dom";


import Jugar from './components/Jugar';
import Nuvousuario from './components/Nuvousuario';
import Detalles from './components/Detalles';
import Productos from './components/Productos';
import Header from './components/Header';
import Footer from './components/Footer';
import Comenzarjuego from './components/jugar/Comenzarjuego';
import Login from './components/login'
import './App.css';

function App() {

  return (
    <BrowserRouter>
    <div>
      <Header/>
        <Routes>
            <Route exact path='/' element={<Jugar />} />
            <Route path='productos' element={<Productos />} />
            <Route path='register' element={<Nuvousuario />} />
            <Route path='detalles/:id' element={<Detalles />} />
            <Route path='jugar' element={<Comenzarjuego />} />
            <Route path='*' element={<Login to='login' replace />} />
        </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App;