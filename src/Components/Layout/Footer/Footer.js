import React from "react";
import Link from "next/link";

import { navBarData } from "../../../Data/index";

import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.logo}>
            <img src="/images/HE-Logo.png" />
          </div>
          <Typography style={{ fontSize: "14px", marginTop: "0.5rem" }}>
            &copy; {new Date().getFullYear()}, Hamza Enterprises inc.
          </Typography>
          <br />
          <br />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography variant="h4">
            Hamza <br /> Enterprises
          </Typography>
          <List>
            <List>
              {navBarData.map((text, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <Link href={text.href}>
                        <a
                          style={{
                            color: "#fff",
                            fontSize: "18px",
                            letterSpacing: "2px",
                            borderBottom: "1px solid #fff",
                          }}
                        >
                          {text.name}
                        </a>
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <br />
          <br />
          <Typography variant="h4">Find Us On</Typography>
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
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
