// src/components/admin/FlaggedTrendChart.jsx
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, CartesianGrid, Area } from 'recharts';

const FlaggedTrendChart = ({ data }) => {
  // **DIAGNOSTIC 1: Check the data**
  // This will print the data to your browser's developer console (F12).
  // Check if it's an array of objects as expected.
  console.log('FlaggedTrendChart received data:', data);

  // **DIAGNOSTIC 2: Check for empty or invalid data**
  // If the data is missing or empty, we'll show a message instead of a broken chart.
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-5 h-full flex flex-col items-center justify-center">
        <h3 className="text-lg font-poppins font-semibold text-sentinel-blue mb-4">
          Flagged Trend (Weekly)
        </h3>
        <p className="text-gray-500">Awaiting data...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 h-full flex flex-col">
      <h3 className="text-lg font-poppins font-semibold text-sentinel-blue mb-4">
        Flagged Trend (Weekly)
      </h3>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: -10 }}>
            <defs>
              <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="week" tick={{ fill: '#6b7280', fontSize: 12 }} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="flagged" 
              stroke="#4338ca"
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorTrend)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FlaggedTrendChart;