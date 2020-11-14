import React from "react";
import { getCurrentTheme } from "./utils";

function MainLeft() {
  const style = getCurrentTheme("main/top");
  return (
    <div>
      <p>Найдите крутую работу, </p>
      <p>
        Использую <span style={style.statistics}>статистику</span>
      </p>
      <p>
        Provide a network for all your needs with ease and fun using Lasles VPN
        discover
      </p>
      <p>interesting features from us.</p>
      <button style={style.moreDetailsButton}>Подробнее</button>
    </div>
  );
}
export default MainLeft;
