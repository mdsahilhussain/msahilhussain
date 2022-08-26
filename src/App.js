import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";

import { Footer, Navbar, Contact } from "./Content";
import { Certfication, Gallery, Portfolio } from "./PCD";
import { LoadingProvider } from "./Context/LoadingContext";

function App() {
  return (
    <Router>
      <LoadingProvider>
        <Navbar style={{ zIndex: "999" }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/certificate" element={<Certfication />} />
          <Route path="/project" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </LoadingProvider>
    </Router>
  );
}

export default App;
