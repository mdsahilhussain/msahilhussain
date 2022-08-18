import React, { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import { Education, Introdution, Skills } from "../aboutContent";

import circleShapOne from "../Assets/circleShapOne.png";
import circleShapTwo from "../Assets/circleShapTwo.png";
import circleShapThree from "../Assets/circleShapThree.png";
import svgShapOne from "../Assets/svgShapOne.png";

function About() {
  let [perams, setPerams] = useState("addVideo");
  let [subtitle, setSubtitle] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
      console.log("moblie");
    } else {
      setIsMobile(false);
      console.log("non-moblie");
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about">
      <div className="about___heading">
        <div>
          <h4 className="about___heading--line1">{subtitle}</h4>
          <button
            className="about___heading--btn"
            onClick={() => setPerams("addVideo", setSubtitle(""))}
          >
            about me
          </button>
        </div>
        <div className="about___heading--links">
          <NavLink
            to={"introdution"}
            onClick={() => setSubtitle("introdution", setPerams("removeVideo"))}
            className={({ isActive }) => (isActive ? "aboutactive" : "")}
          >
            Introdution
          </NavLink>
          <NavLink
            to={"skills"}
            onClick={() => setSubtitle("skills", setPerams("removeVideo"))}
            className={({ isActive }) => (isActive ? "aboutactive" : "")}
          >
            Skills
          </NavLink>
          <NavLink
            to={"qualification"}
            onClick={() =>
              setSubtitle("qualification", setPerams("removeVideo"))
            }
            className={({ isActive }) => (isActive ? "aboutactive" : "")}
          >
            Qualification
          </NavLink>
        </div>
      </div>
      {perams === "addVideo" ? (
        <div className="about___contantOne ">
          <img
            src={circleShapThree}
            className="about___contantOne--image1"
            alt="circleShapThree"
          />
          <img
            src={circleShapTwo}
            className="about___contantOne--image2"
            alt="circleShapTwo"
          />
          <img
            src={circleShapOne}
            className="about___contantOne--image3"
            alt="circleShapOne"
          />
          <img
            src={svgShapOne}
            className="about___contantOne--image4"
            alt="svgShapOne"
          />
          {isMobile ? (
            <div className="isMobileVideo">
              <video width="100%" height="100%" controls>
                <source
                  src="https://drive.google.com/uc?export=view&id=1nIvT5zgRirSMAZYoTctMilLh5vy5t96v"
                  type="video/mp4"
                />
              </video>
            </div>
          ) : undefined}
          {isMobile ? undefined : (
            <div className="about___contantOne--video">
              <video width="100%" height="100%" controls>
                <source
                  src="https://drive.google.com/uc?export=view&id=1ajbcjzA5sZQS0zzkdX873L8EB1W3wKVO"
                  type="video/mp4"
                />
              </video>
            </div>
          )}
        </div>
      ) : (
        <div className="about___contantTwo ">
          <div className="about___contantTwo--video">
            {isMobile ? undefined : (
              <video width="100%" height="100%" controls>
                <source
                  src="https://drive.google.com/uc?export=view&id=1nIvT5zgRirSMAZYoTctMilLh5vy5t96v"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div className="about___contantTwo--components">
            <Routes>
              <Route path={"introdution"} element={<Introdution />} />
              <Route path={"skills"} element={<Skills />} />
              <Route path={"qualification"} element={<Education />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
// ?https://drive.google.com/file/d/1ajbcjzA5sZQS0zzkdX873L8EB1W3wKVO/view?usp=sharing
