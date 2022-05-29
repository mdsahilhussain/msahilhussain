import React from "react";
// import { BrowserRouter as Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";

import { Footer, Navbar } from "./Content";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <About/>
      <Footer/>
    </>
  );
}

export default App;
