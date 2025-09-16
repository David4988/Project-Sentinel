// src/pages/PrivacyConsentPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const PrivacyConsentPage = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-8">
        <h1 className="text-4xl font-poppins font-bold text-sentinel-blue">
          Privacy & Consent
        </h1>
        <p className="text-sentinel-text-dark">You are in control of your data.</p>
      </header>

      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
        <h2 className="text-xl font-poppins font-bold text-sentinel-blue mb-4">
          Data Sharing with Academic Advisors
        </h2>
        <p className="text-sentinel-text-dark mb-6">
          To help us provide proactive support, you can choose to share your wellness and engagement data with your assigned academic advisor. This data will only be used to offer timely help and resources.
        </p>

        <div 
          className="flex items-center p-2 rounded-full cursor-pointer w-48 transition-colors duration-300"
          onClick={() => setConsentGiven(!consentGiven)}
          style={{ backgroundColor: consentGiven ? '#2ECC71' : '#E74C3C' }}
        >
          <motion.div 
            className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center"
            layout
            transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          >
            {consentGiven ? <FiCheckCircle className="text-green-500" size={24} /> : <FiXCircle className="text-red-500" size={24} />}
          </motion.div>
          <span className="font-bold text-white text-lg mx-auto pr-4">
            {consentGiven ? 'Allowed' : 'Denied'}
          </span>
        </div>
        
        <AnimatePresence>
          {consentGiven && (
            <motion.p 
              className="mt-6 p-4 bg-green-100/50 text-green-800 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Thank you! Your advisor can now view your data to offer better support. You can revoke this consent at any time.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PrivacyConsentPage;