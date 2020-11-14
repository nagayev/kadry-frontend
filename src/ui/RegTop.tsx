import React from "react";
import { getCurrentTheme } from "./utils";
import BeautifulButton from "./BeautifulButton";
function RegTop() {
  const style = getCurrentTheme("loginPage");
  return (
    <>
      <div style={style.loginTop}>
        <div>
          <p>Ситуационные центры</p>
        </div>
        <div style={{ width: "40%" }}>&nbsp;</div>
        <div>
          <BeautifulButton background="white" text="Регистрация" />
          <BeautifulButton text="Войти" />
        </div>
      </div>
    </>
  );
}
export default RegTop;
