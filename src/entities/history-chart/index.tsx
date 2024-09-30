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

interface HistoryChartProps {
  data: { date: string; value: number }[];
  height: number;
}

const HistoryChart: React.FC<HistoryChartProps> = ({ data, height = 300 }) => {
  return (
    <div style={{ width: "100%", height: height }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 5000]} ticks={[0, 1000, 2000, 3000, 4000, 5000]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#47E1DD"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoryChart;
