import React from "react";

import { Grid, Typography } from "@material-ui/core";

import classes from "./TabHeader.module.css";

const TabHeader = ({ logo, title }) => {
  return (
    <div className={classes.tabHeader}>
      <Grid container>
        <Grid item xs={12} md={4} lg={3}>
          <div className={classes.pro_logo}>
            <img src={logo} />
          </div>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          item
          xs={12}
          md={5}
          lg={5}
        >
          <Typography
            style={{ paddingBottom: "1rem", fontWeight: "bold" }}
            variant="h4"
          >
            {title}
          </Typography>
          <Typography variant="subtitle1">
            Sulphuric Acid is a strong dibasic acid. in addition, it is also a
            strong oxidizing and dehydrating agent. It is one of the most widely
            employed chemicals and enters into many industries, though
            infrequently appearing in the finished material.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default TabHeader;
