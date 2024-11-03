import React from 'react';
import './styles/App.css';
import { Router, Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/NavBar';
import Map from './Components/Map';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
          {/* <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/map" element={<Map/>}/>
          </Routes> */}
          <div id = "home">
          <Home/>
          </div>
          <div id = "map">
          <Map/>
          </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
