import React from "react";
import Link from "next/link";
import { getCurrentTheme } from "./utils";
import BeautifulInput from "./BeautifulInput";
import BeautifulButton from "./BeautifulButton";

function RegMain() {
  const style = getCurrentTheme("loginPage");
  const on = () => window.open("/stats");
  return (
    <div style={style.loginMain}>
      <h2>Регистрация</h2>
      <BeautifulInput text="Имя пользователя" type="text" />
      <br />
      <BeautifulInput text="Email" type="text" /> <br />
      <BeautifulInput text="Пароль" type="password" /> <br />
      <BeautifulInput text="Повторите Пароль" type="password" /> <br />
      <div style={{ display: "inline-flex" }}>
        <a href="/stats">
          <BeautifulButton text="Продолжить" />
        </a>

        <p>Забыли пароль?</p>
        <p>Войти</p>
      </div>
    </div>
  );
}
export default RegMain;
