import React, { Component } from "react";

import "./education.css";

export default class Experience extends Component {
  educationHistory = [
    {
      duration: "may, 2018 -  Present",
      companeyName: "Darbhanga College of Engineering, Darbhanga",
      jobTitle: "graduation",
      aboutCompaney:
        "I am pursuing my Bachelor of Technology Degree in Computer Science and Engineering.",
      Roles: [
        {
          role: "with 72.72% ^",
        },
      ],
    },
    {
      duration: "may, 2016 -  march, 2018",
      companeyName: "scottish public school, katihar",
      jobTitle: "intermediate",
      aboutCompaney:
        "I have done my intermediate in physics, maths, and chemistry stream.",
      Roles: [
        {
          role: "with 50%",
        },
      ],
    },
    {
      duration: "march, 2006 -  march, 2016",
      companeyName: "Ramakrishna Mission Vidyamandir, Katihar",
      jobTitle: "matriculation in genral study",
      aboutCompaney:
        "I have done my matriculation in the general study stream.",
      Roles: [
        {
          role: " with 74.1%",
        },
      ],
    },
  ];
  render() {
    return (
      <div className="education">
        <div className="education___style___workingDetail">
          {this.educationHistory.map((item, index) => {
            return (
              <div
                className="education___style__workingDetail--detail"
                key={index}
              >
                <p>{item.duration}</p>
                <span className="education___style__workingDetail--detail___icon">
                  <i class="fa-solid fa-school-flag"></i>
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
    );
  }
}
