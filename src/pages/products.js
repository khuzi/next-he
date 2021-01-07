import React from "react";

import Tabs from "../Components/Tab/Tab";

import { Typography } from "@material-ui/core";

import classes from "../styles/products.module.css";

const Products = () => {
  return (
    <section className={classes.products}>
      <div className="mainWarper">
        <div className="heading">
          <Typography variant="h2">Our Products</Typography>
        </div>
        <Tabs />
      </div>
    </section>
  );
};

export default Products;
