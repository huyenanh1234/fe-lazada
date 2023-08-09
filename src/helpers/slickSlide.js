import React from "react";
import Slider from "react-slick";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useRef } from 'react';

export default function SimpleSlider() {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
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



export function MultipleItems() {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`images/productDetails/img${i + 1}.jpg`} />
        </a>
      );
    },
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const imageRef = useRef();
  return (
    <>
    <div className="galleryPreview">
      <div id="galleryPreviewContent" className="galleryPreviewContent">
          <img id="previewContentImg" src="images/productDetails/img1.jpg" ref={imageRef} alt=""/>
          <div id="previewHoverBox" className="previewHoverBox"></div>
      </div>
      <div id="previewZoomBox" className="previewZoomBox">
          <div id="zoomBox" className="zoomBox" ></div>
      </div>
    </div>
    <div className="slickContent">
      <Slider {...settings}>
      <div className="itemGallery">
        <img className="activeBorder" src="/images/productDetails/img1.jpg"/>
      </div>
      <div className="itemGallery">
        <img src="/images/productDetails/img2.jpg"/>
      </div>
      <div className="itemGallery">
        <img src="/images/productDetails/img3.jpg"/>
      </div>
      <div className="itemGallery">
        <img src="/images/productDetails/img4.jpg"/>
      </div>
      <div className="itemGallery">
        <img src="/images/productDetails/img5.jpg"/>
      </div>
      <div className="itemGallery">
        <img src="/images/productDetails/img6.jpg"/>
      </div>
      <div className="itemGallery">
        <img src="/images/productDetails/img7.jpg"/>
      </div>
      </Slider>
    </div>
    </>
  );
}

function NextArrow(props) {
  const {onClick } = props;
  return (
    <>
      <SlArrowRight className="slickNext" onClick={onClick}/>
    </>
  );
}

function PrevArrow(props) {
  const {onClick } = props;
  return (
    <>
      <SlArrowLeft className="slickPrev" onClick={onClick}/>
    </>
  );
}