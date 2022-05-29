import React, { Component } from "react";

import "./highlight.css";

export default class Highlight extends Component {
  cardDetail = [
    {
      icon: "fa-solid fa-mobile-button",
      cardHeader: "Mobile App Design",
      cardBody: "10+ Project",
    },
    {
      icon: "fa-solid fa-display",
      cardHeader: "Web App Design",
      cardBody: "15+ Project",
    },
    {
      icon: "fa-solid fa-code",
      cardHeader: "Front End Development",
      cardBody: "8+ Project",
    },
  ];

  detailLine = [
    {
      bodyLine:
        "I will help you finging a solution and solve your problems, I use process design to create digital products. Besids that also help their companey.",
    },
    {
      bodyLine:
        "I use process design to create digital products. Beside that also help their companey.",
    },
    {
      bodyLine:
        "I will help your to convert digital products to real web application to runing your companey on real world, Besids that also help their companey.",
    },
    {
      bodyLine:
        "I use process web techology to create web application. Beside that also help their companey.",
    },
  ];
  render() {
    return (
      <div className="highLight">
        <div className="highLight___cardSection">
          {this.cardDetail.map((item) => {
            return (
              <div className="highLight___cardSection--card" key={item.id}>
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
            <div className="highLight___detailSection--numberFiger___1">
              <div>
                <h1>&gt;1</h1>
                <h3>Years Experience Working</h3>
              </div>
            </div>
            <div className="highLight___detailSection--numberFiger___2">
              <div style={{ float: "right" }}>
                <h1>33+</h1>
                <h3>Project Completed</h3>
              </div>
            </div>
          </div>
          <div className="highLight___detailSection--line">
            <h1>What do I help ?<hr /> </h1> 
            {this.detailLine.map((line) => {
              return <p key={line.id}>{line.bodyLine}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
