import React from "react";
import { getCurrentTheme } from "./utils";
import BeautifulButton from "./BeautifulButton";
function LoginTop() {
  const style = getCurrentTheme("loginPage");
  return (
    <>
      <div style={style.loginTop}>
        <div>
          <p>Ситуационные центры</p>
        </div>
        <div style={{ width: "40%" }}>&nbsp;</div>
        <div>
          <BeautifulButton text="Регистрация" />
          <BeautifulButton text="Войти" />
        </div>
      </div>
    </>
  );
}
export default LoginTop;
