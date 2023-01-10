import React, { useState} from "react";
import appData from "./appData.json";
import webData from "./webData.json";
import webDevData from "./wedDevData.json";
import { Data } from "./allWorksData";

import { Link } from "react-router-dom";

import "./portfolio.css";

import projectHeaderImage from "../../Assets/projectHerderimage.svg";
function Portfolio() {
  const [all, setAll] = useState("allProject");
  const [data, setData] = useState();
  const [active_one, setActive_one] = useState(true);
  const [active_two, setActive_two] = useState(false);
  const [active_three, setActive_three] = useState(false);
  const [active_four, setActive_four] = useState(false);

  const active = (num) => {
    switch (num) {
      case 1:
        return (
          setActive_one(true),
          setActive_two(false),
          setActive_three(false),
          setActive_four(false)
        );
      case 2:
        return (
          setActive_one(false),
          setActive_two(true),
          setActive_three(false),
          setActive_four(false)
        );

      case 3:
        return (
          setActive_one(false),
          setActive_two(false),
          setActive_three(true),
          setActive_four(false)
        );
      case 4:
        return (
          setActive_one(false),
          setActive_two(false),
          setActive_three(false),
          setActive_four(true)
        );
      default:
        return;
    }
  };

  const store = (set) => {
    localStorage.setItem("name", set);
  };
  return (
    <>
      <header className="portfolio">
        <div className="portfolio___detail">
          <h2>A Sneak Peak Into Some Of My Works</h2>
          <p>
            There are some selected work which I making to gain my experience,
            Client, and for my company as employ, these works show my skills and
            my hard-working nature.
          </p>
        </div>
        <div className="portfolio___image">
          <img src={projectHeaderImage} alt=""></img>
        </div>
      </header>
      <section>
        <div className="portfolio____gallery">
          <div className="portfolio____gallery___heading">
            <h4 className="portfolio____gallery___heading--line1">portfolio</h4>
            <h1
            // data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-delay="50"
            >
              Selected work <hr />
            </h1>
          </div>
          <div className="portfolio____gallery___heading--links">
            <button
              onClick={(e) => {
                setAll("allProject");
                active(1);
              }}
              style={active_one ? { color: "#ff4655" } : { color: "#7865ff" }}
            >
              All project
            </button>
            <button
              onClick={(e) => {
                setAll("individual");
                setData(appData);
                active(2);
              }}
              style={active_two ? { color: "#ff4655" } : { color: "#7865ff" }}
            >
              Mobile Desgin
            </button>
            <button
              onClick={(e) => {
                setAll("individual");
                setData(webData);
                active(3);
              }}
              style={active_three ? { color: "#ff4655" } : { color: "#7865ff" }}
            >
              Web Desgin
            </button>
            <button
              onClick={(e) => {
                setAll("individual");
                setData(webDevData);
                active(4);
              }}
              style={active_four ? { color: "#ff4655" } : { color: "#7865ff" }}
            >
              Fornt-End Devlopement
            </button>
          </div>
        </div>
        {all === "allProject" ? (
          <div className="portfolio____gallery--cardSectionII">
            {Data.map((item, index) => {
              return (
                <div
                  key={index}
                  // data-aos-easing="linear"
                  // data-aos="fade-up"
                  className="portfolio____gallery--cardSection___cardII"
                  style={{
                    backgroundImage: `url(https://drive.google.com/uc?export=view&id=${item.bgImgURL})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#E9E9E9",
                  }}
                >
                  <div className="portfolio____gallery--cardSection___card--detail">
                    <div className="portfolio____gallery--cardSection___card--detail___textII">
                      <div>
                        <p>{item.date}</p>

                        <h3>{item.name}</h3>
                        {/* <h5>hello</h5> */}
                      </div>
                      {!item.set ? (
                        <Link
                          target="_blank"
                          rel="noreferrer"
                          to={item.url}
                          onClick={(e) => {
                            active(item.num);
                            store(item.element);
                          }}
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square pulsate-fwd "></i>
                        </Link>
                      ) : (
                        <button
                          rel="noreferrer"
                          onClick={(e) => {
                            setAll(item.set);
                            setData(item.url);
                            active(item.num);
                          }}
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square pulsate-fwd "></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="portfolio____gallery--cardSection">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  // data-aos-easing="linear"
                  // data-aos="fade-up"
                  className="portfolio____gallery--cardSection___card"
                  style={{
                    backgroundImage: `url(https://drive.google.com/uc?export=view&id=${item.bgImgURL})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#E9E9E9",
                  }}
                >
                  <div className="portfolio____gallery--cardSection___card--detail">
                    <div className="portfolio____gallery--cardSection___card--detail___text">
                      <div>
                        <p>{item.data}</p>
                        <h4>{item.name}</h4>
                        <p>{""}</p>
                      </div>
                      {item.url ? (
                        <a target="_blank" rel="noreferrer" href={item.url}>
                          <i className="fa-solid fa-arrow-up-right-from-square pulsate-fwd "></i>
                        </a>
                      ) : (
                        <button style={{ cursor: "no-drop" }}>
                          <i className="fa-solid fa-arrow-up-right-from-square pulsate-fwd "></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default Portfolio;
