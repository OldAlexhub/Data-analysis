import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/Dollar.css";

// Placeholder data
const data = [
  { year: "1990", USD_Value: 1 },
  { year: "2010", USD_Value: 0.49 },
  { year: "2019", USD_Value: 0.48 },
];

const formatNumberWithCommas = (value) => {
  return value.toLocaleString();
};

const Dollar = () => {
  return (
    <div className="chart-container">
      <h5 className="chart-title">USD Value</h5>
      <ResponsiveContainer width="95%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis dataKey="year" stroke="#333" />
          <YAxis tickFormatter={formatNumberWithCommas} stroke="red" />
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
            type="monotone"
            dataKey="USD_Value"
            stroke="red"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dollar;
