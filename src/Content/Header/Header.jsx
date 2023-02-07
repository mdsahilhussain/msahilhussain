import React, { Component } from "react";
//*================================ AOS Slider ================================
import AOS from "aos";
import "aos/dist/aos.css";
//*================================ use react router dom ================================
import { Link } from "react-router-dom";
//* ================================ use css style sheat ================================
import "./header.css";
// *================================ use images ================================
import headerImage from "../../Assets/headerImage.svg";
// import pdf from '../../../public/msahilhussin_resmue.pdf'

export default class Header extends Component {
  componentDidMount() {
    // /or simply just AOS.init();
    AOS.init({
      // / initialise with other settings
      duration: 1000,
      disable: "mobile",
    });
    AOS.refresh();
  }
  render() {
    return (
      <div className="headerBox">
        <header>
          <div className="header___title">
            <h2
              data-aos="fade-up"
              // data-aos-offset="200"
              data-aos-delay="5"
              data-aos-easing="linear"
            >
              Hey There,
            </h2>
            <h2
              data-aos="fade-up"
              // data-aos-offset="200"
              data-aos-delay="10"
              data-aos-easing="linear"
            >
              I’m <span>M Sahil Hussain</span>
            </h2>
            <p
              data-aos="fade-up"
              // data-aos-offset="200"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              Software Enginner [ 1 year experience as a Fontend Devloper ] | 500+
              DSA problems | 8+ Web Dev Project [ HTML5/CSS3, Javascript,
              ReactJS&Redux, Typescript ] | 15+ Mobile UI & 12+ Web UI [ Figma,
              AdobeXD, Illustrator ]
            </p>
            <div className="header___title-btn">
              <a
                href="../../../public/msahilhussin_resmue.pdf"
                download="msahilhussain_resume"
                className="button_borders"
                data-aos="fade-up"
                // data-aos-offset="200"
                data-aos-delay="300"
                data-aos-easing="linear"
              >
                <button className="primary_button">
                  <i className="fa-solid fa-file-arrow-down"></i> Resume
                </button>
              </a>
              <Link
                to={"/contact"}
                className="button_borders"
                data-aos="fade-up"
                // data-aos-offset="200"
                data-aos-delay="400"
                data-aos-easing="linear"
              >
                <button className="primary_button">
                  <i className="fa-solid fa-user-plus"></i> Hire me
                </button>
              </Link>
            </div>
          </div>
          <div
            className="header___imgSection"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="700"
            data-aos-easing="linear"
          >
            <img src={headerImage} alt="headerImage" />
          </div>
        </header>
        <div className="header__title--socialLink">
          <p>Check Out My</p>
          <hr />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.behance.net/msahilhussain"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-easing="linear"
          >
            <i className="fa-brands fa-behance"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/m-sahil-hussain-75b5181a6/"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="500"
            data-aos-easing="linear"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mdsahilhussain"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="600"
            data-aos-easing="linear"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    );
  }
}
