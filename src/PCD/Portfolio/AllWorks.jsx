import React from "react";
import { Link } from "react-router-dom";

import "./portfolio.css";

function AllWorks() {
  const Data = [
    {
      name: "Photogarphy",
      date: "",
      url: "/photogallery",
      bgImgURL: "1k8HpgubgRJToUjEs6ofuVaXV7Nj_3oHL",
    },
    {
      name: "Painting",
      date: "",
      url: "/photogallery",
      bgImgURL: "1OJcMoSY2tJJu2lbLCYFwZPGOPEfkiFl4",
    },
    {
      name: "Mobile Desgin",
      date: "",
      url: "/photogallery",
      bgImgURL: "10i0Rs7HJcqZyxZDzBeLHmcHR-xspNaB2",
    },
    {
      name: " Web Desgin",
      date: "",
      url: "/photogallery",
      bgImgURL: "1z4T6FRryZ6ZIOmMrO5vatrtkFciXB-pZ",
    },
    {
      name: "Fornt-End Devlopement",
      date: "",
      url: "/photogallery",
      bgImgURL: "1hjoQX_amfGQVH5jd_Or8HYC0EsGQl72j",
    },
  ];
  return (
    <>
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
              backgroundColor:"#E9E9E9"
            }}
          >
            <div className="portfolio____gallery--cardSection___card--detail">
              <div className="portfolio____gallery--cardSection___card--detail___textII">
                <div>
                  <p>{item.date}</p>
                  <h3>{item.name}</h3>
                  <h5>hello</h5>
                </div>
                <Link target="_blank" rel="noreferrer" to={item.url}>
                  <i className="fa-solid fa-arrow-up-right-from-square pulsate-fwd "></i>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AllWorks;
