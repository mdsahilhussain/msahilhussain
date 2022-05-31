import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";

import { Footer, Navbar, Introdution, Skills, Education } from "./Content";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
