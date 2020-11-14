import React, { useEffect } from "react";
import StatsTop from "./StatsTop";
import StatsMain from "./StatsMain";
import Footer from "./Footer";
function stringify(object) {
  let str = "?";
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) str += `${keys[i]}=${object[keys[i]]}&`;
  const tmp = str.slice(0, str.length - 1);
  return encodeURI(tmp);
}
function StatsPage() {
  const onError = (err) => {
    console.error(err);
    alert("Произошла ошибка. Обратитесь в техподдержку");
  };
  useEffect(() => {
    const body = {
      field_of_activity: "bool_or_name",
      qualification: "bool_or_name",
      age: "1@3@5-10",
      work_years: "1@3@5-10",
      gender: "m|w|mw",
    };
    const opts = {
      method: "GET",
    };
    fetch(
      `https://weirdeproject.pythonanywhere.com/test${stringify(body)}`,
      opts,
    )
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch(onError);
  }, []);
  return (
    <div>
      <StatsTop />
      <StatsMain />
      <Footer />
    </div>
  );
}
export default StatsPage;
