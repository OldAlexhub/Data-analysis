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
import "../styles/Poverty.css";

const data = [
  { year: "1990", povertyRate: 5.3, population: 57214630 },
  { year: "2010", povertyRate: 1, population: 87252413 },
  { year: "2019", povertyRate: 1.5, population: 105618671 },
];

const formatNumberWithCommas = (value) => {
  return value.toLocaleString();
};

const Poverty = () => {
  return (
    <>
      <div className="chart-container">
        <h5 className="chart-title">Poverty vs. Population</h5>
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
              stroke="red"
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={formatNumberWithCommas}
              domain={["auto", "auto"]}
              allowDataOverflow={true}
              stroke="#82ca9d"
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
              dataKey="povertyRate"
              stroke="red"
              strokeWidth={2}
              name="Poverty Rate"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="population"
              stroke="#82ca9d"
              strokeWidth={2}
              name="Population"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default Poverty;
