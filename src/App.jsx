// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboardPage from './pages/AdminDashboardPage';

/**
 * The main application router.
 * For this phase of Project Sentinel, all routes point to the admin dashboard.
 * The student-facing portal would be added as a new route here later.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Main route for the admin command center */}
        <Route path="/admin" element={<AdminDashboardPage />} />
        
        {/* A helpful redirect to send the root URL to our admin page */}
        <Route path="/" element={<Navigate to="/admin" />} />
        
        {/* You can add a 404 page or a catch-all redirect later */}
        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    </Router>
  );
}

export default App;