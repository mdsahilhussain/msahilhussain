import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./footer.css";
import logo from "../../Assets/logoImage.svg";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer--boday">
          <div className="footer___imge">
            <img src={logo} alt="" />
          </div>
          <div className="footer___importantLinks">
            <ul>
              <li>
                <Link to={"/about"}>
                  <p>About Me</p>
                </Link>
              </li>
              <li>
                <Link to={"/project"}>
                  <p>Project</p>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={"/certificate"}>
                  <p>Certificate</p>
                </Link>
              </li>
              <li>
                <Link target="_blank" rel="noreferrer" to={"https://msahilhussain.medium.com/"}>
                  <p>Blogs</p>
                </Link>
              </li>
              <li>
                <Link to={"*"}>
                  <p>FQA</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer___soicalLinks">
            <ul className="socialIcon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.behance.net/msahilhussain"
              >
                <i className="fa-brands fa-behance"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/m-sahil-hussain-75b5181a6/"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mdsahilhussain.github.io/gitprofile/"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href={"/"}>
                <i className="fa-brands fa-twitter"></i>
              </a>
            </ul>
            <ul className="socialIcon">
              <a target="_blank" rel="noreferrer" href={"/"}>
                <i className="fa-brands fa-dribbble"></i>
              </a>
              <a target="_blank" rel="noreferrer" href={"/"}>
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a target="_blank" rel="noreferrer" href={"/"}>
                <i className="fa-solid fa-at"></i>
              </a>
              <a target="_blank" rel="noreferrer" href={"/"}>
                <i className="fa-brands fa-facebook"></i>
              </a>
            </ul>
            <ul>
              <Link to={"#contact"} className="button_borders">
                <button className="primary_button">
                  <i className="fa-solid fa-file-arrow-down"></i> Resume
                </button>
              </Link>
              <Link to={"/contact"} className="button_borders">
                <button className="primary_button">
                  <i className="fa-solid fa-user-plus"></i> Hire me
                </button>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer__lower">
          <p> 2020 msahillhussain. All rights reserved.</p>
        </div>
      </div>
    );
  }
}
