import React from "react";
import { getCurrentTheme } from "./utils";
//import BeautifulInput from "./BeautifulInput";
//import BeautifulButton from "./BeautifulButton";
import SelectParams from "./SelectParams";
import StatButtons from "./StatButtons";

function StatsMain() {
  const style = getCurrentTheme("stats");
  return (
    <>
      <div style={style.selectParams}>
        <SelectParams />
      </div>
      <StatButtons />
    </>
  );
}
export default StatsMain;
