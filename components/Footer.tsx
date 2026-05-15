import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-sky-400/20 backdrop-blur-md">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-base">
        <p>&copy; {new Date().getFullYear()} AI-Explorers. All Rights Reserved.</p>
        <p className="mt-1">2025 AIID Hackathon Group Documentation Website</p>
      </div>
    </footer>
  );
};

export default Footer;
