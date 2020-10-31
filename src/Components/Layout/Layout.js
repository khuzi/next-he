import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/index");
  }, []);

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
