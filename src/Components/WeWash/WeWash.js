import React from "react";

import TabHeader from "../TabHeader/TabHeader";
import ProductBox from "../ProductBox/ProductBox";
import { WeWashHeader, weWashProducts } from "../../Data/index";

import { Grid } from "@material-ui/core";

const WeWash = () => {
  const { src, intro, label } = WeWashHeader;
  return (
    <>
      <TabHeader logo={src} intro={intro} title={label} />
      <div style={{ maxWidth: "100%", margin: "auto" }}>
        <Grid container justify="center" style={{ padding: "1.2rem" }}>
          {weWashProducts.map((product) => (
            <ProductBox key={product} name={product} />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default WeWash;
