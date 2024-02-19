import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      Hola
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
