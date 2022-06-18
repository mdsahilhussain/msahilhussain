import React, { useState, useEffect } from "react";

// //*================================ react slick slider ================================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { photoData } from "./photoData";

import "./gallery.css";

function GalleryPG() {
  const Photogarphy = photoData;
  const [currid, setCurrid] = useState(1);
  // const [desc, setDesc] = useState("");

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return <div className=" galleryArrow galleryNext" onClick={onClick} />;
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return <div className={" galleryArrow galleryPrev"} onClick={onClick} />;
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current) => setCurrid(current + 1),
    afterChange: (current) => setCurrid(current + 1),
  };

  return (
    <div className="gallery">
      <Slider {...settings}>
        {Photogarphy.map((item, index) => {
          return (
            <>
              <div className="gallery___slider--image" key={index}>
                <img
                  src={`https://drive.google.com/uc?export=view&id=${item.imageURl}`}
                  alt=""
                />
              </div>
            </>
          );
        })}
      </Slider>
      <div className="gallery___slider--detail">
        <h5>
          {currid}
          <span>{`/${Photogarphy.length}`}</span>
        </h5>
        <h5>Back</h5>
      </div>
    </div>
  );
}

export default GalleryPG;
