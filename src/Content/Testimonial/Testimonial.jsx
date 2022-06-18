import React, { Component } from "react";

//*================================ react slick slider ================================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//*================================ css style sheet ================================
import "./testimonial.css";

//*================================ testimonial data ================================
import { peopleDetails } from "./peopleDetail";

export default class Testimonial extends Component {
  SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="fa-solid fa-arrow-right-long arrow next_arrow"
        // style={{ ...style, background: "red" }}
        onClick={onClick}
      />
    );
  }

  SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={"fa-solid fa-arrow-left-long arrow prev_arrow"}
        // style={{ ...style,  background: "green" }}
        onClick={onClick}
      />
    );
  }
  render() {
    const cardDetail = peopleDetails;
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      nextArrow: <this.SampleNextArrow />,
      prevArrow: <this.SamplePrevArrow />,
    };
    return (
      <div className="testimonial">
        <div className="testimonial___heading">
          <h4 className="testimonial___heading--line1">Testimonial</h4>
          <h1
            data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-delay="50"
          >
            People talk about me <hr />
          </h1>

          <div className="testimonial___card">
            <Slider {...settings}>
              {cardDetail.map((item, index) => {
                return (
                  <div className="testimonial___card--height" key={"index"}>
                    <div className="testimonial___card--contant">
                      <div
                        className="testimonial___card--contant___image"
                        data-aos="fade-up"
                        // data-aos-offset="200"
                        // data-aos-delay="50"
                      >
                        <img
                          src={`https://drive.google.com/uc?export=view&id=${item.imageURL}`}
                          alt={`${item.userName}photos`}
                        />
                      </div>
                      <div
                        className="testimonial___card--contant___detailcard"
                        data-aos="fade-up"
                        // data-aos-offset="200"
                        data-aos-delay="300"
                      >
                        <div className="testimonial___card--contant___detail">
                          <h3>{item.userName}</h3>
                          <h4>{item.userProf}</h4>
                          <p>{item.despc}</p>
                          <div className="testimonial___card--contant___detail--icon">
                            {item.social.map((subItem, index) => {
                              return (
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  href={subItem.Url}
                                  key={index}
                                >
                                  <i className={subItem.Icon}></i>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            {/* <div className="testimonial___card--arrow">
            <span className="arrow_prev"><i className="fa-solid fa-arrow-left-long" onClick={this.previous}></i></span>
              <span className="arrow_next"><i className="fa-solid fa-arrow-right-long" onClick={this.next}></i></span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
