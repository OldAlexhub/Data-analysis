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
import "../styles/Real.css";

const data = [
  { year: "1990", Real_GDP: 42.98, Per_Capita_Per_Month: 750 / 12 },
  { year: "2010", Real_GDP: 106.96, Per_Capita_Per_Month: 1227.68 / 12 },
  { year: "2019", Real_GDP: 154.46, Per_Capita_Per_Month: 1461.72 / 12 },
];

const formatNumberWithCommas = (value) => {
  return value.toLocaleString();
};

const RealGDP = () => {
  return (
    <>
      <div className="chart-container">
        <h5 className="chart-title">GDP vs. USD Value</h5>
        <h6 className="chart-subtitle">Adjusted to Inflation</h6>
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
              dataKey="Real_GDP"
              stroke="#82ca9d"
              strokeWidth={2}
              name="Egypt's GDP Adjusted to Inflation"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Per_Capita_Per_Month"
              stroke="red"
              strokeWidth={2}
              name="GDP Per Capita Per Month Adjusted to USD Inflation"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default RealGDP;
