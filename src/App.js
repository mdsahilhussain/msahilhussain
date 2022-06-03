import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";

import { Footer, Navbar } from "./Content";
import { Certfication, Portfolio } from "./PCD";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/certificate" element={<Certfication />} />
        <Route path="/project" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
