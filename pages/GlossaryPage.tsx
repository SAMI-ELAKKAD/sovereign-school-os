

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { glossaryTerms } from '../data';
import { ChevronDownIcon } from '../components/IconComponents';

const GlossaryItem: React.FC<{ term: { term: string; definition: string } }> = ({ term }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full p-6 md:p-8 text-left"
            >
                <h2 className="text-2xl text-cyan-600 dark:text-cyan-400">{term.term}</h2>
                <ChevronDownIcon
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 md:px-8 pb-6">
                           <p className="text-lg text-gray-700 dark:text-gray-300">{term.definition}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const GlossaryPage: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        const rotateX = (y - height / 2) / 40;
        const rotateY = -(x - width / 2) / 40;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Abstract technology background" className="w-full h-auto max-w-4xl mx-auto object-cover rounded-xl shadow-lg mb-8" />
        <h1 className="text-5xl sm:text-6xl">Glossary of Terms 📚</h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400">
          Your guide to the key concepts and technologies we used during the hackathon. We believe in making knowledge accessible to everyone.
        </p>
      </motion.div>
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.2s ease-out' }}
        className="max-w-4xl mx-auto glass-card interactive-card rounded-lg overflow-hidden"
      >
        <div style={{ transform: 'translateZ(20px)' }}>
            {glossaryTerms.map((item, index) => (
            <GlossaryItem key={index} term={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;