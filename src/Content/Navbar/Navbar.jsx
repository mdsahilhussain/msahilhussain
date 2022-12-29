import React, { Component } from "react";
//================================ use react router dom ================================
import { NavLink } from "react-router-dom";
//================================ use css style sheat ================================
import "./navbar.css";
//================================ use images ================================
import Logo from "../../Assets/logoImage.svg";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { mobileNavbar: false };
  }
  mobileNavbarShow = () => {
    this.setState({ mobileNavbar: !this.state.mobileNavbar });
  };

  mobileNavbarShowByLogo = () => {
    this.setState({ mobileNavbar: false });
  };
  render() {
    return (
      <nav>
        <div className="navbar___mobile">
          <div className="navbar___mobile___img">
            <NavLink to={"/"}>
              <img
                src={Logo}
                alt="logoIMG"
                onClick={this.mobileNavbarShowByLogo}
              />
            </NavLink>
            {this.state.mobileNavbar ? (
              <i
                className="fa-solid fa-xmark"
                onClick={this.mobileNavbarShow}
              ></i>
            ) : (
              <i
                className="fa-solid fa-bars"
                onClick={this.mobileNavbarShow}
              ></i>
            )}
          </div>
          <div
            className="navbar___mobile--linkList"
            style={{ display: this.state.mobileNavbar ? "block" : "none" }}
          >
            <ul>
              <li>
                <NavLink
                  to={"/about"}
                  state={{ params: "addVideo", subTitle: "activeForMobile" }}
                  className={({ isActive }) => (isActive ? "" : "")}
                  onClick={this.mobileNavbarShow}
                >
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/certificate"}
                  state={{ params: "addVideo", subTitle: "activeForMobile" }}
                  className={({ isActive }) => (isActive ? "" : "")}
                  onClick={this.mobileNavbarShow}
                >
                  Certificate
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/project"}
                  state={{ params: "addVideo", subTitle: "activeForMobile" }}
                  className={({ isActive }) => (isActive ? "" : "")}
                  onClick={this.mobileNavbarShow}
                >
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  state={{ params: "addVideo", subTitle: "activeForMobile" }}
                  className={({ isActive }) => (isActive ? "" : "")}
                  onClick={this.mobileNavbarShow}
                >
                  Say Hii..
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar">
          <div className="navbar___img">
            <NavLink to={"/"}>
              <img src={Logo} alt="logoIMG" />
            </NavLink>
          </div>
          <div className="navbar___links">
            <NavLink
              to={"/about"}
              state={{ params: "addVideo", subTitle: "" }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About me
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
            <NavLink to={"/contact"} className="button_borders">
              <button className="primary_button">Say hi..</button>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
