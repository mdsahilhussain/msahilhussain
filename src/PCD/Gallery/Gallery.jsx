import React, { useState, useEffect } from "react";

// //*================================ react slick slider ================================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  photoData  from "./photoData.json";
import  paintingData  from "./paintingData.json";

import "./gallery.css";

function Gallery() {
  const [currid, setCurrid] = useState(1);
  const currentValue = localStorage.getItem("name");
  const [data, setData] = useState();

  useEffect(() => {
    switch (currentValue) {
      case "photoData":
        return setData(photoData);
      case "paintingData":
        return setData(paintingData);
      default:
        return;
    }
  }, [currentValue]);

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

  const close = () => {
    window.top.close();
    localStorage.clear();
  };

  return (
    <div className="gallery">
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <div className="gallery___slider--image" >
                <img
                  src={`https://drive.google.com/uc?export=view&id=${item.imageURl}`}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="gallery___slider--detail">
        <h5>
          <span>{currid}</span>
          {`/${data?.length}`}
        </h5>
        <h5>
          All photos are posted on <a href="https://instagram.com/creativecity_7?igshid=YmMyMTA2M2Y=">Instagram</a>.
        </h5>
        <button onClick={close}>
          <h5>Back</h5>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
