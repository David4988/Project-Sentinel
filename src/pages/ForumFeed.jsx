// src/pages/ForumFeedPage.jsx
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';

const posts = [
  { id: 1, author: "Arjun", text: "Does anyone have notes for OS Unit 3?" },
  { id: 2, author: "Priya", text: "Yes, I'll share the PDF in the group." },
  { id: 3, author: "Rahul", text: "Reminder: Project submission is due next Monday." },
];

const ForumFeedPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-8">
        <h1 className="text-4xl font-poppins font-bold text-sentinel-blue">
          Class Forum
        </h1>
        <p className="text-sentinel-text-dark">A space to collaborate and ask questions.</p>
      </header>

      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="font-bold text-sentinel-blue">{post.author}</p>
              <p className="text-sentinel-text-dark mt-1">{post.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ForumFeedPage;