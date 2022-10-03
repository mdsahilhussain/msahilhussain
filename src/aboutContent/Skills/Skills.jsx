import React, { Component } from "react";

import { skillList } from "./skillList";

import "./skills.css";

import skillsIcon from "../../Assets/skillsIcon.png";
import toolsIcon from "../../Assets/toolsIcon.png";

export default class Skills extends Component {
  render() {
    const list = skillList;
    return (
      <div className="skills">
        <h3>My Specialty in</h3>
        <p>
          As an analogy to my degree, I have completed Front-End Development and
          UI and UX Design courses on different learning platforms, along with
          some related projects. I work on these technologies as part of my tech
          stack
        </p>
        <div className="skills___cardBox">
          {list.map((item, index) => {
            return (                                 
              <div className="skills___cardBox___card" key={index}>
                <h4>
                  <i className={item.icon}></i> {item.skillsName}
                </h4>
                <p>{item.desc} </p>
                <h5>
                  <img src={skillsIcon} alt="skillsIcon" /> Skills
                </h5>
                <ul>
                  {item.skillSet.map((subItem, index) => {
                    return (
                      <li key={index}>
                        <img
                          src={`https://drive.google.com/uc?export=view&id=${subItem.skill}`}
                          alt={`skill set images`}
                        />
                      </li>
                    );
                  })}
                </ul>
                <h5>
                  <img src={toolsIcon} alt="toolsIcon" /> Tools
                </h5>
                <ul>
                  {item.toolSet.map((subItemII, index) => {
                    return (
                      <li key={index}>
                        <img
                          src={`https://drive.google.com/uc?export=view&id=${subItemII.tool}`}
                          alt={`tools set images`}
                        />
                      </li>
                    );
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
