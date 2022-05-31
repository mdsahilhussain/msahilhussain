import React, { Component } from "react";
//================================ use react router dom ================================
import { NavLink } from "react-router-dom";
//================================ use css style sheat ================================
import "./navbar.css";
//================================ use images ================================
import Logo from "../../Assets/logoImage.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="navbar">
          <div className="navbar___img">
            <NavLink to={"/"}>
              <img src={Logo} alt="logoIMG" />
            </NavLink>
          </div>
          <div className="navbar___links">
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About me
            </NavLink>
            <NavLink
              to={"/#experience"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Experience
            </NavLink>
            <NavLink
              to={"/certificate"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Certificate
            </NavLink>
            <NavLink
              to={"/project"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Project
            </NavLink>
            <NavLink
              style={this.navLinkStyle}
              to={"#contact"}
              className="button_borders"
            >
              <button className="primary_button">Say hi..</button>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
