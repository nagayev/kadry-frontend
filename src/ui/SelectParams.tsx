import React from "react";
function Param(props) {
  return (
    <div>
      <select>
        <option>abc</option>
        <option>abc</option>
      </select>
    </div>
  );
}
function SelectParams() {
  return (
    <div>
      <Param text="Сфера" />
      <Param text="Квалификация" />
      <Param text="Вакансии и заявления" />
    </div>
  );
}
export default SelectParams;
