import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true, 
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      //slidesToScroll: 1,
      cssEase: 'easeOutElastic',
      autoplaySpeed: 1000,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img id="bannerImg" src="images/banner/img1.jpg" alt="main banner"/>
          </div>
          <div>
            <img id="bannerImg" src="images/banner/img2.jpg" alt="main banner"/>
          </div>
          <div>
            <img id="bannerImg" src="images/banner/img3.jpg" alt="main banner"/>
          </div>
          <div>
            <img id="bannerImg" src="images/banner/img4.jpg" alt="main banner"/>
          </div>
          <div>
            <img id="bannerImg" src="images/banner/img5.jpg" alt="main banner"/>
          </div>
          <div>
            <img id="bannerImg" src="images/banner/img6.jpg" alt="main banner"/>
          </div>
        </Slider>
      </div>
    );
  }
}