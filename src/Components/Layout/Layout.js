import React, { useEffect } from "react";
import dynamic from "next/dynamic";

import { Skeleton } from "@material-ui/lab";

const Navbar = dynamic(() => import("./Navbar/Navbar"), {
  loading: () => <Skeleton variant="rect" width="100%" height="50px" />,
  ssr: false,
});
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "fixed",
          bottom: "10%",
          zIndex: "100",
          right: "0.5%",
          background: "#075E54",
          padding: "0.5rem",
          borderRadius: "10px",
        }}
      >
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+923122077030"
        >
          <i
            style={{ color: "#fff", fontSize: "2rem" }}
            className="fab fa-whatsapp"
          ></i>
        </a>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
