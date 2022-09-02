import React, { Component } from "react";

//*================================ AOS Slider ================================
import AOS from "aos";
import "aos/dist/aos.css";

//*================================ React router dom ================================
import { Link } from "react-router-dom";

//*================================ CSS style sheet ================================
import "./experience.css";
//*================================ Images ================================

import workingMen from "../../Assets/working.png";
import hireMe from "../../Assets/hiremeImg.svg";

//*================================ experiences data ================================
import { workingHistory } from "./workingHistory";
export default class Experience extends Component {
  componentDidMount() {
    // /or simply just AOS.init();
    AOS.init({
      // / initialise with other settings
      duration: 1000,
      easing: "linear",
    });
    AOS.refresh();
  }
  render() {
    const experienceDetail = workingHistory;
    return (
      <>
        <div className="experience">
          <div className="experience___style">
            <div className="experience___style___headlineSection">
              <h4 className="experience___style___headlineSection--line1">
                experiences
              </h4>
              <h1
                data-aos="fade-up"
                // data-aos-offset="200"
                // data-aos-delay="50"
              >
                Working history <hr />
              </h1>
              <img
                src={workingMen}
                alt="workingMenImage"
                className="experience___style___headlineSection--imgae1"
                data-aos="fade-up"
                // data-aos-offset="200"
                // data-aos-delay="50"
              />
              <Link
                to=""
                className="experience___style___headlineSection--imgae2 pulsate-fwd"
              >
                <img
                  src={hireMe}
                  alt="hireMeImage"
                  data-aos="fade-up"
                  // data-aos-offset="200"
                  // data-aos-delay="50"
                />
              </Link>
            </div>
            <div className="experience___style___workingDetail">
              {experienceDetail.map((item, index) => {
                return (
                  <div
                    className="exerience___style__workingDetail--detail"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                  >
                    <p>{item.duration}</p>
                    <span className="exerience___style__workingDetail--detail___icon">
                      <i className="fa-solid fa-briefcase"></i>
                    </span>
                    <h4>{item.companeyName}</h4>
                    <h3>{item.jobTitle}</h3>

                    <p>{item.aboutCompaney}</p>
                    <ul>
                      {item.Roles.map((subitem, index) => {
                        return <li key={index}>{subitem.role}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
