import React, { useState } from 'react';
import './styles/App.css';
import { Router, Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/NavBar';
import Map from './Components/Map';
import AddLocationForm from './Components/AddLocationForm';
//import { Context } from './Contexts/formContext';
import { template } from './formDatatemplate';
import { FormProvider } from './Contexts/FormContext';
import Footer from './Components/Footer';
function App() {
  const [formLocationData, setFormLocationData] = useState(template);
  //const contextValue = {formLocationData, setFormLocationData};
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <FormProvider>
          <Routes>
            <Route path="/contribute" element={<AddLocationForm/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          {/* <div id = "home">
          <Home/>
          </div> */}
          {/* <div id = "map">
          <Map/>
          </div> */}
        </FormProvider>
        <Footer></Footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
