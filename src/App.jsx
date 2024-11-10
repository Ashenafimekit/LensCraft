import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Gallery from "./pages/GalleryPage"
import Service from "./pages/ServicePage"
import AdminPage from "./pages/AdminPage";



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/pageadmin" element={<AdminPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
