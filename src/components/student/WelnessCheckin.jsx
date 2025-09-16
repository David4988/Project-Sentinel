// src/components/student/WellnessCheckin.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const emotions = [
  { name: 'Joyful', emoji: '😄', color: 'bg-green-400' },
  { name: 'Calm', emoji: '😌', color: 'bg-blue-400' },
  { name: 'Tired', emoji: '😴', color: 'bg-gray-400' },
  { name: 'Anxious', emoji: '😟', color: 'bg-yellow-400' },
  { name: 'Sad', emoji: '😢', color: 'bg-indigo-400' },
  { name: 'Angry', emoji: '😠', color: 'bg-red-400' },
];

const WellnessCheckin = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-sentinel-blue p-8 rounded-2xl shadow-2xl text-white">
      <h2 className="text-2xl font-poppins font-bold text-center mb-2">How are you feeling today?</h2>
      <p className="text-center text-white/80 mb-8">Select one option that best describes your current state.</p>
      
      {/* Emotion Selection Buttons */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
        {emotions.map((emotion) => (
          <motion.button
            key={emotion.name}
            onClick={() => setSelectedEmotion(emotion.name)}
            className={`p-4 rounded-xl flex flex-col items-center justify-center gap-2 border-2 transition-all duration-200 ${
              selectedEmotion === emotion.name
                ? 'border-white scale-110 shadow-lg'
                : 'border-transparent hover:bg-white/20'
            }`}
            style={{ backgroundColor: selectedEmotion === emotion.name ? '' : emotion.color }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-4xl">{emotion.emoji}</span>
            <span className="font-semibold">{emotion.name}</span>
          </motion.button>
        ))}
      </div>
      
      {/* Notes Text Area */}
      <div>
        <label htmlFor="notes" className="block font-semibold mb-2">Any additional notes? (Optional)</label>
        <textarea
          id="notes"
          rows="4"
          placeholder="Feel free to share more about what's on your mind..."
          className="w-full p-4 rounded-lg bg-white/10 placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:outline-none transition-all"
        ></textarea>
      </div>
      
      {/* Submit Button */}
      <motion.button 
        className="w-full mt-8 py-4 bg-sentinel-green text-sentinel-blue font-bold rounded-lg text-lg hover:bg-green-400 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Submit Check-in
      </motion.button>
    </div>
  );
};

export default WellnessCheckin;