import React from "react";
import { getCurrentTheme } from "./utils";

function StatsTop() {
  const style = getCurrentTheme("stats");
  const s = { padding: "0 300px" };
  const y = style.analitic;
  const a = "Аналитик";
  const z = "Здравствуйте,";
  return (
    <>
      <div style={style.loginTop}>
        <div style={{ display: "inline-flex" }}>
          <pre style={{ padding: "0 300px" }}>Ситуационные центры</pre>
          <pre style={s}>
            {z} <pre style={y}>{a}</pre>{" "}
          </pre>
        </div>
        <div style={{ width: "40%" }}>&nbsp;</div>
      </div>
    </>
  );
}
export default StatsTop;
