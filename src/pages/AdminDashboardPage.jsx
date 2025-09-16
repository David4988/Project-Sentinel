// src/pages/AdminDashboardPage.jsx
import React, { useState, useEffect } from "react"; // Import useEffect
import { motion } from 'framer-motion';
import DashboardHeader from "../components/admin/DashboardHeader";
import MetricCard from "../components/admin/MetricCard";
import FlaggedTrendChart from "../components/admin/FlaggedTrendChart";
import StudentWatchlist from "../components/admin/StudentWatchlist";
import RiskDistributionChart from "../components/admin/RiskDistributionChart";

// **FIX 1: Move dummy data outside the component**
// This prevents it from being redefined on every render.
const DUMMY_METRICS = { modelAUC: 0.87, precision: 0.72, recall: 0.81 };
const DUMMY_TREND = [
  { week: "W1", flagged: 5 }, { week: "W2", flagged: 8 }, { week: "W3", flagged: 12 },
  { week: "W4", flagged: 9 }, { week: "W5", flagged: 18 },
];
const DUMMY_STUDENTS = [
  { id: "S1001", name: "Asha R.", attendance: 62, gpa: 6.1, riskScore: 0.84 },
  { id: "S1002", name: "Rajiv K.", attendance: 88, gpa: 7.4, riskScore: 0.31 },
  { id: "S1003", name: "Nisha P.", attendance: 45, gpa: 5.0, riskScore: 0.92 },
  { id: "S1004", name: "Karan S.", attendance: 75, gpa: 8.2, riskScore: 0.21 },
  { id: "S1005", name: "Meera V.", attendance: 81, gpa: 6.8, riskScore: 0.65 },
];

const AdminDashboardPage = () => {
  // **FIX 2: Use state to manage the data**
  // This is best practice and ensures the components will react to data changes.
  const [metrics, setMetrics] = useState(DUMMY_METRICS);
  const [trendData, setTrendData] = useState(DUMMY_TREND);
  const [students, setStudents] = useState(DUMMY_STUDENTS);
  
  const [modelThreshold, setModelThreshold] = useState(0.60);
  const [flaggedCount, setFlaggedCount] = useState(0);

  // **FIX 3: Use useEffect to calculate the count when data changes**
  useEffect(() => {
    const count = students.filter(s => s.riskScore >= modelThreshold).length;
    setFlaggedCount(count);
  }, [students, modelThreshold]); // This recalculates whenever the student list or threshold changes

  const containerVariants = { /* ... (no changes needed here) ... */ };
  const itemVariants = { /* ... (no changes needed here) ... */ };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen p-8 font-inter">
      <div className="max-w-7xl">
        <DashboardHeader />
        <motion.main 
          className="flex flex-col gap-8" // <-- MODIFIED LINE
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" variants={itemVariants}>
            <MetricCard title="Flagged Students" value={flaggedCount} footer={`Threshold: ${modelThreshold.toFixed(2)}`} />
            <MetricCard title="Model AUC" value={metrics.modelAUC} footer={`Precision: ${metrics.precision} • Recall: ${metrics.recall}`} delay={0.1} />
            {/* ... other metric cards ... */}
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-5 gap-8" style={{minHeight: 300}} variants={itemVariants}>
            <div className="md:col-span-3">
              {/* Pass the state variable here */}
              <FlaggedTrendChart data={trendData} />
            </div>
            <div className="md:col-span-2">
              <RiskDistributionChart />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            {/* Pass the state variable here */}
            <StudentWatchlist
              students={students}
              modelThreshold={modelThreshold}
              onThresholdChange={(e) => setModelThreshold(parseFloat(e.target.value))}
            />
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;