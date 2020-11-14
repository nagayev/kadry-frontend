import React from "react";
import { getCurrentTheme } from "./utils";

function SocialNetworks() {
  const style = { marginLeft: "20%", boxSizing: "border-box", padding: "20px" };
  return (
    <div style={{ marginLeft: "20%" }}>
      <img src="fb.png" />
      <img style={{ marginLeft: "20px" }} src="inst.png" />
      <img style={{ marginLeft: "20px" }} src="youtube.png" />
    </div>
  );
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
