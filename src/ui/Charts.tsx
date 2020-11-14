import React from "react";
import { getCurrentTheme } from "./utils";

type ChartData = { header: string; key: number };

function Chart(props: ChartData) {
  const style = getCurrentTheme("main/charts");
  return (
    <div style={style.chart}>
      <div style={{ display: "inline-flex" }}>
        <p style={style.chartHeader}>{props.header}&nbsp;</p>
        <p style={style.moreDetails}>Подробнее&gt;&gt;</p>
      </div>
      <img src="chart.png" />
    </div>
  );
}

function Charts() {
  //const style = getCurrentTheme("main/charts");
  const topHeaders = ["Образование"]; //["Образование", "Заработок", "Возраст"];
  let topCharts = topHeaders.map((v, i) => {
    return <Chart header={v} key={i} />;
  });
  const bottomHeaders = ["Пол"]; //["Пол", "График", "Квалифицикация"];
  let bottomCharts = bottomHeaders.map((v, i) => {
    return <Chart header={v} key={i} />;
  });
  return (
    <>
      <p>Виды графиков</p>
      <div style={{ display: "inline" }}>{topCharts}</div>
      <br />
      <div style={{ display: "inline" }}>{bottomCharts}</div>
    </>
  );
}
export default Charts;
