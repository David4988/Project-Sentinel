// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudentLayout from './components/student/StudentLayout';
import StudentDashboard from './pages/StudentDashboard';
import WellnessCheckinPage from './pages/WellnessCheckinPage';
import MyAcademicsPage from './pages/MyAcademics';
import PrivacyConsentPage from './pages/PrivacyConsent';
import ForumFeedPage from './pages/ForumFeed'; // 1. IMPORT THE FORUM PAGE

/**
 * The main application router.
 * For this phase of Project Sentinel, all routes point to the admin dashboard.
 * The student-facing portal would be added as a new route here later.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="wellness" element={<WellnessCheckinPage />} />
          <Route path="academics" element={<MyAcademicsPage />} />
          <Route path="privacy" element={<PrivacyConsentPage />} />
          <Route path="forum" element={<ForumFeedPage />} /> {/* 2. ADD THE FORUM ROUTE */}
        </Route>
        
        <Route path="/" element={<Navigate to="/student/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;