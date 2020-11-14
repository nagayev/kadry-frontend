import { NextPage } from "next";
import React from "react";
//import { getCurrentTheme } from "./utils";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import Charts from "./Charts";
import Footer from "./Footer";

const PageContentsForIndex: NextPage = () => {
  //const style = getCurrentTheme();
  return (
    <>
      <div style={{ display: "inline-flex" }}>
        <MainLeft />
        <MainRight />
      </div>
      <Charts />
      <br />
      <Footer />
    </>
  );
};

export default PageContentsForIndex;
