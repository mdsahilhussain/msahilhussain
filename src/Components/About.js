import React from "react";
import { NavLink } from "react-router-dom";

import { Introdution } from "../Content";

function About() {
  return (
    <div className="about">
      <div className="about___heading">
        <div>
          <h4 className="about___heading--line1">Testimonial</h4>
          <h1>about me</h1>
        </div>
        <div className="about___heading--links">
          <NavLink to={"/"}>Introdution</NavLink>
          <NavLink to={"/"}>Skills</NavLink>
          <NavLink to={"/"}>Qualification</NavLink>
        </div>
      </div>
      <div className="about___contant">
        <div className="about___contant--video">
          <video />
        </div>
        <div className="about___contant--components">
            <Introdution/>
        </div>
      </div>
    </div>
  );
}

export default About;
