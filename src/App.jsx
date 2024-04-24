import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


AOS.init();


export default function App() {
  return (
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />    
    </Routes>
  </BrowserRouter>
  )
}