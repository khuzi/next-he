import React from "react";

import ActiveLink from "../../../Link";
import { navBarData } from "../../../Data/index";
import Drawer from "./Drawer/Drawer";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Hidden } from "@material-ui/core";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.desk__nav}>
            <ActiveLink href="/">
              <div className={classes.logo}>
                <img src="/images/HE-Logo.png" />
              </div>
            </ActiveLink>
            <Hidden only={["xs", "sm"]}>
              <div className={classes.navLinks}>
                {navBarData.map((link) => (
                  <ActiveLink
                    key={link.href}
                    href={link.href}
                    normalClass={classes.normal}
                    activeClass={classes.active}
                  >
                    {link.name}
                  </ActiveLink>
                ))}
              </div>
            </Hidden>
            <Hidden only={["xl", "lg", "md"]}>
              <Drawer />
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

/**
 * <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
 */
