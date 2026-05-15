
import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { SparklesIcon, CpuChipIcon, GlobeAltIcon } from './IconComponents';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const FlowCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        const rotateX = (y - height / 2) / 25;
        const rotateY = -(x - width / 2) / 25;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    return (
        <motion.div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.2s ease-out' }}
            variants={itemVariants} 
            className="glass-card interactive-card p-6 rounded-lg shadow-sm"
        >
            <div style={{ transform: 'translateZ(20px)' }}>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-cyan-500 mt-1">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">{description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const FlowArrow: React.FC = () => (
    <motion.div variants={itemVariants} className="h-12 flex justify-center items-center">
        <div className="w-px h-full bg-cyan-500/50"></div>
    </motion.div>
);

const TechDeepDive: React.FC = () => {
    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
        >
            <FlowCard 
                icon={<SparklesIcon className="w-8 h-8"/>}
                title="Dynamic World-Building from Any Source"
                description="S.S.O. uses Gemini Pro's advanced reasoning to ingest any curriculum document—from a simple topic to a full PDF. It then acts as a 'Dungeon Master,' transforming dry standards into personalized, narrative-driven quests and interactive game worlds for students."
            />
            <FlowArrow />
            <FlowCard 
                icon={<CpuChipIcon className="w-8 h-8"/>}
                title="A Symphony of Specialized AIs"
                description="We orchestrated a suite of specialized models: `gemini-2.5-flash-native-audio-preview-09-2025` for privacy-first voice analysis, `imagen-4.0-generate-001` for custom lesson art, and `Veo` for cinematic story moments. This multi-model approach ensures the best AI is used for every task."
            />
             <FlowArrow />
            <FlowCard 
                icon={<GlobeAltIcon className="w-8 h-8"/>}
                title="Cultural Persona Engine on a Global, Serverless Stage"
                description="The AI generates culturally-aware hero personas to act as student mentors. This entire personalized experience runs on a 100% serverless architecture using `localStorage`, guaranteeing absolute privacy and global accessibility without needing a database or VPN."
            />
        </motion.div>
    );
}

export default TechDeepDive;