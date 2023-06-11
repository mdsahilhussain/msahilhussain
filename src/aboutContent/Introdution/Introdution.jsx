import React from "react";
import "./introduction.css";
import signatureImage from "../../Assets/signatur.png";

const Introduction = () => {
  const social = [
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

  const projectNumber = [
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

  return (
    <div className="introduction">
      <p>Hello everyone</p>
      <h3>My self Md Sahil Hussain</h3>
      <h4>Front End Developer & UI/UX Developer</h4>
      <p>
        I'm a 2022 Graduate in Computer Science and Engineering with a CGPA of
        8.04/10. Currently, I have been working at MindZenX as a Front-End
        Developer for 9 months. I am an intermediate web developer and a
        passionate UI/UX developer. Alongside my degree, I have completed a
        Front-End Development and UI/UX Design course on different learning
        platforms, and I have also worked on projects related to it. I have a
        keen interest in OOPS, OS, DSA.
        <br />
        <br />
        Thanks for learning about me!
      </p>
      <img src={signatureImage} alt="" />
      <h4>M SAHIL HUSSAIN</h4>
      <ul>
        {social.map((item, index) => (
          <a target="_blank" rel="noreferrer" href={item.url} key={index}>
            <i className={item.icon}></i>
          </a>
        ))}
      </ul>
      <ul className="introduction___numberFiger">
        {projectNumber.map((item, index) => (
          <li key={index}>
            <h2 className="flicker-4">{item.num}</h2>
            <p>
              {item.topic}
              <i className="fa-solid fa-check introduction___numberFiger--check"></i>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Introduction;
