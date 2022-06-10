import React from "react";
import { portfolioData } from "./portfolioData";

import { NavLink } from "react-router-dom";

import "./portfolio.css";

import projectHeaderImage from "../../Assets/projectHerderimage.png";
function Portfolio() {
  // const Data = portfolioData();
  return (
    <>
      <header className="portfolio">
        <div className="portfolio___detail">
          <h2>A Sneak Peak Into Some Of My Works</h2>
          <p>
            There are some selected work which I making to gain my experience,
            Client, and for my company as employ, these works show my skills and
            my hard-working nature.
          </p>
        </div>
        <div className="portfolio___image">
          <img src={projectHeaderImage} alt=""></img>
        </div>
      </header>
      <section>
        <div className="portfolio____gallery">
          <div className="portfolio____gallery___heading">
            <h4 className="portfolio____gallery___heading--line1">portfolio</h4>
            <h1
              data-aos="fade-up"
              // data-aos-offset="200"
              // data-aos-delay="50"
            >
              Selected work <hr />
            </h1>
          </div>
          <div className="portfolio____gallery___heading--links">
            <NavLink
              to={"introdution"}
              onClick={""}
              className={({ isActive }) => (isActive ? "aboutactive" : "")}
            >
              All project
            </NavLink>
            <NavLink
              to={"skills"}
              onClick={""}
              className={({ isActive }) => (isActive ? "aboutactive" : "")}
            >
              Mobile Desgin
            </NavLink>
            <NavLink
              to={"qualification"}
              onClick={""}
              className={({ isActive }) => (isActive ? "aboutactive" : "")}
            >
              Web Desgin
            </NavLink>
            <NavLink
              to={"qualification"}
              onClick={""}
              className={({ isActive }) => (isActive ? "aboutactive" : "")}
            >
              Fornt-End Devlopement
            </NavLink>
          </div>
        </div>
        <div className="portfolio____gallery--cardSection">
          <div className="portfolio____gallery--cardSection___card"></div>
          <div className="portfolio____gallery--cardSection___card"></div>
          <div className="portfolio____gallery--cardSection___card"></div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
