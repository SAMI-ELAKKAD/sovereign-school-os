
import React from 'react';
import { motion } from 'framer-motion';
import VibeCodingPlayground from '../components/VibeCodingPlayground';

const TutorialPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl sm:text-6xl">Live Vibe Coding ⚡️</h1>
        <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-400">
          Welcome to our interactive tutorial. We believe in "Vibe Coding"—the idea that you can create UIs by describing them in plain English. This playground demonstrates the core concept behind our rapid prototyping process. Describe a component and watch the AI generate the code in real-time.
        </p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="glass-card p-6 md:p-8 rounded-lg">
          <VibeCodingPlayground />
        </div>
      </motion.div>
    </div>
  );
};

export default TutorialPage;
