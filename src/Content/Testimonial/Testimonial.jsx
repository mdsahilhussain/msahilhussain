import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./testimonial.css";
import { peopleDetails } from "./peopleDetail";

export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
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
    };
    return (
      <div className="testimonial">
        <div className="testimonial___heading">
          <h4 className="testimonial___heading--line1">Testimonial</h4>
          <h1>
            People talk about me <hr />
          </h1>

          <div className="testimonial___card">
            <Slider {...settings}>
              {cardDetail.map((item, index) => {
                return (
                  <div className="testimonial___card--height" key={"index"}>
                    <div className="testimonial___card--contant">
                      <div className="testimonial___card--contant___image">
                        <img
                          src={`https://drive.google.com/uc?export=view&id=${item.imageURL}`}
                          alt={`${item.userName}photos`}
                        />
                      </div>
                      <div className="testimonial___card--contant___detailcard">
                        <div className="testimonial___card--contant___detail">
                          <h3>{item.userName}</h3>
                          <h4>{item.userProf}</h4>
                          <p>{item.despc}</p>
                          <div className="testimonial___card--contant___detail--icon">
                            {item.social.map((subItem, index) => {
                              return (
                                <a href={subItem.Url} key={index}>
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
            <div className="testimonial___card--arrow">
            <i type="submit" className="fa-solid fa-arrow-left-long prev" onClick={this.previous}></i>
              <i className="fa-solid fa-arrow-right-long" onClick={this.next}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

