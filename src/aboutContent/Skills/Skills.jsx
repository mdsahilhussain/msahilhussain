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
          {/* 
          //TODO : Writeing Specialty description============================================
          */}
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
                          alt={``}
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
                          alt={``}
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
