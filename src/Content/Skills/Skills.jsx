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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
          pellentesque dui dui, phasellus vestibulum consequat odio sociis. Ac
          vel sed viverra ornare placerat vitae egestas ut sit. Feugiat metus
          vel pharetra facilisi posuere. Accumsan porttitor amet enim, ut
          mauris.
        </p>
        <div className="skills___cardBox">
          {list.map((item, index) => {
            return (
              <div className="skills___cardBox___card" key={index}>
                <h3>
                  <i className={item.icon}></i> {item.skillsName}
                </h3>
                <p>{item.desc} </p>
                <h4>
                  <img src={skillsIcon} alt="skillsIcon" /> Skills
                </h4>
                <ul>
                  {item.skillSet.map((subItem, index) => {
                    return (
                      <li>
                        {subItem.skill} <span></span>
                      </li>
                    );
                  })}
                </ul>
                <h4>
                  <img src={toolsIcon} alt="toolsIcon" /> Tools
                </h4>
                <ul>
                  {item.toolSet.map((subItemII, index) => {
                    return <li key={index}>{subItemII.tool}</li>;
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
