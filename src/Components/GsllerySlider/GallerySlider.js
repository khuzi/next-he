import React from "react";

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
              <img src="/images/1.jpg" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <img src="/images/2.jpg" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <img src="/images/3.jpg" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <img src="/images/4.jpg" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <img src="/images/5.jpg" />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
