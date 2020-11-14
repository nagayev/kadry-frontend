import React from "react";
import { getCurrentTheme } from "./utils";

function SocialNetworks() {
  return <p>abc</p>;
}
function CopyRight() {
  return (
    <div style={{ marginLeft: "20%" }}>
      <p>&copy;1990-2020 Ситуационные центры</p>
      <p>117220, Москва, ул. Гитхаба, д. 23, кв. 42</p>
    </div>
  );
}
function Footer() {
  const style = getCurrentTheme("main/footer");
  return (
    <div style={style.footer}>
      <CopyRight />
      <SocialNetworks />
    </div>
  );
}
export default Footer;
