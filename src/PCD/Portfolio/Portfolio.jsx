import React, { useState } from "react";
import { appData } from "./appData";
import { webData } from "./webData";
import { webDevData } from "./wedDevData";

import { Link } from "react-router-dom";

import "./portfolio.css";

import projectHeaderImage from "../../Assets/projectHerderimage.png";
import AllWorks from "./AllWorks";
function Portfolio() {
  const [all, setAll] = useState("allProject");
  const [data,setData] =useState()

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
            < button
              onClick={(e)=>setAll('allProject')}
            >
              All project
            </ button>
            < button
              onClick={(e)=>{setAll('individual'); setData(appData)}}
            >
              Mobile Desgin
            </ button>
            < button
              onClick={(e)=>{setAll('individual'); setData(webData)}}
            >
              Web Desgin
            </ button>
            < button
              onClick={(e)=>{setAll('individual'); setData(webDevData)}}
            >
              Fornt-End Devlopement
            </ button>
          </div>
        </div>
        {all ==='allProject' ? (
          <div className="portfolio____gallery--cardSectionII">
            <AllWorks />
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
                    backgroundColor:"#E9E9E9"
                  }}
                >
                  <div className="portfolio____gallery--cardSection___card--detail">
                    <div className="portfolio____gallery--cardSection___card--detail___text">
                      <div>
                        <p>{item.data}</p>
                        <h4>{item.name}</h4>
                        <p>hello</p>
                      </div>
                      <Link target="_blank" rel="noreferrer" to={item.url}>
                        <i className="fa-solid fa-arrow-up-right-from-square pulsate-fwd "></i>
                      </Link>
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
