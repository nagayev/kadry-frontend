import React, { PureComponent } from "react";
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

const data = [
  {
    name: "Февраль",
    "количество требуемых спецаилистов": 4000 * m,
    " кол-во не занятых специалистов": 3900 * m,
    amt: 2400 * m,
  },
  {
    name: "Март",
    "количество требуемых спецаилистов": 3000 * m,
    " кол-во не занятых специалистов": 2900 * m,
    amt: 2210 * m1,
  },
  {
    name: "Апрель",
    "количество требуемых спецаилистов": 2000 * m,
    " кол-во не занятых специалистов": 2500 * m,
    amt: 2290 * m1,
  },
  {
    name: "Март",
    "количество требуемых спецаилистов": 2780 * m1,
    " кол-во не занятых специалистов": 3908 * m,
    amt: 2000 * m,
  },
  {
    name: "Май",
    "количество требуемых спецаилистов": 1890 * m1,
    " кол-во не занятых специалистов": 1500 * m,
    amt: 2181 * m1,
  },
  {
    name: "Июнь",
    "количество требуемых спецаилистов": 3500 * m,
    " кол-во не занятых специалистов": 3800 * m,
    amt: 2500 * m1,
  },
  {
    name: "Июль",
    "количество требуемых спецаилистов": 3490 * m1,
    " кол-во не занятых специалистов": 4300 * m,
    amt: 2100 * m,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    //console.log(this.props.m);
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
}
