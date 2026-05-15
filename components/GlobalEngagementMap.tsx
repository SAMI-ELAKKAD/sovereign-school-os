import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { Testimonial } from '../types';

const countryPositions: { [key: string]: { top: string; left: string } } = {
  'USA': { top: '35%', left: '22%' },
  'Canada': { top: '25%', left: '25%' },
  'Brazil': { top: '65%', left: '35%' },
  'Japan': { top: '35%', left: '80%' },
};

// Group testimonials by country
const groupTestimonialsByCountry = (testimonials: Testimonial[]) => {
    const grouped: { [key: string]: Testimonial[] } = {};
    testimonials.forEach(testimonial => {
        if (countryPositions[testimonial.country]) {
            if (!grouped[testimonial.country]) {
                grouped[testimonial.country] = [];
            }
            grouped[testimonial.country].push(testimonial);
        }
    });
    return grouped;
};

interface GlobalEngagementMapProps {
  testimonials: Testimonial[];
}

const GlobalEngagementMap: React.FC<GlobalEngagementMapProps> = ({ testimonials }) => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const grouped_testimonials = groupTestimonialsByCountry(testimonials);
  const activeTestimonials = activeCountry ? grouped_testimonials[activeCountry] : null;
  const maxCount = Math.max(0, ...Object.values(grouped_testimonials).map(g => g.length));
  
  const rotateVal = useMotionValue(0);
  const inverseRotate = useTransform(rotateVal, v => -v);
  
  useEffect(() => {
      const controls = animate(rotateVal, 360, {
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
      });
      return controls.stop;
  }, [rotateVal]);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
        <motion.div
            className="w-[400px] h-[400px] rounded-full relative"
            style={{
                background: 'radial-gradient(circle at 30% 30%, #a5f3fc, #06b6d4, #0891b2)',
                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5), 0 0 20px -5px #06b6d4',
                rotate: rotateVal,
            }}
        >
            {/* Glossy highlight effect */}
            <div 
                className="absolute top-[5%] left-[10%] w-[80%] h-[80%] rounded-full"
                style={{
                    background: 'radial-gradient(circle at 50% 0, rgba(255,255,255,0.4), rgba(255,255,255,0) 60%)'
                }}
            />

            {Object.entries(grouped_testimonials).map(([country, countryTestimonials]) => {
                const position = countryPositions[country];
                const count = countryTestimonials.length;
                const size = 16 + (count - 1) * 4; // Base size 16px, +4px for each extra testimonial
                const isMax = count === maxCount && maxCount > 1;
                
                return (
                    <motion.div
                        key={country}
                        className="absolute"
                        style={{ 
                            top: position.top, 
                            left: position.left,
                            rotate: inverseRotate
                         }}
                        onMouseEnter={() => setActiveCountry(country)}
                        onMouseLeave={() => setActiveCountry(null)}
                        whileHover={{ zIndex: 10 }}
                    >
                        <motion.div
                            className={`rounded-full border-2 cursor-pointer flex items-center justify-center font-bold transform -translate-x-1/2 -translate-y-1/2 ${isMax ? 'bg-amber-400 border-amber-200 text-amber-900' : 'bg-white border-cyan-200 text-cyan-800'}`}
                            style={{ width: size, height: size }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {count > 1 && <span>{count}</span>}
                        </motion.div>
                         <div 
                            className={`absolute rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2 ${isMax ? 'bg-amber-400/50' : 'bg-white/30'}`}
                            style={{ 
                                width: size * 1.5, 
                                height: size * 1.5,
                                top: 0,
                                left: 0,
                            }}
                         />
                    </motion.div>
                );
            })}
        </motion.div>

        <AnimatePresence>
        {activeTestimonials && (
             <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="absolute bottom-0 right-0 w-full max-w-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-h-48 overflow-y-auto"
            >
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Feedback from {activeCountry} ({activeTestimonials.length})</h3>
                <div className="space-y-3">
                  {activeTestimonials.map(testimonial => (
                    <div key={testimonial.author}>
                      <p className="text-sm text-gray-700 dark:text-gray-200 italic">"{testimonial.quote}"</p>
                      <p className="text-xs text-right font-semibold text-gray-600 dark:text-gray-400 mt-1">- {testimonial.author}</p>
                    </div>
                  ))}
                </div>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
  );
};

export default GlobalEngagementMap;
