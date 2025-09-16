// src/components/admin/StudentWatchlist.jsx
import StudentRow from './StudentRow';

const StudentWatchlist = ({ students, modelThreshold, onThresholdChange }) => {
  const filteredStudents = students.filter((s) => s.riskScore >= modelThreshold);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-poppins font-semibold text-sentinel-blue">Flagged Students</h3>
        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-600">Risk Threshold</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={modelThreshold}
            onChange={onThresholdChange}
            className="w-32"
          />
          <div className="text-sm font-bold text-sentinel-blue w-12 text-right">{modelThreshold.toFixed(2)}</div>
        </div>
      </div>
      <div className="overflow-x-auto">
        {filteredStudents.length > 0 ? (
          <table className="w-full text-left text-sm">
            {/* ## THE FIX IS HERE ## */}
            <thead className="border-b-2 border-gray-200">
              <tr className="text-xs font-semibold text-sentinel-text-dark/70 uppercase tracking-wider">
                <th className="p-3">Student</th>
                <th className="p-3">Attendance</th>
                <th className="p-3">GPA</th>
                <th className="p-3">Risk Level</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((s, index) => (
                <StudentRow
                  key={s.id}
                  student={s}
                  index={index}
                  // onSelect is not defined in your provided row, but I'll leave this here
                  // in case you need it.
                  onSelect={() => {}} 
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 font-semibold">No students meet the current risk threshold.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentWatchlist;