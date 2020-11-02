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
              <Image src="/images/1.jpg" unsized loading="eager" priority/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Image src="/images/2.jpg" unsized priority/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Image src="/images/3.jpg" unsized priority/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Image src="/images/4.jpg" unsized priority/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Image src="/images/5.jpg" unsized priority/>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
