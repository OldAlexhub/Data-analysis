import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  YAxis,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import "../styles/styles.css";
import "../styles/Debt.css";

const data = [
  { year: "1990", Debt: 33, Capita_After_Debt: 173.56 / 12 },
  { year: "2010", Debt: 36.8, Capita_After_Debt: 806.1 / 12 },
  { year: "2019", Debt: 114.5, Capita_After_Debt: 377.55 / 12 },
];

const formatNumberWithCommas = (value) => {
  return value.toLocaleString();
};

const DebtvsGDP = () => {
  return (
    <div className="chart-container">
      <h5 className="chart-title">Debt VS. Net GDP</h5>
      {"   "}
      <ResponsiveContainer width="95%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis dataKey="year" stroke="#333" />
          <YAxis
            yAxisId="left"
            orientation="left"
            tickFormatter={formatNumberWithCommas}
            stroke="#82ca9d"
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={formatNumberWithCommas}
            domain={["auto", "auto"]}
            allowDataOverflow={true}
            stroke="red"
          />
          <Tooltip
            formatter={(value) => formatNumberWithCommas(value)}
            contentStyle={{
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Legend verticalAlign="top" height={36} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Debt"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Debt"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Capita_After_Debt"
            stroke="red"
            strokeWidth={2}
            name="GDP Per Capita After Debt Per Month"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DebtvsGDP;
