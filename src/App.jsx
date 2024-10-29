import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/AboutPage"
import Contact from "./pages/ContactPage"
import Gallery from "./pages/galleryPage"
import Service from "./pages/ServicePage"

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
   </Router>
  );
}

export default App;
