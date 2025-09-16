// src/components/admin/DashboardHeader.jsx
import React from 'react';

const DashboardHeader = ({ handleRefresh }) => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-poppins font-bold text-sentinel-blue">
          AI Dropout Prediction
        </h1>
        <p className="text-sentinel-text-dark">
          Triage, model health, and counseling actions for Student Cohort Alpha.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleRefresh}
          className="px-4 py-2 rounded-lg bg-white shadow text-sm font-semibold text-sentinel-blue hover:shadow-md transition-shadow"
        >
          Refresh Data
        </button>
        <div className="text-sm text-gray-500">
          Logged in as <strong>Counselor</strong>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;