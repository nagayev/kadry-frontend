import React, { useState } from "react";
import { getCurrentTheme } from "./utils";

function Label(props) {
  return (
    <div>
      <p
        onClick={() => {
          props.rl(props.text);
        }}
      >
        {props.text} <img src="close.png" />
      </p>
    </div>
  );
}
function Param(props) {
  const style = getCurrentTheme("stats"); //all???
  const [labels, setLabels] = useState([]);
  const options = {
    Сфера: ["С/х", "IT"],
    Квалификация: ["Учащийся", "Высшее образование"],
    Вакансии: ["Вакансия 1", "Вакансия 2"],
  };
  const addLabel = (e) => {
    const text = e.target.value;
    if (labels.includes(text)) {
      console.warn("Validation Error");
      return;
    }
    const copy = labels.slice();
    copy.push(text); //it's okey
    setLabels(copy);
  };
  const removeLabel = (name) => {
    const copy = labels.slice();
    copy.splice(copy.indexOf(name), 1);
    setLabels(copy);
  };
  const removeAll = () => setLabels([]);
  return (
    <div>
      <div style={{ display: "inline-flex" }}>
        <p>{props.text}</p>
        <select onChange={addLabel} style={{ width: "200%" }}>
          {options[props.text].map((v, i) => {
            return <option>{v}</option>;
          })}
        </select>
      </div>
      <div style={{ display: "inline-flex", padding: "0 20px" }}>
        {labels.map((v, i) => {
          return <Label text={v} key={i} rl={removeLabel} />;
        })}
        <Label text="Delete All" rl={removeAll} />
      </div>
    </div>
  );
}
function AnotherParam() {
  const [firstYear, setFirstYear] = useState(2016);
  const [SecondYear, setSecondYear] = useState(2017);
  let options = [];
  for (let i = 2016; i < 2020; i++) options.push(i);
  return (
    <div style={{ display: "inline-flex" }}>
      <p>Временной период</p>
      <select onChange={(e) => setFirstYear(+e.target.value)}>
        {options.map((v, i) => {
          return <option key={i}>{v} </option>;
        })}
      </select>
      <p>-</p>
      <select onChange={(e) => setSecondYear(+e.target.value)}>
        {options.slice(1).map((v, i) => {
          return <option key={i}>{v} </option>;
        })}
      </select>
    </div>
  );
}
function SelectParams() {
  return (
    <div style={{ width: "100%" }}>
      <Param text="Сфера" />
      <Param text="Квалификация" />
      <Param text="Вакансии" />
      <AnotherParam />
    </div>
  );
}
export default SelectParams;
