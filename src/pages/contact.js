import React from "react";

import { contactData, contactInfo } from "../Data/index";

import { Typography, Grid, TextField, Hidden } from "@material-ui/core";

import classes from "../styles/contact.module.css";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <div className="mainWarper">
        <div className="heading">
          <Typography variant="h2">Contact Us</Typography>
        </div>
        <Grid container justify="space-between">
          <Grid item xs={12} md={5} lg={6}>
            <form>
              {contactData.map((field) => (
                <div key={field.label} className={classes.formgroup}>
                  <label>{field.label}</label>
                  <input placeholder={field.placeholder} />
                </div>
              ))}
              <div className={classes.formgroup}>
                <label>Message</label>
                <textarea
                  placeholder="Enter Message"
                  className={classes.txtArea}
                />
              </div>
              <div className={classes.btn}>
                <button>Submit</button>
              </div>
            </form>
          </Grid>
          <Hidden only={["xs", "sm"]}>
            <Grid item lg={1} style={{ display: "grid", placeItems: "center" }}>
              <div className={classes.divider}></div>
            </Grid>
          </Hidden>
          <Grid container item xs={12} md={5} lg={5}>
            <div className={classes.contactInfo}>
              <ul>
                {contactInfo.map((info) => (
                  <li key={info.i}>
                    <Grid container alignItems="center">
                      <Grid item xs={2}>
                        <i className={info.i}></i>
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant="h5">{info.txt}</Typography>
                      </Grid>
                      <br />
                      <br />
                    </Grid>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Contact;
