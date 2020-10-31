import React from "react";

import { Grid, Typography } from "@material-ui/core";

import classes from "./ProductBox.module.css";

const ProductBox = ({ name }) => {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3}>
      <div className={classes.card}>
        <div className={classes.card_hr}></div>
        <div className={classes.card_text}>
          <p variant="h6">{name}</p>
        </div>
      </div>
    </Grid>
  );
};

export default ProductBox;
