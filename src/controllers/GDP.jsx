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
import "../styles/GDP.css";

const data = [
  { year: "1990", GDP: 42.98, USD_Inflation: 0 },
  { year: "2010", GDP: 218.98, USD_Inflation: 51.21 },
  { year: "2019", GDP: 318.68, USD_Inflation: 51.52 },
];

const formatNumberWithCommas = (value) => {
  return value.toLocaleString();
};

const GDP = () => {
  return (
    <div className="chart-container">
      <h5 className="chart-title">GDP vs. USD Inflation</h5>
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
            dataKey="GDP"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Egypt's GDP"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="USD_Inflation"
            stroke="red"
            strokeWidth={2}
            name="USD Inflation"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GDP;
