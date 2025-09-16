// src/components/admin/RiskDistributionChart.jsx
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'High Risk', value: 6 },
  { name: 'Medium Risk', value: 8 },
  { name: 'Low Risk', value: 24 },
];

// Official "Calm & Clarity" accent colors
const COLORS = ['#E74C3C', '#F1C40F', '#2ECC71'];

const RiskDistributionChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-5 h-full flex flex-col">
      <h3 className="text-lg font-poppins font-semibold text-sentinel-blue mb-4">
        Risk Distribution
      </h3>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend iconSize={10} wrapperStyle={{ fontSize: '14px' }}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RiskDistributionChart;