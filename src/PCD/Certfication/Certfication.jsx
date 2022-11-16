import React, { Component } from "react";

import certficationData  from "./certficationData.json";
import "./certfication.css";
import { LoadingProvider } from "../../Context/LoadingContext";

export default class Certfication extends Component {
  render() {
    return (
      <div className="certification">
        <div className="certification___body sc2">
          {certficationData.map((item, index) => {
            return (
              <div className="certification___body--content">
                <div className="certification___body--image slide-in-bottom">
                  <LoadingProvider>
                    <img
                      src={`https://drive.google.com/uc?export=view&id=${item.imageURL}`}
                      alt=""
                      style={{ backgroundColor: "#E9E9E9" }}
                    />
                  </LoadingProvider>
                </div>
                <br />
                <div className="certification___body--detail">
                  <div className="certification___body--detail__content">
                    <h3 className="">
                      {item.headLine}
                      {item.url ? (
                        <a target="_blank" rel="noreferrer" href={item.url}>
                          <i className="fa-solid fa-arrow-up-right-from-square pulsate-fwd "></i>
                        </a>
                      ) : (
                        <button style={{ cursor: "no-drop" }}>
                          <i className="fa-solid fa-arrow-up-right-from-square pulsate-fwd "></i>
                        </button>
                      )}
                    </h3>
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
