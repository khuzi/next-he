import React from "react";
import Image from "next/image";

import { carouselData } from "../../Data/index";

import { Typography } from "@material-ui/core";
import { Carousel } from "react-bootstrap";

import classes from "./Slider.module.css";

const Slider = () => {
  return (
    <Carousel>
      {carouselData.map((slide, index) => (
        <Carousel.Item interval={2000} key={index}>
          <div className={classes.warper}>
            <Image
              objectFit="cover"
              layout="fill"
              loading="lazy"
              src={slide.src}
              quality={10}
            />
            <div className={classes.overlay}>
              <div style={{ color: "#fff", maxWidth: "75%" }}>
                <Typography className={classes.content} variant="h4">
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
