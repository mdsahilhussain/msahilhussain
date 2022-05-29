import React, { Component } from "react";
//================================ use react router dom ================================
import { NavLink } from "react-router-dom";
//================================ use css style sheat ================================
import "./navbar.css";
//================================ use images ================================
import Logo from "../../Assets/logoImage.svg";

export default class Navbar extends Component {
  // navLinkStyle = (isActive) => {
  //   return {
  //     fontSize: isActive ? "32px" : "18px",
  //     color: isActive ? "ff4655" : "f2f2f2",
  //   };
  // };
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
            <NavLink to={"#about"} style={this.navLinkStyle}>
              About me
            </NavLink>
            <NavLink to={"#experience"} style={this.navLinkStyle}>
              Experience
            </NavLink>
            <NavLink to={"#certificate"} style={this.navLinkStyle}>
              Certificate
            </NavLink>
            <NavLink to={"#project"} style={this.navLinkStyle}>
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
