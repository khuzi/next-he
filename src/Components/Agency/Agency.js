import React from "react";

import TabHeader from "../TabHeader/TabHeader";
import AgencyCard from "./AgencyCard/AgencyCard";
import { AgenciesData, olympiaProducts } from "../../Data/index";

import { Grid } from "@material-ui/core";

const Agency = () => {
  const { label, src, intro } = AgenciesData;
  return (
    <>
      <TabHeader logo={src} title={label} intro={intro} />
      <Grid container justify="space-evenly" style={{ marginTop: "2rem" }}>
        {olympiaProducts.map((product, i) => (
          <AgencyCard
            key={i}
            title={product.title}
            media={product.media}
            list={product.usage}
          />
        ))}
      </Grid>
    </>
  );
};

export default Agency;
