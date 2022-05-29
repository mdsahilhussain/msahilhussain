import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./header.css";

import headerImage from "../../Assets/headerImage.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header___title">
          <h2>Hey There,</h2>
          <h2>
            I’m <span>M Sahil Hussain</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
            pellentesque dui dui, phasellus vestibulum consequat odio sociis. Ac
            vel sed viverra ornare placerat vitae egestas ut sit. Feugiat metus
            vel pharetra facilisi posuere. Accumsan porttitor amet enim, ut
            mauris.
          </p>
          <div className="header___title-btn">
            <Link to={"#contact"} className="button_borders">
              <button className="primary_button">
                {" "}
                <i class="fa-solid fa-file-arrow-down"></i> Resume
              </button>
            </Link>
            <Link to={"#contact"} className="button_borders">
              <button className="primary_button">
                {" "}
                <i className="fa-solid fa-user-plus"></i> Hire me
              </button>
            </Link>
          </div>
          <div className="header__title--socialLink">
            <p>Check Out My</p>
            <hr />
            <a href="https://www.behance.net/msahilhussain"><i className="fa-brands fa-behance"></i></a>
            <a href="https://www.linkedin.com/in/m-sahil-hussain-75b5181a6/"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://mdsahilhussain.github.io/gitprofile/"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
        <div className="header___imgSection">
          <img src={headerImage} alt="headerImage" />
        </div>
      </header>
    );
  }
}
