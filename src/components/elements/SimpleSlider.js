import React from "react";
import Slider from "react-slick-16";
import './slider.css';
import Img01 from '../../images/img01.png';
import Img02 from '../../images/img02.png';
import Img03 from '../../images/img03.png';

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed:1000,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings} className="slider">
          <div>
            <img src={Img01} alt="img"/>
            <img src={Img02} alt="img"/>
            <img src={Img03} alt="img"/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
