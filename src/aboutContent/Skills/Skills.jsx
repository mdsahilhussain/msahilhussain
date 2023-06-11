import React from "react";
import { skillList } from "./skillList";
import "./skills.css";
import skillsIcon from "../../Assets/skillsIcon.png";
import toolsIcon from "../../Assets/toolsIcon.png";

const Skills = () => {
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
        {list.map((item, index) => (
          <div className="skills___cardBox___card" key={index}>
            <h4>
              <i className={item.icon}></i> {item.skillsName}
            </h4>
            <p>{item.desc} </p>
            <h5>
              <img src={skillsIcon} alt="skillsIcon" /> Skills
            </h5>
            <ul>
              {item.skillSet.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <img
                    src={`https://drive.google.com/uc?export=view&id=${subItem.skill}`}
                    alt={`skill set images`}
                  />
                </li>
              ))}
            </ul>
            <h5>
              <img src={toolsIcon} alt="toolsIcon" /> Tools
            </h5>
            <ul>
              {item.toolSet.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <img
                    src={`https://drive.google.com/uc?export=view&id=${subItem.tool}`}
                    alt={`tools set images`}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
