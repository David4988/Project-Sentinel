// src/pages/WellnessCheckinPage.jsx
import { motion } from 'framer-motion';
import WellnessCheckin from '../components/student/WelnessCheckin';

const WellnessCheckinPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-8">
        <h1 className="text-4xl font-poppins font-bold text-sentinel-blue">
          Wellness Check-in
        </h1>
        <p className="text-sentinel-text-dark">Your weekly check-in is a private and safe space to reflect.</p>
      </header>
      
      <div className="max-w-4xl mx-auto">
        <WellnessCheckin />
      </div>
    </motion.div>
  );
};

export default WellnessCheckinPage;