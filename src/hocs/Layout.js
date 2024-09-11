import React from "react";

import Footer from "../Header/Footer";
import HorizontalNav from "../Header/HorizontalNav";

const Layout = (props) => {
  return (
    <>
      <HorizontalNav />

      {props.children}

      <Footer />
    </>
  );
};

export default Layout;
