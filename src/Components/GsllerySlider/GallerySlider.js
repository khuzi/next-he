import React from "react";
import Image from "next/image";

import { Typography, Grid } from "@material-ui/core";

import classes from "./Gallery.module.css";

const GallerySlider = () => {
  return (
    <section>
      <div className="mainWarper">
        <div className="heading">
          <Typography variant="h2">Image Gallery</Typography>
        </div>
      </div>
      <div className={classes.gallery}>
        <div className={classes.overlay}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Image src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js.png" unsized loading="eager" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Image src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js.png" unsized />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Image src="/3.jpg" unsized />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Image src="/4.jpg" unsized />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Image src="/5.jpg" unsized />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
