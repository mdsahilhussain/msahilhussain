import React, { Component } from "react";

import "./introduction.css";
import signaturImage from "../../Assets/signatur.png";
export default class Introdution extends Component {
  social = [
    {
      icon: "fa-brands fa-linkedin-in",
      url: "https://www.linkedin.com/in/m-sahil-hussain-75b5181a6/",
    },
    {
      icon: "fa-brands fa-behance",
      url: "https://www.behance.net/msahilhussain",
    },
    {
      icon: "fa-brands fa-github",
      url: "https://mdsahilhussain.github.io/gitprofile/",
    },
    {
      icon: "fa-brands fa-twitter",
      url: "",
    },
  ];
  projectNumber = [
    {
      num: "700+",
      topic: "DSA problem solve",
    },
    {
      num: "13+",
      topic: "App UI project",
    },
    {
      num: "15+",
      topic: "Web UI project",
    },
    {
      num: "8+",
      topic: "Front End Project",
    },
  ];
  render() {
    return (
      <div className="introduction">
        <p>Hello everyone</p>
        <h3>My self Md Sahil Hussain</h3>
        <h4>Front End Devloper & UI UX Devloper</h4>
        <p>
          I'm A 2022 Graduate In Computer Science And Engineering With A CGPA Of
          8.04/10. Currently, I Have Been Working At MindZenX As A Front-End
          Developer For 9 Months. I Am An Intermediate Web Developer And A
          Passionate UI And UX Developer. Analog To My Degree I Have Completed A
          Front-End Development And UI And UX Design Course On Different
          Learning Platforms, As Well As I Have Done A Project On It. I Have A
          Keen Interest In OOPS, OS, DSA,
          <br /> <br />
          Thanks for that all about meself
        </p>
        <img src={signaturImage} alt="" />
        <h4>M SAHIL HUSSAIN</h4>
        <ul>
          {this.social.map((item, index) => {
            return (
              <a target="_blank" rel="noreferrer" href={item.url} key={index}>
                <i className={item.icon}></i>
              </a>
            );
          })}
        </ul>
        <ul className="introduction___numberFiger">
          {this.projectNumber.map((item, index) => {
            return (
              <li>
                <h2 className="flicker-4">{item.num}</h2>
                <p>
                  {item.topic}
                  <i className="fa-solid fa-check introduction___numberFiger--check"></i>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
