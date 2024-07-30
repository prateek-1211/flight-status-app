import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plane1 from '../assets/plane1.png';
import plane2 from '../assets/plane2.png';
import plane3 from '../assets/plane3.png';
import './styles/Content.css'; // Import the new CSS file

function Content() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="main-container">
      <div className='slider-container'>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.img} className="slide">
                <div className='slide-image-container'>
                  <img src={d.img} alt="" className="slide-image"/>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const data = [
  { img: plane1 },
  { img: plane2 },
  { img: plane3 }
];

export default Content;
