import React from 'react'
import "./Carousel.css";

import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../Images/ThirdSlide.jpg'
import Slide2 from '../Images/SecondSlide.jpg'
import Slide3 from '../Images/FirstSlide.jpg'
const Slider = () => {
    return (
<Carousel className="caroussize">
  <Carousel.Item interval= '1500'>
    <img
      className="d-block w-100"
      src= {Slide1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval= '1500'>
    <img
      className="d-block w-100"
      src= {Slide2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item interval= '1500'>
    <img
      className="d-block w-100"
      src={Slide3}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
    )
}

export default Slider
