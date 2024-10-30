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
      <header className="App-header">
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </header>
    </div>
    </BrowserRouter>

  );
}

export default App;
