import React from "react";
import "./education.css";

const Education = () => {
  const educationHistory = [
    {
      duration: "may, 2018 - Present",
      companyName: "Darbhanga College of Engineering, Darbhanga",
      jobTitle: "graduation",
      aboutCompany:
        "I am pursuing my Bachelor of Technology Degree in Computer Science and Engineering.",
      roles: [
        {
          role: "with 76.38%",
        },
      ],
    },
    {
      duration: "may, 2016 - march, 2018",
      companyName: "Scottish Public School, Katihar",
      jobTitle: "intermediate",
      aboutCompany:
        "I have done my intermediate in physics, maths, and chemistry stream.",
      roles: [
        {
          role: "with 50%",
        },
      ],
    },
    {
      duration: "march, 2006 - march, 2016",
      companyName: "Ramakrishna Mission Vidyamandir, Katihar",
      jobTitle: "matriculation in general study",
      aboutCompany:
        "I have done my matriculation in the general study stream.",
      roles: [
        {
          role: "with 74.1%",
        },
      ],
    },
  ];

  return (
    <div className="education">
      <div className="education___style___workingDetail">
        {educationHistory.map((item, index) => (
          <div className="education___style__workingDetail--detail" key={index}>
            <p>{item.duration}</p>
            <span className="education___style__workingDetail--detail___icon">
              <i className="fa-solid fa-school-flag"></i>
            </span>
            <h4>{item.companyName}</h4>
            <h3>{item.jobTitle}</h3>
            <p>{item.aboutCompany}</p>
            <ul>
              {item.roles.map((subitem, subIndex) => (
                <li key={subIndex}>{subitem.role}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
