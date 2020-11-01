import React from "react";
import dynamic from "next/dynamic";

import Spinner from '../Components/Spinner/Spinner';

const Tabs = dynamic(() => import("../Components/Tab/Tab"), {
  loading: () => <Spinner />,
  ssr: false,
});

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
