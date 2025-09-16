// src/components/student/WellnessCTA.jsx
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const WellnessCTA = () => {
  return (
    <motion.div 
      className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-600 to-indigo-700 text-white h-full flex flex-col justify-between"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div>
        <h2 className="text-2xl font-poppins font-bold">Ready for your weekly check-in?</h2>
        <p className="mt-2 opacity-90">Sharing how you feel helps us support you better. It only takes a minute.</p>
      </div>
      <button className="mt-6 flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 transition-colors font-semibold rounded-lg py-3">
        <span>Start Wellness Check-in</span>
        <FiArrowRight />
      </button>
    </motion.div>
  );
};

export default WellnessCTA;