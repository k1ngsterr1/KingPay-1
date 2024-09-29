import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Пример данных для графика
const data = [
  { date: "30 апр", value: 2000 },
  { date: "2 мая", value: 3000 },
  { date: "4 мая", value: 0 },
  { date: "6 мая", value: 4500 },
  { date: "8 мая", value: 500 },
  { date: "10 мая", value: 0 },
  { date: "12 мая", value: 1000 },
  { date: "14 мая", value: 2000 },
  { date: "16 мая", value: 500 },
  { date: "18 мая", value: 4000 },
  { date: "20 мая", value: 1000 },
];

const HistoryChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            domain={[0, 5000]}
            ticks={[0, 1000, 2000, 3000, 4000, 5000]}
          />{" "}
          {/* Добавляем нужные значения на ось Y */}
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00D1FF"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoryChart;
