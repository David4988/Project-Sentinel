// src/components/admin/StudentWatchlist.jsx
import StudentRow from './StudentRow'; // Import the new animated row

const StudentWatchlist = ({ students, modelThreshold, onThresholdChange, onSelectStudent }) => {
  const filteredStudents = students.filter((s) => s.riskScore >= modelThreshold);

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        {/* ... Header and threshold slider remain the same ... */}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          {/* ... thead remains the same ... */}
          <tbody>
            {filteredStudents.map((s, index) => (
              <StudentRow 
                key={s.id} 
                student={s} 
                index={index} 
                onSelect={onSelectStudent} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentWatchlist;