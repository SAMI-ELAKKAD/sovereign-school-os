
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { ssoGlobalAppealPillars } from '../data';
import { GlobeAltIcon, SparklesIcon, LanguageIcon, HeartIcon } from './IconComponents';

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    GlobeAltIcon,
    SparklesIcon,
    LanguageIcon,
    HeartIcon,
};

const pillarColors = [
    '#06b6d4', // cyan-500
    '#d946ef', // fuchsia-500
    '#f59e0b', // amber-500
    '#10b981', // emerald-500
];

const GlobalAppealGlobe: React.FC = () => {
    const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
    const rotate = useMotionValue(0);

    useEffect(() => {
        const controls = animate(rotate, 360, {
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
        });
        return () => controls.stop();
    }, [rotate]);

    const ORBIT_RADIUS = 180; // in pixels
    const ORBIT_RADIUS_MOBILE = 120;
    
    // Get the current viewport width
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const currentOrbitRadius = isMobile ? ORBIT_RADIUS_MOBILE : ORBIT_RADIUS;

    return (
        <div className="relative flex items-center justify-center h-[450px] my-12">
            {/* Pulsating Center Globe */}
            <motion.div
                className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent))',
                    backgroundSize: '200% 200%',
                    animation: 'globe-gradient-flow 10s ease-in-out infinite',
                    boxShadow: '0 0 40px var(--color-primary), 0 0 60px var(--color-secondary), inset 0 0 20px rgba(0,0,0,0.3)',
                }}
            />

            {/* Orbiting Pillars */}
            {ssoGlobalAppealPillars.map((pillar, index) => {
                const Icon = iconMap[pillar.icon];
                const angle = (index / ssoGlobalAppealPillars.length) * 2 * Math.PI;

                const x = useTransform(rotate, v => `${currentOrbitRadius * Math.cos(angle + (v * Math.PI / 180))}px`);
                const y = useTransform(rotate, v => `${currentOrbitRadius * Math.sin(angle + (v * Math.PI / 180))}px`);

                return (
                    <motion.div
                        key={pillar.title}
                        className="absolute flex items-center justify-center cursor-pointer z-10"
                        style={{ x, y }}
                        onMouseEnter={() => setHoveredPillar(index)}
                        onMouseLeave={() => setHoveredPillar(null)}
                        whileHover={{ scale: 1.2, zIndex: 20 }}
                    >
                        <motion.div
                            className="w-16 h-16 md:w-20 md:h-20 bg-slate-800 rounded-full flex items-center justify-center border-2"
                            style={{ borderColor: pillarColors[index] }}
                            animate={{
                                boxShadow: hoveredPillar === index
                                    ? `0 0 20px ${pillarColors[index]}`
                                    : `0 0 10px ${pillarColors[index]}`,
                            }}
                        >
                            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </motion.div>
                    </motion.div>
                );
            })}
            
            {/* Description Card */}
            <AnimatePresence>
                {hoveredPillar !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="absolute w-full max-w-sm md:max-w-md glass-card p-6 rounded-lg text-center pointer-events-none"
                        style={{
                            borderColor: pillarColors[hoveredPillar],
                            boxShadow: `0 0 25px -5px ${pillarColors[hoveredPillar]}`,
                        }}
                    >
                        <h4 className="text-2xl font-bold mb-2" style={{ color: pillarColors[hoveredPillar] }}>
                            {ssoGlobalAppealPillars[hoveredPillar].title}
                        </h4>
                        <p className="text-gray-300 text-base">{ssoGlobalAppealPillars[hoveredPillar].description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GlobalAppealGlobe;
