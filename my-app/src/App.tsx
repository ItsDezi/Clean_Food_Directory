import React from 'react';
import './styles/App.css';
import { Router, Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/NavBar';
import Map from './Components/Map';
import AddLocationForm from './Components/AddLocationForm';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
          <Routes>
            <Route path="/addListing" element={<AddLocationForm/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          {/* <div id = "home">
          <Home/>
          </div> */}
          {/* <div id = "map">
          <Map/>
          </div> */}
    </div>
    </BrowserRouter>

  );
}

export default App;
