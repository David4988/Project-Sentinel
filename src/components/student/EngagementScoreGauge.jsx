// src/components/student/EngagementScoreGauge.jsx
import { motion } from 'framer-motion';

const EngagementScoreGauge = ({ score }) => {
  const circumference = 2 * Math.PI * 80;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const getScoreColor = () => {
    if (score < 40) return '#ef4444'; // Brighter Red
    if (score < 70) return '#f59e0b'; // Brighter Yellow/Amber
    return '#22c55e'; // Brighter Green
  };

  return (
    // **Vibrant new background gradient**
    <div className="bg-gradient-to-br from-slate-800 to-sentinel-blue p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Engagement Score
      </h2>
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Background Circle */}
        <circle cx="100" cy="100" r="80" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="20" fill="transparent" />
        {/* Foreground (Progress) Circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke={getScoreColor()}
          strokeWidth="20"
          fill="transparent"
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: strokeDashoffset }}
          transition={{ duration: 1.5, ease: "circOut" }}
        />
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-5xl font-bold fill-current text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {score}
        </motion.text>
      </svg>
    </div>
  );
};

export default EngagementScoreGauge;