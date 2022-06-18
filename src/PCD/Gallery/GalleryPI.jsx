import React, { useState, useEffect } from "react";

// //*================================ react slick slider ================================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { paintingData } from "./paintingData";

import "./gallery.css";

function GalleryPI() {
  const Painting = paintingData;
  const [currid, setCurrid] = useState(1);

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
        {Painting.map((item, index) => {
          return (
            <div
              className="gallery___slider--image"
              key={index}
              onChange={() =>
                this.componentDidMount(this.setState({ currUid: index }))
              }
            >
              <img
                src={`https://drive.google.com/uc?export=view&id=${item.imageURl}`}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
      <div className="gallery___slider--des">
        <h5>
          {currid}
          <span>{`/${Painting.length}`}</span>
        </h5>
        <h5>{}</h5>
        <h5>Back</h5>
      </div>
    </div>
  );
}

export default GalleryPI;
