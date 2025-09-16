// src/pages/MyAcademicsPage.jsx
import { motion } from 'framer-motion';
import { FiBook, FiCheckSquare, FiClipboard } from 'react-icons/fi';

// Dummy data for academics
const academicData = {
  gpa: "8.7 / 10.0",
  attendance: "92%",
  courses: [
    { name: "Operating Systems", grade: "A" },
    { name: "Database Management", grade: "A+" },
    { name: "Software Engineering", grade: "B+" },
    { name: "Web Development", grade: "A" },
  ]
};

const InfoCard = ({ icon, title, value }) => (
  <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center gap-4">
    <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-xl shadow-md">
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-sentinel-blue">{value}</p>
    </div>
  </div>
);

const MyAcademicsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-8">
        <h1 className="text-4xl font-poppins font-bold text-sentinel-blue">
          My Academics
        </h1>
        <p className="text-sentinel-text-dark">Here's a summary of your current academic standing.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <InfoCard icon={<FiBook size={24} />} title="Cumulative GPA" value={academicData.gpa} />
        <InfoCard icon={<FiCheckSquare size={24} />} title="Overall Attendance" value={academicData.attendance} />
      </div>
      
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-poppins font-bold text-sentinel-blue mb-4 flex items-center gap-2">
          <FiClipboard /> Current Courses
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b-2 border-gray-200">
              <tr className="text-xs font-semibold text-sentinel-text-dark/70 uppercase">
                <th className="p-3">Course Name</th>
                <th className="p-3 text-right">Grade</th>
              </tr>
            </thead>
            <tbody>
              {academicData.courses.map((course) => (
                <tr key={course.name} className="border-t">
                  <td className="p-3 font-semibold text-sentinel-blue">{course.name}</td>
                  <td className="p-3 font-bold text-sentinel-blue text-right">{course.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default MyAcademicsPage;