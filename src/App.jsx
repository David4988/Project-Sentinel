// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// --- Admin Imports ---
import AdminDashboardPage from './pages/AdminDashboardPage';
// Assuming you have this from the admin build
// import StudentDetailPage from './pages/StudentDetailPage'; 

// --- Student Imports ---
import StudentLayout from './components/student/StudentLayout';
import StudentDashboard from './pages/StudentDashboard';
import WellnessCheckinPage from './pages/WellnessCheckinPage';
import MyAcademicsPage from './pages/MyAcademics'; // Corrected import name
import PrivacyConsentPage from './pages/PrivacyConsent'; // Corrected import name
import ForumFeedPage from './pages/ForumFeed'; // Corrected import name

function App() {
  return (
    <Router>
      <Routes>
        {/* ## ADMIN ROUTES ## */}
        {/* All admin-facing pages will be prefixed with /admin */}
        <Route path="/admin" element={<AdminDashboardPage />} />
        {/* <Route path="/admin/student/:studentId" element={<StudentDetailPage />} /> */}


        {/* ## STUDENT ROUTES ## */}
        {/* This parent route uses StudentLayout to provide the sidebar for all student pages */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="wellness" element={<WellnessCheckinPage />} />
          <Route path="academics" element={<MyAcademicsPage />} />
          <Route path="privacy" element={<PrivacyConsentPage />} />
          <Route path="forum" element={<ForumFeedPage />} />
        </Route>
        

        {/* ## DEFAULT REDIRECT ## */}
        {/* For the hackathon, we'll make the student portal the default view */}
        <Route path="/" element={<Navigate to="/student/dashboard" />} />

      </Routes>
    </Router>
  );
}

export default App;