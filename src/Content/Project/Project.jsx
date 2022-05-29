import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./project.css";

import mobileAppIcon from "../../Assets/mobileIcon.png";
import webDesignIcon from "../../Assets/webDesign.png";
import frontEndDevIcon from "../../Assets/frontEndIcon.png";

export default class Project extends Component {
  cardDetail = [
    {
      icon: mobileAppIcon,
      cardHeader: "Mobile App Design",
      link: "",
    },
    {
      icon: webDesignIcon,
      cardHeader: "Web App Design",
      link: "",
    },
    {
      icon: frontEndDevIcon,
      cardHeader: "Front End Development",
      link: "",
    },
  ];

  render() {
    return (
      <div className="project">
        <div className="project___heading">
          <h4 className="project___heading--line1">Portfolio</h4>
          <h1 className="project___heading--line2">
            My Latest Works{" "}
            <span>
              Explore More Works{" "}
              <i className="fa-solid fa-arrow-right-long slide-right"></i>
            </span>
          </h1>
        </div>
        <div className="project___card">
          {this.cardDetail.map((item, index) => {
            return (
              <div className="project___card--contant" key={index}>
                <div className="project___card--contant___body">
                  <img src={item.icon} alt={JSON.stringify(item.icon)} />
                  <h3>{item.cardHeader}</h3>
                  <Link to={item.link}>
                    <p>
                      Go to Portfolio{" "}
                      <i className="fa-solid fa-arrow-right-long slide-right"></i>{" "}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
