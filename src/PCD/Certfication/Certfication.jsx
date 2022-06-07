import React, { Component } from "react";


import { certficationData } from "./certficationData";
import "./certfication.css";

export default class Certfication extends Component {
  render() {
    const data = certficationData;

    return (
      <div className="certification">
        <div className="certification___body sc2">
          {data.map((item, index) => {
            return (
              <div className="certification___body--content">
                <div className="certification___body--image slide-in-bottom">
                  <img
                    src={`https://drive.google.com/uc?export=view&id=${item.imageURL}`}
                    alt=""
                  />
                </div>
                <br />
                <div className="certification___body--detail">
                  <div className="certification___body--detail__content">
                    <h2 className="">{item.headLine}</h2>
                    <hr />
                    <p>{item.decr}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
