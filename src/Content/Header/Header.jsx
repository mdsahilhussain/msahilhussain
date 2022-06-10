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

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
    };
  }

  loadingFuntion() {
    this.setState({ loader: true });
    setTimeout(() => {
      this.setState({ loader: false });
      console.log("goo");
    }, 1000);
  }
  componentDidMount() {
    this.loadingFuntion();
    // /or simply just AOS.init();
    AOS.init({
      // / initialise with other settings
      duration: 1000,
    });
    AOS.refresh();
  }
  render() {
    return (
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
            pellentesque dui dui, phasellus vestibulum consequat odio sociis. Ac
            vel sed viverra ornare placerat vitae egestas ut sit. Feugiat metus
            vel pharetra facilisi posuere. Accumsan porttitor amet enim, ut
            mauris.
          </p>
          <div className="header___title-btn">
            <Link
              to={"#contact"}
              className="button_borders"
              data-aos="fade-up"
              // data-aos-offset="200"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              <button className="primary_button">
                {" "}
                <i class="fa-solid fa-file-arrow-down"></i> Resume
              </button>
            </Link>
            <Link
              to={"/contact"}
              className="button_borders"
              data-aos="fade-up"
              // data-aos-offset="200"
              data-aos-delay="400"
              data-aos-easing="linear"
            >
              <button className="primary_button">
                {" "}
                <i className="fa-solid fa-user-plus"></i> Hire me
              </button>
            </Link>
          </div>
          <div className="header__title--socialLink">
            <p>Check Out My</p>
            <hr />
            <a
              href="https://www.behance.net/msahilhussain"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="50"
              data-aos-easing="linear"
            >
              <i className="fa-brands fa-behance"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/m-sahil-hussain-75b5181a6/"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-easing="linear"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://mdsahilhussain.github.io/gitprofile/"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="600"
              data-aos-easing="linear"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div
          className="header___imgSection"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="700"
          data-aos-easing="linear"
        >
          {this.state.loader ? (
            <div class="three-body">
              <div class="three-body__dot"></div>
              <div class="three-body__dot"></div>
              <div class="three-body__dot"></div>
            </div>
          ) : (
            <img src={headerImage} alt="headerImage" />
          )}
        </div>
      </header>
    );
  }
}
