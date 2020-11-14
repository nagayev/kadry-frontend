import React from "react";
import { getCurrentTheme } from "./utils";
import BeautifulButton from "./BeautifulButton";
/*
<div>
          <BeautifulButton background="white" text="Регистрация" />
          <BeautifulButton text="Войти" />
        </div>
 */
function RegTop() {
  const style = getCurrentTheme("loginPage");
  return (
    <>
      <div style={style.loginTop}>
        <div>
          <p style={{ marginLeft: "300%" }}>Ситуационные центры</p>
        </div>
        <div style={{ width: "40%" }}>&nbsp;</div>
      </div>
    </>
  );
}
export default RegTop;
