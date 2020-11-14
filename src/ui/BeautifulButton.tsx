import React from "react";
import { getCurrentTheme } from "./utils";
function BeautifulButton(props) {
  const style = getCurrentTheme("all");
  return <button style={style.button}>{props.text}</button>;
}
export default BeautifulButton;
