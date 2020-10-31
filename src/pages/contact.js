import React from "react";

import { contactData, contactInfo } from "../Data/index";

import { Typography, Grid, Hidden, Divider } from "@material-ui/core";

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
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              {contactData.map((field) => (
                <div key={field.label} className={classes.formgroup}>
                  <label htmlFor={field.type}>{field.label}</label>
                  <input
                    placeholder={field.placeholder}
                    required
                    type={field.type}
                    name={field.type}
                  />
                </div>
              ))}
              <div className={classes.formgroup}>
                <label>Message</label>
                <textarea
                  placeholder="Enter Message"
                  className={classes.txtArea}
                  required
                  name="message"
                />
              </div>
              <div className={classes.btn}>
                <button type="submit">Submit</button>
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
                      <Grid item xs={2} md={2} lg={1}>
                        <i className={info.i}></i>
                      </Grid>
                      <Grid item xs={10}>
                        <Typography
                          style={{
                            fontWeight: "600",
                            letterSpacing: "1px",
                            wordSpacing: "1px",
                          }}
                          variant="h6"
                        >
                          {info.txt}
                        </Typography>
                      </Grid>
                      <br />
                      <br />
                    </Grid>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                width: "100%",
                height: "50px",
                display: "grid",
                placeItems: "center",
              }}
            >
              <div className={classes.divider_hori}></div>
            </div>
            <div className={classes.socialLinks}>
              <ul>
                <li>
                  <i className="fab fa-facebook"></i>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=+923122077030"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
                <li>
                  <i className="fab fa-linkedin"></i>
                </li>
              </ul>
            </div>
            <div
              style={{
                width: "100%",
                height: "50px",
                display: "grid",
                placeItems: "center",
              }}
            >
              <div className={classes.divider_hori}></div>
            </div>

            <div style={{ width: "100%" }}>
              <div className={classes.map_hd}>
                <h4>Find Us On Map</h4>
              </div>
              <iframe
                style={{ borderRadius: "20px", border: "none", width: "100%" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2160590173385!2d68.3686810150135!3d25.39757738380348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIzJzUxLjMiTiA2OMKwMjInMTUuMSJF!5e0!3m2!1sen!2s!4v1592947625719!5m2!1sen!2s"
                title="Map"
                height="400"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Contact;
