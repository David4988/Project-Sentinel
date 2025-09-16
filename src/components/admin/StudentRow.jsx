// src/components/admin/StudentRow.jsx
import { motion as Motion } from 'framer-motion';

const StudentRow = ({ student, index, onSelect }) => {
  // Staggered animation for each row
  const rowVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: index * 0.05 } 
    },
  };

  const riskLabel = (score) => {
    if (score >= 0.8) return { label: "High", color: "bg-sentinel-red/20 text-sentinel-red" };
    if (score >= 0.5) return { label: "Medium", color: "bg-sentinel-yellow/20 text-sentinel-yellow" };
    return { label: "Low", color: "bg-emerald-500/20 text-emerald-600" };
  };

  return (
    <Motion.tr
      variants={rowVariants}
      initial="hidden"
      animate="visible"
      layout
      className="border-t border-gray-200"
    >
      <td className="p-2">
        <button onClick={() => onSelect(student)} className="text-left hover:text-indigo-600">
          <div className="font-bold text-sentinel-blue">{student.name}</div>
          <div className="text-xs text-gray-400">{student.id}</div>
        </button>
      </td>
      <td className="p-2 font-medium">{student.attendance}%</td>
      <td className="p-2 font-medium">{student.gpa}</td>
      <td className="p-2">
        <span className={`px-2 py-1 rounded-full text-xs font-bold ${riskLabel(student.riskScore).color}`}>
          {riskLabel(student.riskScore).label}
        </span>
      </td>
      <td className="p-2">
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-md bg-sentinel-blue text-white text-xs hover:bg-opacity-90 transition-colors">Email</button>
          <button className="px-3 py-1 rounded-md bg-gray-100 border text-xs hover:bg-gray-200 transition-colors">Schedule</button>
        </div>
      </td>
    </Motion.tr>
  )
};

export default StudentRow;