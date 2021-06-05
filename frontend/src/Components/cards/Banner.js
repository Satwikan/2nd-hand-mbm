import { Carousel } from "react-bootstrap";
import React from "react";
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // This image is little too bright that's why i applied extra css
            style={{ filter: "brightness(80%)"}}
            src="https://raw.githubusercontent.com/Satwikan/2nd-hand-mbm/main/frontend/Apna%20frontend/public/banner2.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/Satwikan/2nd-hand-mbm/main/frontend/Apna%20frontend/public/banner.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/Satwikan/2nd-hand-mbm/main/frontend/Apna%20frontend/public/banner3.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
