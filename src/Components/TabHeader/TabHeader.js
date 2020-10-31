import React from "react";

import { Grid, Typography } from "@material-ui/core";

import classes from "./TabHeader.module.css";

const TabHeader = ({ logo, title, intro }) => {
  return (
    <div className={classes.tabHeader}>
      <Grid container>
        {logo ? (
          <Grid item xs={12} md={4} lg={3}>
            <div className={classes.pro_logo}>
              <img src={logo} />
            </div>
          </Grid>
        ) : null}
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
          {intro && <Typography variant="subtitle1">{intro}</Typography>}
        </Grid>
      </Grid>
    </div>
  );
};

export default TabHeader;
