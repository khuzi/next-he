import React from "react";
import dynamic from "next/dynamic";

import Spinner from "../Components/Spinner/Spinner";

const GallerySlider = dynamic(
  () => import("../Components/GsllerySlider/GallerySlider"),
  {
    loading: () => <Spinner />,
    ssr: false,
  }
);

import { Grid, Typography } from "@material-ui/core";

import classes from "../styles/about.module.css";

const about = () => {
  return (
    <section className={classes.about}>
      <div className="mainWarper">
        <div className="heading">
          <Typography variant="h2">About Us</Typography>
        </div>
        <Grid container alignItems="center">
          <Grid item xs={12} md={7} lg={7}>
            <div className={classes.content}>
              <Typography variant="subtitle1">
                Akbari Chemical Industries Private Limited (ACI) was established
                in 1979 with a vision to produce quality industrial chemicals
                and to give support to nation’s export potential. Since, its
                humble inception in 1979 with a Sulphuric Acid Plant, ACI has
                grown and expanded adding several important industrial chemicals
                to its products range over three decades. Today, the company’s
                product range in addition to Sulphuric Acid includes Formic
                Acid, Aluminium Sulphate, Sodium Sulphate, Single Super
                Phosphate (SSP), Acetec® and Sulphonic Acid (LABSA). All the
                products are manufactured on imported technology plants from
                China, Italy and United Kingdom. Establishment of a Linear Alkyl
                Benzene Sulphonic Acid (LABSA) or simply ‘Sulphonic acid’ (soft
                grade) production plant is the latest diversification project of
                ACI. Keeping in view the gap in supply and demand, ACI is
                already in process to expand its production facility in near
                future Insha’Allah.
              </Typography>
            </div>
          </Grid>
          <Grid item lg={5} md={5} xs={12}>
            <div className={classes.img}>
              <img src="/images/about-bg.jpg" />
            </div>
          </Grid>
        </Grid>
      </div>
      <GallerySlider />
    </section>
  );
};

export default about;
