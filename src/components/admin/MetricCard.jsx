// src/components/admin/MetricCard.jsx
import { motion } from 'framer-motion';

const MetricCard = ({ title, value, footer, children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-2xl shadow p-5"
    >
      <div className="text-sm text-sentinel-text-dark/80">{title}</div>
      <div className="text-3xl font-bold text-sentinel-blue mt-1">{value}</div>
      {footer && <div className="text-sm text-gray-400 mt-2">{footer}</div>}
      {children}
    </motion.div>
  );
};

export default MetricCard;