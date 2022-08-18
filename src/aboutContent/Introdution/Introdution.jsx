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
          I am from katihar Bihar, I have done my 10th form Rama Krishana
          Mission VidyaMandir, Katihar. Currently, I am pursuing B.Tech Degree
          in Computer Science and Engineering from Darbhanga College of
          Engineering Darbhanga. I am an intermediate web developer and a
          passionate UI and UX developer. Analog to my degree I have completed a
          front-end development and UI and UX design course on different
          learning platforms, as well as I have done a project on it. I have a
          keen interest in OOPS, OS, DSA, <br /> <br />
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
