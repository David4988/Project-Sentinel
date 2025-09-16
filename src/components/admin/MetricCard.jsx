// src/components/admin/MetricCard.jsx
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiPlayCircle } from 'react-icons/fi'; // Import icons

const iconMap = {
  "Flagged Students": <FiUsers size={24} />,
  "Model AUC": <FiTarget size={24} />,
  "Actions": <FiPlayCircle size={24} />,
};

const MetricCard = ({ title, value, footer, children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-semibold text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-sentinel-blue mt-1">{value}</p>
        </div>
        <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-xl shadow-md">
            {iconMap[title]}
        </div>
      </div>
      {footer && <p className="text-sm text-gray-400 mt-2">{footer}</p>}
      {children}
    </motion.div>
  );
};

export default MetricCard;