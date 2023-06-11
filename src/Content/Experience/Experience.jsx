import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./experience.css";
import workingMen from "../../Assets/working.png";
import hireMe from "../../Assets/hiremeImg.svg";
import workingHistory from "./workingHistory.json";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "linear",
    });
    AOS.refresh();
  }, []);

  const formatText = (text) => {
    const formattedText = text.replace(
      /<Strong>(.*?)<\/Strong>/g,
      (_, match) => `<strong>${match}</strong>`
    );
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };
  return (
    <>
      <div className="experience">
        <div className="experience___style">
          <div className="experience___style___headlineSection">
            <h4 className="experience___style___headlineSection--line1">
              experiences
            </h4>
            <h1 data-aos="fade-up">
              {formatText("Working history")} <hr />
            </h1>
            <img
              src={workingMen}
              alt="workingMenImage"
              className="experience___style___headlineSection--imgae1"
              data-aos="fade-up"
            />
            <Link to="/contact" className="experience___style___headlineSection--imgae2 pulsate-fwd">
              <img
                src={hireMe}
                alt="hireMeImage"
                data-aos="fade-up"
              />
            </Link>
          </div>
          <div className="experience___style___workingDetail">
            {workingHistory.map((item, index) => (
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
                <h4>{item.companyName}</h4>
                <h3>{item.jobTitle}</h3>
                <p>{formatText(item.aboutCompany)}</p>
                <ul>
                  {item.Roles.map((subitem, subIndex) => (
                    <li key={subIndex}>{formatText(subitem.role)}</li>
                  ))}
                </ul>
              </div>
            ))}
            <Link to="/contact" className="experience___style___workingDetail--imgae2 pulsate-fwd">
              <img
                src={hireMe}
                alt="hireMeImage"
                data-aos="fade-up"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
