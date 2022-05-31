import React from "react";
import { NavLink,Route, Routes } from "react-router-dom";

import { Education, Introdution, Skills } from "../Content";

function About() {
  return (
    <div className="about">
      <div className="about___heading">
        <div>
          <h4 className="about___heading--line1">Testimonial</h4>
          <h1>about me</h1>
        </div>
        <div className="about___heading--links">
          <NavLink
            to={"introdution"}
            className={({ isActive }) => (isActive ? "aboutactive" : "")}
          >
            Introdution
          </NavLink>
          <NavLink
            to={"skills"}
            className={({ isActive }) => (isActive ? "aboutactive" : "")}
          >
            Skills
          </NavLink>
          <NavLink
            to={"qualification"}
            className={({ isActive }) => (isActive ? "aboutactive" : "")}
          >
            Qualification
          </NavLink>
        </div>
      </div>
      <div className="about___contant">
        <div className="about___contant--video">
          <video />
        </div>
        <div className="about___contant--components">
        <Routes>
            <Route path={"introdution"} element={<Introdution />} />
            <Route path={"skills"} element={<Skills />} />
            <Route path={"qualification"} element={<Education />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default About;
