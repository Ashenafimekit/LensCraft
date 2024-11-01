import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Gallery from "./pages/galleryPage"
import Service from "./pages/ServicePage"


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
   </Router>
  );
}

export default App;
