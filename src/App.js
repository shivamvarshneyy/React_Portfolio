import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import { HashRouter as  Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
        <Router>
        <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/service" element={<Service/>} />
                <Route exact path="/contact" element={<Contact/>} />
                <Route path="*" element={<Error/>} />            
            </Routes>
        </Router>
    </>
  )
}

export default App;
