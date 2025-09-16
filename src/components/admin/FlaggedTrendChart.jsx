// src/components/admin/FlaggedTrendChart.jsx
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';

const FlaggedTrendChart = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-5 h-full">
      <h3 className="text-lg font-poppins font-semibold text-sentinel-blue mb-4">
        Flagged Trend (Weekly)
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <XAxis dataKey="week" tick={{ fill: '#6b7280', fontSize: 12 }} />
          <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="flagged" stroke="#0A2540" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FlaggedTrendChart;