import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";

import { Footer, Navbar, Contact } from "./Content";
import { LoadingProvider } from "./Context/LoadingContext";

const Portfolio = lazy(() => import("./PCD/Portfolio/Portfolio"));
const Certfication = lazy(() => import("./PCD/Certfication/Certfication"));
const Gallery = lazy(() => import("./PCD/Gallery/Gallery"));

function App() {
  return (
    <Router>
      <LoadingProvider>
        <Navbar style={{ zIndex: "999" }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route
            path="/certificate"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Certfication />
              </Suspense>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Portfolio />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Gallery />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </LoadingProvider>
    </Router>
  );
}

export default App;
