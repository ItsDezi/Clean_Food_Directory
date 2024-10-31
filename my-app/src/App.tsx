import React from 'react';
import './styles/App.css';
import { Router, Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/NavBar';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
