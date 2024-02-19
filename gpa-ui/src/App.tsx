import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import useToken from './hooks/useToken';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';

function App() {
  const{token, setToken} = useToken();
  return (
    <div className="App">
      Hola
      <Routes>
        <Route path="/" element={<Home token={token}/>}/>
        <Route path="/login" element= {<Login setToken={setToken}/>}/>
        <Route path="/signup" element={<Register setToken={setToken}/>}/>
        <Route path="/accounts" element={<Accounts/>}/>
        <Route path="/transactions/:accountId" element={<Transactions/>}/>
      </Routes>
    </div>
  );
}

export default App;
