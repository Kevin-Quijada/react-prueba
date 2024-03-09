import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/inicio';
import Categorias from './pages/Categorias';
import Productos from './pages/Productos';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Categorias" element={<Categorias/>}/>
            <Route path="/Productos" element={<Productos/>}/>
            <Route path="/Usuarios" element={<Usuarios/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
