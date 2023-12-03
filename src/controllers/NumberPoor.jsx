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
import "../styles/Number.css";

// Placeholder data
const data = [
  { year: "1990", Poor_Population: 3032375 },
  { year: "2010", Poor_Population: 872524 },
  { year: "2019", Poor_Population: 1584280 },
];

const formatNumberWithCommas = (value) => {
  return value.toLocaleString();
};

const NumberPoor = () => {
  return (
    <div className="chart-container">
      <h5 className="chart-title">Poor Population Estimation</h5>
      <ResponsiveContainer width="95%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis dataKey="year" stroke="#333" />
          <YAxis tickFormatter={formatNumberWithCommas} stroke="#8884d8" />
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
            dataKey="Poor_Population"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NumberPoor;
