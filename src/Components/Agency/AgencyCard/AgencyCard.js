import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import classes from "./AgencyCard.module.css";

export default function RecipeReviewCard({ title, media, list }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card className={classes.root}>
        <CardHeader
          title={
            <Typography align="center" variant="h5">
              {title}
            </Typography>
          }
        />
        <CardMedia
          className={classes.media}
          image={media}
          title="Paella dish"
        />
        <CardContent style={{ background: "#f4f4f4" }}>
          <div className={classes.usage}>
            <Typography variant="h5" component="p" align="center">
              Usage
            </Typography>
          </div>
          <div className={classes.list}>
            <ul>
              {list.map((item, index) => (
                <li key={index}>
                  <Typography variant="h6" align="left">
                    <i
                      style={{ paddingRight: "1rem" }}
                      className="fas fa-arrow-right"
                    ></i>
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
