import React from "react";

import { carouselData } from "../../Data/index";

import { Typography } from "@material-ui/core";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      {carouselData.map((slide, index) => (
        <Carousel.Item interval={5000} key={index}>
          <div
            style={{
              height: "90vh",
              background: `url('${slide.src}') no-repeat center center/cover`,
            }}
          >
            <div
              style={{
                height: "100%",
                background: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <div style={{ color: "#fff", maxWidth: "75%" }}>
                <Typography
                  style={{
                    lineHeight: 1.8,
                    wordSpacing: "5px",
                    fontWeight: "bold",
                    letterSpacing: "5px",
                  }}
                  variant="h4"
                >
                  {slide.txt1}
                </Typography>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
