import React from "react";
import { Spinner } from "react-bootstrap";

const Spin = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Spinner animation="border" />
    </div>
  );
};

export default Spin;
