import React from "react";

import Image from "next/image";

import { Typography, Grid } from "@material-ui/core";

import classes from "./Gallery.module.css";

import { galleryData } from "../../Data/imageGallery";

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
          <Grid container alignItems="center">
            {galleryData.map((src) => (
              <Grid
                key={src}
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={3}
                style={{ marginBottom: "1rem" }}
              >
                <Image
                  className={classes.gal_img}
                  src={src}
                  layout="responsive"
                  width={600}
                  height={400}
                  objectFit="fill"
                  quality={10}
                  loading="lazy"
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
