import React from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import WeWash from "../WeWash/WeWash";
import Agency from "../Agency/Agency";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          style={{
            background: "var(--primary-color)",
            margin: "0 1rem",
          }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label="Agencies"
            {...a11yProps(0)}
            style={{
              color: "#fff",
              outline: "none",

              fontSize: "15px",
              letterSpacing: "2px",
            }}
          />
          <Tab
            label="Hamza Chemicals"
            {...a11yProps(1)}
            style={{
              color: "#fff",
              outline: "none",

              fontSize: "15px",
              letterSpacing: "2px",
            }}
          />
          <Tab
            label="We Wash"
            {...a11yProps(2)}
            style={{
              color: "#fff",
              outline: "none",
              fontSize: "15px",
              letterSpacing: "2px",
            }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Agency />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WeWash />
      </TabPanel>
    </div>
  );
}
