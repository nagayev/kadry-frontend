import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const m = getRandomArbitrary(1, 7) / 2;
const m1 = getRandomArbitrary(1, 5) / 2;
const rs: number[] = [];
const ks: number[] = [];
for (let i = 0; i < 7; i++) rs.push(getRandomArbitrary(2900, 4900));
for (let i = 0; i < 7; i++) ks.push(0.95);
const data = [
  {
    name: "2021 1 квартал",
    "количество требуемых спецаилистов": rs[0] * m,
    " кол-во не занятых специалистов": ks[0] * rs[0] * m,
    amt: 2400 * m,
  },
  {
    name: "2021 2 квартал",
    "количество требуемых спецаилистов": rs[1] * m,
    " кол-во не занятых специалистов": ks[1] * rs[1] * m,
    amt: 2210 * m1,
  },
  {
    name: "2021 3 квартал",
    "количество требуемых спецаилистов": rs[2] * m,
    " кол-во не занятых специалистов": ks[2] * rs[2] * m,
    amt: 2290 * m1,
  },
  {
    name: "2021 4 квартал",
    "количество требуемых спецаилистов": rs[3] * m1,
    " кол-во не занятых специалистов": ks[3] * rs[3] * m,
    amt: 2000 * m,
  },
  {
    name: "2022 1 квартал",
    "количество требуемых спецаилистов": rs[4] * m1,
    " кол-во не занятых специалистов": ks[4] * rs[4] * m,
    amt: 2181 * m1,
  },
  {
    name: "2022 2 квартал",
    "количество требуемых спецаилистов": rs[5] * m,
    " кол-во не занятых специалистов": ks[5] * rs[5] * m,
    amt: 2500 * m1,
  },
  {
    name: "2022 3 квартал",
    "количество требуемых спецаилистов": rs[6] * m1,
    " кол-во не занятых специалистов": ks[6] * rs[6] * m,
    amt: 2100 * m,
  },
];
const getData = (a, b) => data;
function Predicts(props) {
  const data = getData(props.m, props.m1);
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey=" кол-во не занятых специалистов"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="количество требуемых спецаилистов"
        stroke="#82ca9d"
      />
    </LineChart>
  );
}
export default Predicts;
