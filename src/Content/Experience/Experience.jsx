import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./experience.css";

import workingMen from "../../Assets/working.png";
import hireMe from "../../Assets/hiremeImg.svg";

import { workingHistory } from "./workingHistory";
export default class Experience extends Component {
  render() {
    const experienceDetail = workingHistory;
    return (
      <div id="/#experience" className="experience">
        <div className="experience___style">
          <div className="experience___style___headlineSection">
            <h1>
              Work Experience <hr />
            </h1>
            <img
              src={workingMen}
              alt="workingMenImage"
              className="experience___style___headlineSection--imgae1"
            />
            <Link
              to=""
              className="experience___style___headlineSection--imgae2 pulsate-fwd"
            >
              <img src={hireMe} alt="hireMeImage" />
            </Link>
          </div>
          <div className="experience___style___workingDetail">
            {experienceDetail.map((item, index) => {
              return (
                <div
                  className="exerience___style__workingDetail--detail"
                  key={index}
                >
                  <p>{item.duration}</p>
                  <span className="exerience___style__workingDetail--detail___icon">
                    <i class="fa-solid fa-briefcase"></i>
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
    );
  }
}
