import React from "react";
import { getCurrentTheme } from "./utils";
import BeautifulInput from "./BeautifulInput";
import BeautifulButton from "./BeautifulButton";

function LoginMain() {
  const style = getCurrentTheme("loginPage");
  return (
    <div style={style.loginMain}>
      <h2>Вход</h2>
      <BeautifulInput text="Имя пользователя" type="text" /> <br />
      <BeautifulInput text="Пароль" type="password" /> <br />
      <div style={{ display: "inline-flex" }}>
        <input type="checkbox" /> Запомнить меня
        <div style={{ width: "30%" }}>&nbsp;</div>
        <a style={style.a} href="about:config">
          Забыли пароль?
        </a>
        <BeautifulButton text="Продолжить" />
      </div>
    </div>
  );
}
export default LoginMain;
