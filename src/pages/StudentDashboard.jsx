// src/pages/StudentDashboard.jsx
import { motion } from 'framer-motion';
import EngagementScoreGauge from '../components/student/EngagementScoreGauge';
import WellnessCTA from '../components/student/WellnessCTA'; // Import the new component

const StudentDashboard = () => {
  const student = { name: "Aisha", engagementScore: 78 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-8">
        <h1 className="text-4xl font-poppins font-bold text-sentinel-blue">
          Welcome back, {student.name}!
        </h1>
        <p className="text-sentinel-text-dark">Here's your wellness and engagement summary.</p>
      </header>
      
      {/* Updated grid layout for more visual appeal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Column 1: The two most important visual elements */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <EngagementScoreGauge score={student.engagementScore} />
          <WellnessCTA />
        </div>

        {/* Column 2: Other information */}
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg h-full">
            <h2 className="text-xl font-poppins font-bold text-sentinel-blue mb-4">
              Announcements & Upcoming Deadlines
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-yellow-100/50 border border-yellow-300">
                <p className="font-bold text-yellow-800">Operating Systems Project</p>
                <p className="text-sm text-yellow-700">Due: Friday, Sep 19, 2025</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-100/50 border border-blue-300">
                <p className="font-bold text-blue-800">Mid-Term Exams</p>
                <p className="text-sm text-blue-700">Starting next Monday, Sep 22, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentDashboard;