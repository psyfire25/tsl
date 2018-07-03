import React from 'react';
import Carousel from 'nuka-carousel';
import './slider.css';
import Img01 from '../../images/img01.png';
import Img02 from '../../images/img02.png';
import Img03 from '../../images/img03.png';
import Img04 from '../../images/img04.jpg';
import Img05 from '../../images/img05.jpg';

class Slider extends React.Component {
  render() {
    return (
    <div className="slider">
    <Carousel autoplay={true} width="100vw" wrapAround={true} slidesToShow={3}>
      <img src={Img01} alt="img"/>
      <img src={Img02} alt="img"/>
      <img src={Img03} alt="img"/>
      <img src={Img04} alt="img"/>
      <img src={Img05} alt="img"/>
    </Carousel>
  </div>
);
}
}

export default Slider;
