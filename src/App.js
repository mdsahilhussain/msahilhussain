import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";

import { Footer, Navbar, Contact } from "./Content";
import { Certfication,  GalleryPG, GalleryPI, Portfolio } from "./PCD";

function App() {
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 6000);
  }, []);

  return (
    <Router>
      {loading ? (
        <div class="three-body">
          <div class="three-body__dot"></div>
          <div class="three-body__dot"></div>
          <div class="three-body__dot"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/certificate" element={<Certfication />} />
            <Route path="/project" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photogallery" element={<GalleryPG />} />
            <Route path="/artgallery" element={<GalleryPI />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
