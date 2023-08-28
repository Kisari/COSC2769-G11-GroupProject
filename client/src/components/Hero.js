import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import image5 from "../assets/images/image5.webp";

const Hero = () => {
  return (
    <div className="container-lg">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
