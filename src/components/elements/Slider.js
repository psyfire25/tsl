import React from 'react';
import Carousel from 'nuka-carousel';
import './slider.css';
import Img01 from '../../images/img01.png';
import Img02 from '../../images/img02.png';
import Img03 from '../../images/img03.png';

const Slider = () =>
  <div className="slider">
    <Carousel autoplay="true" width="550px" wrapAround="true">
      <img src={Img01} alt="img"/>
      <img src={Img02} alt="img"/>
      <img src={Img03} alt="img"/>
    </Carousel>
  </div>

  export default Slider;
