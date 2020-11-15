import React, { PureComponent } from "react";
//recharts.org/en-US/examples
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    "количество требуемых спецаилистов": 4000,
    " кол-во не занятых специалистов": 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    "количество требуемых спецаилистов": 3000,
    " кол-во не занятых специалистов": 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    "количество требуемых спецаилистов": 2000,
    " кол-во не занятых специалистов": 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    "количество требуемых спецаилистов": 2780,
    " кол-во не занятых специалистов": 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    "количество требуемых спецаилистов": 1890,
    " кол-во не занятых специалистов": 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    "количество требуемых спецаилистов": 2390,
    " кол-во не занятых специалистов": 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    "количество требуемых спецаилистов": 3490,
    " кол-во не занятых специалистов": 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
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
