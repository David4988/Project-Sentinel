// src/components/admin/RiskDistributionChart.jsx
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'High Risk', value: 10 },
  { name: 'Medium Risk', value: 20 },
  { name: 'Low Risk', value: 70 },
];

const COLORS = ['#E74C3C', '#F1C40F', '#2ECC71']; // Sentinel Red, Yellow, Green

const RiskDistributionChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-poppins font-semibold text-sentinel-blue mb-4">
        Dropout Risk Levels
      </h3>
      <div style={{ height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend iconType="square" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RiskDistributionChart;