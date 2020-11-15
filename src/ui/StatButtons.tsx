import React, { useState } from "react";
import StatCharts from "./StatCharts";
import Predicts from "./Predicts";

const purpleColor = "#6C63FF";
let active = {
  color: "white",
  backgroundColor: purpleColor,
  borderRadius: "5%",
  borderColor: purpleColor,
  width: "245px", //150px
  height: "50px",
  marginLeft: "10px",
};
let passive = {
  color: "black",
  backgroundColor: "white",
  borderRadius: "5%",
  borderColor: purpleColor,
  width: "245px", //150px
  height: "50px",
  marginLeft: "10px",
};

function ActiveButton(props) {
  return <button style={active}>{props.text}</button>;
}
function PassiveButton(props) {
  return <button style={passive}>{props.text}</button>;
}
function MyButton(props) {
  return props.active ? (
    <ActiveButton text={props.text} />
  ) : (
    <PassiveButton text={props.text} />
  );
}
function StatButtons() {
  const [actives, setActives] = useState([true, false]);
  const [mode, setMode] = useState(true);
  const setFirstActive = () => {
    setActives([true, false]);
    setMode(true);
  };
  const setSecondActive = () => {
    setActives([false, true]);
    setMode(false);
  };
  const graph = mode ? (
    <StatCharts m={Math.random()} />
  ) : (
    <Predicts m={Math.random()} />
  );
  return (
    <>
      <div style={{ display: "inline-flex" }}>
        <p onClick={setFirstActive}>
          <MyButton active={actives[0]} text="Данные на сегодня" />
        </p>
        <p onClick={setSecondActive}>
          <MyButton active={actives[1]} text="Прогнозы" />
        </p>
      </div>
      {graph}
    </>
  );
}
export default StatButtons;
