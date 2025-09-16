// src/pages/AdminDashboardPage.jsx
import React, { useState } from "react";
import DashboardHeader from "../components/admin/DashboardHeader";
import MetricCard from "../components/admin/MetricCard";
import FlaggedTrendChart from "../components/admin/FlaggedTrendChart";
import StudentWatchlist from "../components/admin/StudentWatchlist";
import RiskDistributionChart from "../components/admin/RiskDistributionChart"; // Import the pie chart

// ... (Dummy data hooks remain the same)
const METRICS = { modelAUC: 0.87, precision: 0.72, recall: 0.81 };
const TREND = [ /* ... */ ];
const STUDENTS = [ /* ... */ ];

const AdminDashboardPage = () => {
  const [modelThreshold, setModelThreshold] = useState(0.6);
  const [selectedStudent, setSelectedStudent] = useState(STUDENTS[0]);
  
  const flaggedCount = STUDENTS.filter(s => s.riskScore >= modelThreshold).length;

  return (
    <div className="bg-gray-50 min-h-screen p-8 font-inter text-sentinel-text-dark">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader handleRefresh={() => {}} />
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* These MetricCards already have the "flashy" framer-motion entrance animation ✨ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard title="Flagged Students" value={flaggedCount} footer={`Threshold: ${modelThreshold.toFixed(2)}`} />
              <MetricCard title="Model AUC" value={METRICS.modelAUC} footer={`Precision: ${METRICS.precision} • Recall: ${METRICS.recall}`} delay={0.1} />
              <MetricCard title="Actions" delay={0.2}>
                  <div className="mt-3 flex gap-2">
                    <button className="px-4 py-2 text-sm rounded-lg bg-sentinel-blue text-white hover:bg-opacity-90 transition-all">Retrain Model</button>
                    <button className="px-4 py-2 text-sm rounded-lg bg-white border hover:bg-gray-100 transition-all">Export CSV</button>
                  </div>
              </MetricCard>
            </div>
            
            {/* New grid for the charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FlaggedTrendChart data={TREND} />
                <RiskDistributionChart />
            </div>

            <StudentWatchlist
              students={STUDENTS}
              modelThreshold={modelThreshold}
              onThresholdChange={(e) => setModelThreshold(parseFloat(e.target.value))}
              onSelectStudent={setSelectedStudent}
            />
          </div>
          <div className="lg:col-span-1">
            {/* ... Right sidebar remains the same ... */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;