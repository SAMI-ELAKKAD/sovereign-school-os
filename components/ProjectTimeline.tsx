import React from 'react';
// Fix: Added Variants type import to correctly type the animation variants object.
import { motion, Variants } from 'framer-motion';
import type { Milestone } from '../types';

interface ProjectTimelineProps {
  timeline: Milestone[];
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ timeline }) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute left-3 sm:left-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      {timeline.map((item, index) => {
        const isEven = index % 2 === 0;
        // Fix: Explicitly typed the variants object with Variants to satisfy framer-motion's expected type.
        const variants: Variants = {
            hidden: { opacity: 0, y: 20 },
            visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                    duration: 0.6, 
                    ease: "easeOut" 
                } 
            }
        };

        return (
            <motion.div 
                key={index} 
                className="relative mb-8 last:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={variants}
            >
                <div className="flex sm:items-center w-full">
                    <div className={`flex w-full items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                        <div className="w-full sm:w-1/2 sm:pr-8 sm:rtl:pr-0 sm:rtl:pl-8">
                            <div className="p-4 rounded-lg shadow-md border bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700">
                                <time className="block text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-1">{item.date}</time>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-3 sm:left-1/2 top-4 -ml-1 h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></div>
            </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectTimeline;