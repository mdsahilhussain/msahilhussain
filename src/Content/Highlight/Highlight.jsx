import React, { Component } from "react";

import "./highlight.css";

export default class Highlight extends Component {
  cardDetail = [
    {
      icon: "fa-solid fa-mobile-button",
      cardHeader: "Mobile App Design",
      cardBody: "10+ Project",
      delay: "100",
    },
    {
      icon: "fa-solid fa-display",
      cardHeader: "Web App Design",
      cardBody: "15+ Project",
      delay: "200",
    },
    {
      icon: "fa-solid fa-code",
      cardHeader: "Front End Development",
      cardBody: "8+ Project",
      delay: "300",
    },
  ];

  detailLine = [
    {
      bodyLine:
        "I will help you find a solution and solve your problems, I use process design to create digital products. Besides that also help their company.",
      delay: "300",
    },
    {
      bodyLine:
        "I use process design to create digital products. Besides that also help their company.",
      delay: "400",
    },
    {
      bodyLine:
        "I will help you to convert digital products to a real web application to running your company on real-world, Besides that also help their company.",
      delay: "500",
    },
    {
      bodyLine:
        "I use process web technology to create a web application. Besides that also help their company.",
      delay: "550",
    },
  ];
  render() {
    return (
      <div className="highLight">
        <div className="highLight___cardSection">
          {this.cardDetail.map((item) => {
            return (
              <div
                className="highLight___cardSection--card"
                key={item.id}
                data-aos="fade-up"
                // data-aos-offset="200"
                data-aos-delay={item.delay}
                data-aos-easing="linear"
              >
                <i className={item.icon}></i>
                <div>
                  <h4>{item.cardHeader}</h4>
                  <p>{item.cardBody}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="highLight___detailSection">
          <div className="highLight___detailSection--numberFiger">
            <div
              className="highLight___detailSection--numberFiger___1"
              data-aos="fade-up"
              // data-aos-offset="200"
              data-aos-dela="50"
              data-aos-easing="linear"
            >
              <div>
                <h1>&gt;1</h1>
                <h3>Years Experience Working</h3>
              </div>
            </div>
            <div
              className="highLight___detailSection--numberFiger___2"
              data-aos="fade-up"
              // data-aos-offset="200"
              data-aos-delay="100"
              data-aos-easing="liner"
            >
              <div style={{ float: "right" }}>
                <h1>33+</h1>
                <h3>Project Completed</h3>
              </div>
            </div>
          </div>
          <div className="highLight___detailSection--line">
            <h1
              data-aos="fade-up"
              // data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-easing="liner"
            >
              What do I help ?<hr />{" "}
            </h1>
            {this.detailLine.map((line) => {
              return (
                <p
                  key={line.id}
                  data-aos="fade-up"
                  // data-aos-offset="200"
                  data-aos-delay={line.delay}
                  data-aos-easing="linear"
                >
                  {line.bodyLine}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
