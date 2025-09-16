// src/components/admin/StudentRiskTable.jsx
const students = [
  { id: 1, name: 'Rahul', risk: 'High' },
  { id: 2, name: 'Priya', risk: 'Medium' },
  { id: 3, name: 'Kumar', risk: 'Low' },
];

const getRiskColor = (risk) => {
  if (risk === 'High') return 'text-sentinel-red';
  if (risk === 'Medium') return 'text-sentinel-yellow';
  return 'text-sentinel-green';
};

const StudentRiskTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-poppins font-semibold text-sentinel-blue mb-4">
        Students Risk Data
      </h3>
      <table className="w-full text-left">
        <thead className="border-b">
          <tr className="text-sm text-sentinel-text-dark/70">
            <th className="p-2 font-semibold">ID</th>
            <th className="p-2 font-semibold">Name</th>
            <th className="p-2 font-semibold">Risk Level</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-t">
              <td className="p-2 font-medium">{s.id}</td>
              <td className="p-2 font-medium text-sentinel-blue">{s.name}</td>
              <td className={`p-2 font-bold ${getRiskColor(s.risk)}`}>{s.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentRiskTable;