import { Carousel } from "react-bootstrap";
import React from "react";

const Banner = () => {
  const carouselStyle = { height: "350px" };
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // This image is little too bright that's why i applied extra css
            style={{ filter: "brightness(80%)", ...carouselStyle }}
            src="/banner2.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={carouselStyle}
            src="/banner.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={carouselStyle}
            src="banner3.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
